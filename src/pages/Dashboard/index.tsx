import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <header>
        <strong>Solicitações</strong>
        <Link to="/new">
          <button type="button">
            <MdAddCircleOutline size={24} />
            <span>Nova Solicitação</span>
          </button>
        </Link>
      </header>
    </Container>
  );
};

export default Dashboard;
