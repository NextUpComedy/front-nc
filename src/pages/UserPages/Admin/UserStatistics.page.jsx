import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { GeneralView, DetailedView } from 'components';
import { getUserStatistics } from 'store/admin/thunk';

function UserStatisticsPage() {
  const dispatch = useAppDispatch();
  const { userId } = useParams();
  const [data, setData] = useState({});
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { payload } = await dispatch(getUserStatistics(userId));
      setData(payload.data);
      setRows(payload.data.content.rows);
    };
    fetchData();
  }, [userId]);
  const balance = data?.balance;
  const earning = data?.totalRevenue;
  const payout = data?.paidRevenue;
  return (
    <>
      <GeneralView
        count={data?.content?.count}
        balance={Math.round(balance * 100) / 100}
        earning={Math.round(earning * 100) / 100}
        payout={Math.round(payout * 100) / 100}
      />
      <DetailedView rows={rows} title="Detailed View" />
    </>
  );
}

export default UserStatisticsPage;
