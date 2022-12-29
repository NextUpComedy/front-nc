import PropsTypes from 'prop-types';

import { StatisticsGrid } from 'components';
import { Card } from 'components/AntDesign';
import { ComponentLayout } from 'layouts';
import { MainTitle } from 'shared';
import { icons } from 'shared/constants';
import './style.css';

export default function GeneralView({
  count, balance, payout, earning,
}) {
  const {
    Content, Balance, Earnings, Payouts,
  } = icons;
  const arr = [
    {
      icon: Content,
      title: 'Content',
      value: count,
    },
    {
      icon: Balance,
      title: 'Balance',
      value: balance,
    },
    {
      icon: Earnings,
      title: 'Earning',
      value: earning,
    },
    {
      icon: Payouts,
      title: 'Payouts',
      value: payout,
    },
  ];
  return (
    <ComponentLayout title="Statistics">
      <MainTitle title="General View" />
      <Card className="general-view-statistics">
        {arr.map(({
          icon, value, title,
        }) => (
          <StatisticsGrid icon={icon} title={title} value={value} key={title} />
        ))}
      </Card>
    </ComponentLayout>
  );
}

GeneralView.propTypes = {
  count: PropsTypes.number,
  balance: PropsTypes.number,
  payout: PropsTypes.number,
  earning: PropsTypes.number,
};
GeneralView.defaultProps = {
  count: 0,
  balance: 0,
  earning: 0,
  payout: 0,
};
