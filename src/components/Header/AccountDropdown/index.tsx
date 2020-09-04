import React, { useState, useRef, useCallback } from 'react';

import { useTheme } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { FiLogOut } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, AnimatedDropdown, LogOutButton } from './styles';
import { DROP_DOWN_ANIMATION } from './animations';

import useAuth from '~/contexts/auth';
import useEventListener from '~/hooks/useEventListener';
import { removeHashFromColor } from '~/utils';

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
          <AnimatedDropdown
            variants={DROP_DOWN_ANIMATION}
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
          </AnimatedDropdown>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default AccountDropdown;
