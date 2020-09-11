import React, { PropsWithChildren } from 'react';

import { useTheme } from 'styled-components';

import { AnimatedContainer } from './styles';

export type AuthLayoutProps = {
  background: string;
};

const AuthLayout = (props: PropsWithChildren<AuthLayoutProps>) => {
  const { background, children } = props;
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
