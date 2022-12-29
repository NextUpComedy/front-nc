import { useEffect, useState } from 'react';
import { AdminDetailedView, AdminGeneralView } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAdminStatistics } from 'store/admin/thunk';

function AdminStatisticsPage() {
  const dispatch = useAppDispatch();
  const dataRange = useAppSelector((state) => state.admin.dataRange);
  const { isLoading } = useAppSelector((state) => state.user);
  const [data, setData] = useState({});
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { payload } = await dispatch(getAdminStatistics({ dataRange }));
      setData(payload.data);
      setRows(payload.data.reports.rows);
    };
    fetchData();
  }, [dataRange]);

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  const { statistics } = data;

  return (

    <>
      <AdminGeneralView
        count={statistics?.counts?.contents}
        earning={statistics?.revenues?.total?.earnings}
        pendingUsers={statistics?.counts.pendingUsers}
        Payout={statistics?.counts.Payout}
        allUsers={statistics?.counts.allUsers}
      />
      <AdminDetailedView rows={rows} />
    </>

  );
}

export default AdminStatisticsPage;
