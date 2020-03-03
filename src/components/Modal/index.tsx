import React from 'react';
import { RouteProps } from 'react-router-dom';
import { Container, Content } from './styles';

export default function Modal({ children }: RouteProps) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
