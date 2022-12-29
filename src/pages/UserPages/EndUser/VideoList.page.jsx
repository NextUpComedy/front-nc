import { useEffect, useState } from 'react';
import { DetailedView } from 'components';
import { ComponentLayout } from 'layouts';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getUserContent } from 'store/user/thunk';

function VideoList() {
  const dispatch = useAppDispatch();
  const [rows, setRows] = useState([]);
  const { user } = useAppSelector((state) => state.checkAuth);

  useEffect(() => {
    if (user.id) {
      const fetchData = async () => {
        const response = await dispatch(getUserContent({ page: 1, limit: 5 })).unwrap();
        setRows(response.data?.rows);
      };
      fetchData();
    }
  }, []);
  return (
    <ComponentLayout title="Video List" heading="Video List">
      <DetailedView rows={rows} listToSee="videoList" />
    </ComponentLayout>
  );
}

export default VideoList;
