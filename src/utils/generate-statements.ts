import faker from 'faker';

import generateMonthsInterval from './generate-months-interval';

import theme from '~/styles/theme';

export type GeneratedStatement = {
  month: string;
  income: number;
  incomeColor: string;
  outcome: number;
  outcomeColor: string;
};

export interface GenerateStatements {
  (visible?: boolean): Array<GeneratedStatement>;
}

const generateStatements: GenerateStatements = (visible = true) => {
  const currentMonthsInterval = generateMonthsInterval();

  return currentMonthsInterval.map((month) => {
    const income = visible ? +faker.finance.amount(4750, 8000, 2) : 1;
    const outcome = visible
      ? +faker.finance.amount(-income + 150, -2750, 2)
      : -1;

    return {
      month,
      income,
      incomeColor: theme.colors.success,
      outcome,
      outcomeColor: theme.colors.error,
    };
  });
};

export default generateStatements;
