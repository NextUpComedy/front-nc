import { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks';
import { blockUser } from 'store/admin/thunk';
import {
  Button, Input, Popconfirm, Table,
} from 'components/AntDesign';
import ModalForm from 'components/Dashboard/NewUsers/Modal';
import { Loader, Image } from 'shared/components';
import { columns } from 'shared/objects/Users';
import {
  EDIT_USER_ENDPOINT,
  USER_STATISTICS_ENDPOINT,
} from 'shared/constants/endpoints';
import pieChartIcon from 'assets/images/pie-chart.png';
import { ROLES } from 'shared/constants';

function UsersTable({ listToDisplay, thunkFunction }) {
  const [dataSource, setDataSource] = useState([]);
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [list, isLoading] = useAppSelector((state) => [
    state.admin[listToDisplay],
    state.admin.isLoading,
  ]);
  const { user: { roleId } } = useAppSelector((state) => state.checkAuth);

  const handleSearch = (e) => {
    const currValue = e.target.value;
    setValue(currValue);
    const filteredData = list.filter((entry) => entry.name.toLowerCase().includes(currValue));
    setDataSource(filteredData);
  };
  const handleBlock = (user) => dispatch(blockUser(user));

  useEffect(() => {
    dispatch(thunkFunction());
  }, []);

  useEffect(() => {
    setDataSource(list);
  }, [list]);

  const FilterByNameInput = (
    <Input
      placeholder="Search user by Name"
      allowClear
      value={value}
      onChange={handleSearch}
    />
  );

  const columnsWithAction = [
    ...columns,
    {
      title: 'Action',
      key: 'action',
      render: (_text, user) => (
        <ModalForm user={user} listToDisplay={listToDisplay} />
      ),
    },
  ];

  const rejectedColumnsAction = [
    ...columns,
    {
      title: 'Rejection Reason',
      dataIndex: 'rejectionReason',
      key: 'rejectionReason',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_text, user) => (
        <ModalForm user={user} listToDisplay={listToDisplay} />
      ),
    },
  ];

  const approvedColumnsAction = [
    ...columns,
    {
      title: 'Action',
      key: 'action',
      render: (_text, user) => (
        <div className="table-cont">
          <Button
            onClick={() => navigate(EDIT_USER_ENDPOINT(user.id))}
            type="primary"
            className="table-btn"
          >
            Edit
          </Button>
          {roleId === ROLES.MASTER_ADMIN && (
          <Popconfirm title="Are you sure you want to block this user?" onConfirm={() => handleBlock(user)}>
            <Button
              type="primary"
              className="table-btn-block"
            >
              Block
            </Button>
          </Popconfirm>
          )}
        </div>
      ),
    },
    {
      title: 'Statistics',
      key: 'Statistics',
      render: (_text, user) => (
        <div
          onClick={() => navigate(USER_STATISTICS_ENDPOINT(user.id))}
          type="primary"
          aria-hidden="true"
          className="statistics"
        >
          <Image src={pieChartIcon} alt="logo" className="iconStas" />

        </div>
      ),
    },
  ];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="sort">
      <div className="search">{FilterByNameInput}</div>
      <div className="table">
        <Table
          columns={
            listToDisplay === 'waitingList'
              ? columnsWithAction
              : listToDisplay === 'approvedList'
                ? approvedColumnsAction
                : listToDisplay === 'rejectedList'
                  ? rejectedColumnsAction
                  : columns
          }
          dataSource={dataSource}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 500 }}
        />
      </div>
    </div>
  );
}

export default UsersTable;

UsersTable.propTypes = {
  listToDisplay: PropsTypes.string.isRequired,
  thunkFunction: PropsTypes.func.isRequired,
};
