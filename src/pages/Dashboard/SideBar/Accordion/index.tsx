import React from 'react';

import { FiChevronDown } from 'react-icons/fi';

import { Container } from './styles';

export type AccordionProps = {
  icon: React.ReactNode;
  sectionName: string;
};

const Accordion = ({ icon, sectionName }: AccordionProps) => {
  return (
    <Container variant="transparent">
      <div>{icon}</div>
      {sectionName}
      <FiChevronDown />
    </Container>
  );
};

export default Accordion;
