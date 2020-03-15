import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline, MdCancel } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { ApplicationState } from '../../store';
import {
  OpenSolicitationModal,
  CloseSolicitationModal,
} from '../../store/modules/solicitations/actions';
import api from '../../services/api';

import Modal from '../../components/Modal';
import Input from '../../components/Input';

import { Container, Solicitation, SolicitationInfo } from './styles';

const Dashboard: React.FC = () => {
  const [solicitation, setSolicitation] = useState();
  const dispatch = useDispatch();
  const SolicitationModalOpen = useSelector(
    (state: ApplicationState) => state.solicitation.SolicitationModalOpen
  );
  // const solicitation = useSelector(
  //   (state: ApplicationState) => state.solicitation.data
  // );

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function loadSolicitation() {
      const response = await api.get('/solicitation');
      setSolicitation(response?.data);
    }
    loadSolicitation();
  }, [solicitation]);

  function OpenModal() {
    dispatch(OpenSolicitationModal());
  }

  function CloseModal() {
    dispatch(CloseSolicitationModal());
  }

  function handleSubmit() {}

  return (
    <Container>
      <header>
        <strong>Solicitações</strong>
        <button type="button" onClick={OpenModal}>
          <MdAddCircleOutline size={24} />
          <span>Nova Solicitação</span>
        </button>
      </header>
      {SolicitationModalOpen && (
        <Modal>
          <h1>Nova Solicitação</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" label="Empresa" />
            <Input name="password" label="Solicitante" />
            <Input name="password" label="Problema Relatado" />
            <Input name="password" label="Maquina" />

            <button type="submit">Acessar</button>
          </Form>
          <button type="button" onClick={CloseModal}>
            <MdCancel size={24} />
            <span>Cancelar</span>
          </button>
        </Modal>
      )}
      <Solicitation>
        {/* {solicitation &&
          solicitation.map(item: any => (
            <SolicitationInfo key={item}>
              <div>
                <h1>#1</h1>
              </div>
              <div>
                <h1>Empresa</h1>
              </div>
              <div>
                <h1>Maquina</h1>
              </div>
              <div>
                <h1>Requisitante</h1>
              </div>
              <div>
                <h1>R$ 100.00</h1>
              </div>
              <div>
                <h1>Aberto</h1>
              </div>
            </SolicitationInfo>
          ))} */}
      </Solicitation>
    </Container>
  );
};

export default Dashboard;
