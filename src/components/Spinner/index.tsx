import React from 'react';
import { DarkProp, Box, Container } from './styles';

const Spinner: React.FC<DarkProp> = ({ dark }) => {
  return (
    <Container dark={dark}>
      <Box dark={dark} />
    </Container>
  );
};

export default Spinner;
