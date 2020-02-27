import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ApplicationState } from '../../store';
// import * as Yup from 'yup';
import Input from '../../components/Input';

import { signInRequest } from '../../store/modules/auth/actions';

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email('Insira um e-mail válido')
//     .required('O e-mail é obrigatório'),
//   password: Yup.string().required('A senha é obrigatória'),
// });

interface User {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: ApplicationState) => state.auth.loading);

  function handleSubmit({ email, password }: User) {
    dispatch(signInRequest(email, password));
  }

  const formRef = useRef<FormHandles>(null);

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
    </>
  );
};

export default SignIn;
