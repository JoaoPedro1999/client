import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../../store';

// import logo from '../../assets/logo.svg';

import { Container, Content, StyledLink, Profile } from './styles';

const Header: React.FC = () => {
  const profile = useSelector((state: ApplicationState) => state.auth.user);
  const image = '';

  // if (profile.avatar) {
  //   image = profile.avatar.url;
  // }

  return (
    <Container>
      <Content>
        <nav>
          {/* <img src={logo} alt="TechnoApp" /> */}
          <StyledLink to="/dashboard">TechnoApp</StyledLink>
          <StyledLink to="/dashboard">Solicitações</StyledLink>
          <StyledLink to="/clients">Clientes</StyledLink>
          <StyledLink to="/settings">Configurações</StyledLink>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile?.name}</strong>
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
};

export default Header;
