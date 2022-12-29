import { Route } from 'react-router-dom';
import { Button, Popconfirm } from 'components/AntDesign';
import PayoutModal from 'components/Dashboard/AdminPayout/Modal';
import { icons } from 'shared/constants';
import { formatDateTime } from 'utils';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
  },

  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Registration Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (dateInISO) => formatDateTime(dateInISO),
  },
  {
    title: 'Role',
    dataIndex: 'roleName',
    key: 'roleName',
  },
];

const statisticsColumns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'name',
  },
  {
    title: 'Watched Time',
    dataIndex: 'watchedSeconds',
    key: 'watchedSeconds',
  },
  {
    title: 'Revenue',
    dataIndex: 'owedRevenue',
    key: 'owedRevenue',
  },
  {
    title: 'Ticket',
    dataIndex: 'tvodTicketsCount',
    key: 'tvodTicketsCount',
  },
];

const videoListColumns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'name',
  },
  {
    title: 'Launch Date',
    dataIndex: 'launchDate',
    key: 'launchDate',
  },
  {
    title: 'Run Time',
    dataIndex: 'runtime',
    key: 'runtime',
  },
  {
    title: 'Revenue',
    dataIndex: 'owedAccRevenue',
    key: 'owedAccRevenue',
  },
];
const latestReportColumns = [
  {
    title: 'Watched Time From',
    dataIndex: 'watchTimeFrom',
    key: 'watchTimeFrom',
  },
  {
    title: 'Watched Time To',
    dataIndex: 'watchTimeTo',
    key: 'watchTimeTo',
  },
  {
    title: 'Total Revenue',
    dataIndex: 'totalRevenue',
    key: 'totalRevenue',
  },
  {
    title: 'overallWatchedSeconds',
    dataIndex: 'overallWatchedSeconds',
    key: 'overallWatchedSeconds',
  },
];

const adminPayoutColumns = [
  { title: 'Payout ID', dataIndex: 'id', key: 'id' },
  { title: 'User ID', dataIndex: 'userId', key: 'userId' },
  {
    title: 'Payout Status',
    dataIndex: 'payoutStatusId',
    key: 'payoutStatusId',
  },
  { title: 'Amount', dataIndex: 'amount', key: 'amount' },
  { title: 'Requested At', dataIndex: 'createdAt', key: 'Requestedat' },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (text, payout) => {
      if (payout.payoutStatusId === 1) {
        return <PayoutModal payout={payout} />;
      }
      return null;
    },
  },
];

const {
  Content, Earnings, Payouts, PendingUsers, AllUsers,
} = icons;

const AdminGeneralColumns = (
  count,
  earning,
  Payout,
  allUsers,
  pendingUsers,
) => {
  const AdminGeneralViewColumns = [
    {
      icon: Content,
      title: 'Content',
      value: count,
    },
    {
      icon: Earnings,
      title: 'Earning',
      value: earning,
    },
    {
      icon: Payouts,
      title: 'Payouts',
      value: Payout,
    },
    {
      icon: AllUsers,
      title: 'All Users',
      value: allUsers,
    },
    {
      icon: PendingUsers,
      title: 'Pending Users',
      value: pendingUsers,
    },
  ];
  return AdminGeneralViewColumns;
};
const payoutColumns = (handlePayout) => [
  {
    title: 'Payout ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Payout Status',
    dataIndex: 'payoutStatusId',
    key: 'payoutStatusId',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Requested At',
    dataIndex: 'createdAt',
    key: 'Requestedat',
  },
  {
    title: 'Rejection Reason If Any',
    dataIndex: 'rejectionReason',
    key: 'rejectionReason',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => {
      if (record.payoutStatusId === 1) {
        return (
          <Popconfirm
            title="Are you sure to cancel this payout?"
            onConfirm={() => handlePayout()}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Cancel
            </Button>
          </Popconfirm>
        );
      }
      return null;
    },
  },
];
const payoutHistoryColumns = [
  {
    title: 'Payout ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Payout Status',
    dataIndex: 'payoutStatusId',
    key: 'payoutStatusId',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Requested At',
    dataIndex: 'createdAt',
    key: 'Requestedat',
  },
  {
    title: 'Rejection Reason If Any',
    dataIndex: 'rejectionReason',
    key: 'rejectionReason',
  },
];
const routesBasedOnRole = (role, routes, Index) => (
  <>
    {routes.map(({ key, path, Component }) => (
      <Route key={key} path={path} element={<Component />} />
    ))}
    <Route index element={<Index />} />
  </>
);
export {
  columns,
  statisticsColumns,
  latestReportColumns,
  AdminGeneralColumns,
  videoListColumns,
  payoutColumns,
  adminPayoutColumns,
  payoutHistoryColumns,
  routesBasedOnRole,
};
