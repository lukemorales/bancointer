import React from 'react';

import { useTheme } from 'styled-components';

import { AnimatedContainer } from './styles';

export interface AuthLayoutProps {
  background: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ background, children }) => {
  const { colors } = useTheme();

  return (
    <AnimatedContainer
      initial={false}
      animate={{ background }}
      exit={{ background: colors.lightGrey }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </AnimatedContainer>
  );
};

export default AuthLayout;
