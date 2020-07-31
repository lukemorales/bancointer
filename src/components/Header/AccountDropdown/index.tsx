import React from 'react';

import { useTheme } from 'styled-components';

import { Container } from './styles';
import { User } from '../Header';

const removeHashFromColor = (color: string): string => color.slice(1);

type AccountDropdownProps = {
  user: User;
};

const AccountDropdown: React.FC<AccountDropdownProps> = ({ user }) => {
  const { lightGrey, secondary } = useTheme().colors;

  return (
    <Container>
      <img
        src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(secondary)}&name=${user.name}`}
        alt="user"
      />
    </Container>
  );
};

export default AccountDropdown;
