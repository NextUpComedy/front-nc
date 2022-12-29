import { useEffect, useState } from 'react';

import { GeneralView, DetailedView } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getStatistics } from 'store/user/thunk';
import { Loader } from 'shared/components';

function Statistics() {
  const dispatch = useAppDispatch();
  const [theData, setData] = useState({});
  const [rows, setRows] = useState([]);

  const { user, isLoading } = useAppSelector((state) => state.checkAuth);

  useEffect(() => {
    if (user.id) {
      const fetchData = async () => {
        const data = await dispatch(getStatistics()).unwrap();
        setData(data.data);
        setRows(data.data?.content.rows);
      };
      fetchData();
    }
  }, []);

  const earning = Number(theData?.totalRevenue).toFixed(3);
  const payout = theData?.paidRevenue;
  const count = theData.content?.count;
  const balance = +rows
    .reduce((acc, { owedAccRevenue }) => +acc + Number(owedAccRevenue), 0)
    .toFixed(3);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <GeneralView count={count} balance={balance} earning={+earning} payout={+payout} />
      <DetailedView rows={rows} />
    </>
  );
}

export default Statistics;
