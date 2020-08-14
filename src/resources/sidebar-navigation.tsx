import React from 'react';

import {
  FiBarChart2,
  FiDollarSign,
  FiPieChart,
  FiSmartphone,
  FiUmbrella,
  FiShield,
} from 'react-icons/fi';

export default {
  'Conta Digital': {
    icon: <FiSmartphone />,
  },
  Crédito: {
    icon: <FiDollarSign />,
  },
  Investimentos: {
    icon: <FiBarChart2 />,
  },
  IDTVM: {
    icon: <FiPieChart />,
  },
  Seguros: {
    icon: <FiUmbrella />,
  },
  'Recarga de Celular': {
    icon: <FiSmartphone />,
  },
  'Sua Segurança': {
    icon: <FiShield />,
  },
} as const;
