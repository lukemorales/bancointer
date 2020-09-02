import faker from 'faker';

import generateMonthsInterval from './generate-months-interval';
import formatCurrency from './format-currency';

import theme from '~/styles/theme';

export interface GeneratedInvestment {
  id: string;
  color: string;
  data: Datum[];
}

export interface Datum {
  x: string;
  y: number;
}

export interface Investments {
  amount: string;
  timeline: Array<GeneratedInvestment>;
}

const generateInvestments = (): Investments => {
  const currentMonthsInterval = generateMonthsInterval();

  const chartData = currentMonthsInterval.map((month) => ({
    x: month,
    y: +faker.finance.amount(2, 37),
  }));

  return {
    amount: formatCurrency(+faker.finance.amount(3500, 35000, 2)),
    timeline: [
      {
        id: 'investments',
        color: theme.colors.success,
        data: chartData,
      },
    ],
  };
};

export default generateInvestments;
