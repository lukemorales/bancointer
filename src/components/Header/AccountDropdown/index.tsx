import React, { useState, useRef, useCallback } from 'react';

import { useTheme } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { FiLogOut } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, DropDown, LogOutButton } from './styles';

import useAuth from '~/contexts/auth';
import { DEFAULT_TRANSITION } from '~/constants';
import useEventListener from '~/hooks/useEventListener';

const dropDownAnimation = {
  visible: {
    y: 0,
    opacity: 1,
    transition: DEFAULT_TRANSITION,
  },
  hidden: {
    y: -20,
    opacity: 0,
    transition: DEFAULT_TRANSITION,
  },
};

const removeHashFromColor = (color: string): string => color.slice(1);

const AccountDropdown: React.FC = () => {
  const history = useHistory();
  const { account, signOut } = useAuth();
  const { lightGrey, secondary } = useTheme().colors;

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownVisibility = (): void => {
    setIsDropdownVisible(true);
  };

  const handleSignOut = (): void => {
    signOut();
    history.push('/');
  };

  const handleCloseDropdown = useCallback(
    ({ currentTarget }: Event): void => {
      if (dropdownRef.current?.contains(currentTarget as Node)) {
        return;
      }

      setIsDropdownVisible(false);
    },
    [setIsDropdownVisible],
  );

  useEventListener('click', handleCloseDropdown, {
    enabled: isDropdownVisible,
  });

  return (
    <Container onMouseEnter={handleDropdownVisibility}>
      <img
        src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(secondary)}&name=${account.user.name}`}
        alt={`Conta de ${account.user.name}`}
      />

      <AnimatePresence>
        {isDropdownVisible && (
          <DropDown
            variants={dropDownAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={dropdownRef}
          >
            <ul>
              <LogOutButton onClick={handleSignOut}>
                <FiLogOut />
                Sair da Conta
              </LogOutButton>
            </ul>
          </DropDown>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default AccountDropdown;
