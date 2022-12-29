import PropsTypes from 'prop-types';
import moment from 'moment';

import { useAppDispatch } from 'hooks';
import { setDataRange } from 'store/admin/slice';
import { StatisticsGrid } from 'components';
import { ComponentLayout } from 'layouts';
import { DatePicker, Card } from 'components/AntDesign';
import { MainTitle } from 'shared';
import { AdminGeneralColumns } from 'shared/objects/Users';

import './style.css';

const { RangePicker } = DatePicker;
export default function AdminGeneralView({
  count, earning, Payout, allUsers, pendingUsers,
}) {
  const dispatch = useAppDispatch();
  const columns = AdminGeneralColumns(count, earning, Payout, allUsers, pendingUsers);
  const onChange = (dates, dateStrings) => {
    if (dates) {
      dispatch(setDataRange([dateStrings[0], dateStrings[1]]));
    }
  };
  return (
    <ComponentLayout title="Statistics">
      <div className="statisticsHeading">
        <MainTitle title="General View" />

        <RangePicker
          onChange={onChange}
          defaultValue={[moment().startOf('year'), moment()]}
          dropdownClassName="createDateRangePicker"
          className="DateRangePicker"
          ranges={{
            Today: [moment(), moment()],
            'This Week': [moment().startOf('week'), moment().endOf('week')],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'This Year': [moment().startOf('year'), moment()],
            'Past 7 Days': [moment().subtract(7, 'days'), moment()],
            'Past 30 Days': [moment().subtract(30, 'days'), moment()],
            'Past 90 Days': [moment().subtract(90, 'days'), moment()],
            'Past 1 Year': [moment().subtract(1, 'year'), moment()],
          }}
        />

      </div>
      <Card className="general-view-statistics">
        {columns.map(({
          icon, value, title,
        }) => (
          <StatisticsGrid icon={icon} title={title} value={value} key={title} />
        ))}
      </Card>
    </ComponentLayout>
  );
}

AdminGeneralView.propTypes = {
  count: PropsTypes.number,
  earning: PropsTypes.number,
  pendingUsers: PropsTypes.number,
  Payout: PropsTypes.number,
  allUsers: PropsTypes.number,
};

AdminGeneralView.defaultProps = {
  count: 0,
  earning: 0,
  pendingUsers: 0,
  Payout: 0,
  allUsers: 0,
};
