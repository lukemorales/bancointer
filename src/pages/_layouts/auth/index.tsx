import React from 'react';

import { useTheme } from 'styled-components';

import { Container } from './styles';

const AuthLayout: React.FC<{ background: string }> = ({
  background,
  children,
}) => {
  const { colors } = useTheme();

  return (
    <Container
      animate={{ background }}
      exit={{ background: colors.lightGrey }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </Container>
  );
};

export default AuthLayout;
