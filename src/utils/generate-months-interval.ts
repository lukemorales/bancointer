import { eachMonthOfInterval, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export interface GenerateMonthsInterval {
  (): Array<string>;
}

const generateMonthsInterval: GenerateMonthsInterval = () => {
  const currentMonthsInterval = eachMonthOfInterval({
    start: subMonths(new Date(), 5),
    end: new Date(),
  });

  return currentMonthsInterval.map((month) =>
    format(month, 'LLL', { locale: ptBR }).toLowerCase(),
  );
};

export default generateMonthsInterval;
