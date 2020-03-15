import React from 'react';
import { Container, Content } from './styles';

interface Props {
  size: string;
}

const Modal: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Modal;
