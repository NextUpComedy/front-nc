import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { askForPayout, cancelPayout, getUserPayouts } from 'store/user/thunk';
import { Button, Popconfirm, Table } from 'components/AntDesign';
import { ComponentLayout } from 'layouts';
import { MainTitle } from 'shared';
import { payoutColumns, payoutHistoryColumns } from 'shared/objects/Users';
import editedRows from 'utils/editedRows';
import './style.css';

function Payout() {
  const { payouts } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const askForMyPayout = () => {
    dispatch(askForPayout());
  };
  const cancelMyPayout = () => {
    dispatch(cancelPayout());
  };

  const pendingPayout = editedRows(payouts).filter((row) => row.payoutStatusId === 1);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getUserPayouts());
    };
    fetchData();
  }, []);

  return (
    <>
      <ComponentLayout title="Payout">
        <div className="requestpayment">
          <MainTitle title="My Pending Payment" />
          <Popconfirm
            title="Are you sure that you want to request this payout?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => askForMyPayout()}
          >
            <Button type="primary" className="ask-payment-btn">
              Request Payout
            </Button>
          </Popconfirm>
        </div>
        <Table
          locale={{ emptyText: 'No Pending Payouts' }}
          columns={payoutColumns(cancelMyPayout)}
          dataSource={pendingPayout || []}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 500 }}
          key="pending"
        />
      </ComponentLayout>
      <ComponentLayout heading="My Payment History">
        <Table
          locale={{ emptyText: 'No Pending Payouts' }}
          columns={payoutHistoryColumns}
          dataSource={editedRows(payouts)}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 500 }}
          key="history"
        />
      </ComponentLayout>
    </>
  );
}

export default Payout;
