import React from 'react';

import { FiChevronDown } from 'react-icons/fi';

import { Container } from './styles';

export interface AccordionProps {
  icon: React.ReactNode;
  sectionName: string;
}

const Accordion: React.FC<AccordionProps> = ({ icon, sectionName }) => {
  return (
    <Container variant="transparent">
      <div>{icon}</div>
      {sectionName}
      <FiChevronDown />
    </Container>
  );
};

export default Accordion;
