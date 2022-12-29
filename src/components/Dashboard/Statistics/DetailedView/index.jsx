import humanizeDuration from 'humanize-duration';
import PropsTypes from 'prop-types';

import { ComponentLayout } from 'layouts';
import { statisticsColumns, videoListColumns } from 'shared/objects/Users';
import { Table } from 'components/AntDesign';

export default function DetailedView({ rows, listToSee }) {
  return (
    <div>
      {listToSee === 'videoList' ? (
        <Table
          columns={videoListColumns}
          dataSource={rows.map((row) => ({
            title: row.title,
            launchDate: row.launchDate.slice(0, 10),
            runtime: row.runtime,
            owedAccRevenue: Number(row.owedAccRevenue).toFixed(3),
            key: row.id,
          }))}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 500 }}
        />
      ) : (
        <ComponentLayout heading="Detailed View">
          <Table
            columns={statisticsColumns}
            dataSource={rows.map((row) => ({
              title: row.title,
              watchedSeconds: humanizeDuration(
                row.contentReports[0].watchedSeconds * 1000,
                { units: ['h', 'm', 's'] },
              ),
              owedRevenue: `${row.contentReports[0].owedRevenue.slice(0, 5)} £`,
              tvodTicketsCount: row.contentReports[0].tvodTicketsCount,
              key: row.title,
            }))}
            pagination={{ pageSize: 5 }}
            scroll={{ x: 500 }}
          />
        </ComponentLayout>
      )}
    </div>
  );
}

DetailedView.propTypes = {
  rows: PropsTypes.arrayOf(PropsTypes.object).isRequired,
  listToSee: PropsTypes.string,
};

DetailedView.defaultProps = {
  listToSee: '',
};
