import { ReactText } from 'react';

export interface FormatChartValue {
  (value?: number | ReactText): string;
}

const formatChartValue: FormatChartValue = (value) => `${value || 0}%`;

export default formatChartValue;
