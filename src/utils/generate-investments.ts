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

export interface GenerateInvestments {
  (visible?: boolean): Investments;
}

const generateInvestments: GenerateInvestments = (visible = true) => {
  const currentMonthsInterval = generateMonthsInterval();

  const chartData = currentMonthsInterval.map((month) => ({
    x: month,
    y: visible ? +faker.finance.amount(5, 37) : 0,
  }));

  const timeline = [
    {
      id: 'investments',
      color: theme.colors.success,
      data: chartData,
    },
  ];

  return {
    amount: formatCurrency(+faker.finance.amount(3500, 35000, 2)),
    timeline,
  };
};

export default generateInvestments;
