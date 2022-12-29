import PropsTypes from 'prop-types';

import { ComponentLayout } from 'layouts';
import { latestReportColumns } from 'shared/objects/Users';
import { Table } from 'components/AntDesign';
import { formatDateTime } from 'utils';

export default function AdminDetailedView({ rows }) {
  return (
    <ComponentLayout heading="Latest Report ">
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

AdminDetailedView.propTypes = {
  rows: PropsTypes.array.isRequired,
};
