import React from 'react';

import { useTheme } from 'styled-components';

import { Container } from './styles';

import useAuth from '~/contexts/auth';

const removeHashFromColor = (color: string): string => color.slice(1);

const AccountDropdown: React.FC = () => {
  const { user } = useAuth();
  const { lightGrey, secondary } = useTheme().colors;

  return (
    <Container>
      <img
        src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(secondary)}&name=${user}`}
        alt="user"
      />
    </Container>
  );
};

export default AccountDropdown;
