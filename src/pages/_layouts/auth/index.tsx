import React from 'react';
import { RouteProps } from 'react-router-dom';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }: RouteProps) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}
