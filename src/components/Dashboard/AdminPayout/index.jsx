import { useEffect, useState } from 'react';

import { useAppDispatch } from 'hooks';
import { Table } from 'components/AntDesign';
import { ComponentLayout } from 'layouts';
import { adminPayoutColumns } from 'shared/objects/Users';
import { getAdminPayouts } from 'store/admin/thunk';
import editedRows from 'utils/editedRows';

function AdminPayout() {
  const [rows, setRows] = useState([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await dispatch(getAdminPayouts()).unwrap();
      setRows(data.rows);
    };
    fetchData();
  }, []);

  return (
    <ComponentLayout title="Payout" heading="Payout Requests">
      <Table
        columns={adminPayoutColumns}
        dataSource={editedRows(rows)}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 500 }}
      />
    </ComponentLayout>
  );
}

export default AdminPayout;
