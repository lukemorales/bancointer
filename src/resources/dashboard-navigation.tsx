import React from 'react';

import {
  BarChartIcon,
  DollarSignIcon,
  PieChartIcon,
  ShieldIcon,
  SmartphoneIcon,
  UmbrellaIcon,
} from '../assets/images/icons';

export default {
  'Conta Digital': {
    icon: <SmartphoneIcon />,
  },
  Crédito: {
    icon: <DollarSignIcon />,
  },
  Investimentos: {
    icon: <BarChartIcon />,
  },
  IDTVM: {
    icon: <PieChartIcon />,
  },
  Seguros: {
    icon: <UmbrellaIcon />,
  },
  'Recarga de Celular': {
    icon: <SmartphoneIcon />,
  },
  'Sua Segurança': {
    icon: <ShieldIcon />,
  },
} as const;
