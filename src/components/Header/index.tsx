/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
import React from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Content, StyledLink, Profile } from './styles';

export default function Header() {
  // const profile = useSelector(state => state.auth.user);
  const image = '';

  // if (profile.avatar) {
  //   image = profile.avatar.url;
  // }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="TechnoApp" />
          <StyledLink to="/dashboard">TechnoApp</StyledLink>
          <StyledLink to="/dashboard">Solicitações</StyledLink>
          <StyledLink to="/clients">Clientes</StyledLink>
          <StyledLink to="/services">Serviços</StyledLink>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Nome</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                image || 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Usuário"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
