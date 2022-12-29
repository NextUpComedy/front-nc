import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { getAdminStatistics } from 'store/admin/thunk';
import { ComponentLayout } from 'layouts';
import { formatDateTime } from 'utils';
import { MainTitle } from 'shared';
import { latestReportColumns } from 'shared/objects/Users';
import { Table } from 'components/AntDesign';
import CreateReportModal from './CreateReportModal';

import './style.css';

function AdminReport() {
  const { dataRange } = useAppSelector((state) => state.admin);
  const [rows, setRows] = useState([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const { payload } = await dispatch(getAdminStatistics({ dataRange }));
      setRows(payload.data.reports.rows);
    };
    fetchData();
  }, [dataRange]);

  return (

    <ComponentLayout title="Admin Report">
      <div className="requestpayment">
        <MainTitle title="Admin Report" />
        <CreateReportModal />
      </div>
      <Table
        columns={latestReportColumns}
        dataSource={rows.map((row) => ({
          watchTimeFrom: formatDateTime(row.watchTimeFrom),
          watchTimeTo: formatDateTime(row.watchTimeTo),
          overallWatchedSeconds: row.overallWatchedSeconds,
          totalRevenue: row.totalRevenue,
          key: row.overallWatchedSeconds,
        }))}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 500 }}
      />
    </ComponentLayout>
  );
}

export default AdminReport;
