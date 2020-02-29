import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { ApplicationState } from '../../store';
import Input from '../../components/Input';

import { signInRequest } from '../../store/modules/auth/actions';

interface User {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: ApplicationState) => state.auth.loading);

  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: User) {
    try {
      const { email, password } = data;

      const schema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required('O e-mail é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(signInRequest(email, password));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessage: any = {};

        err.inner.forEach(error => {
          errorMessage[error.path] = error.message;
        });

        if (formRef.current) formRef.current.setErrors(errorMessage);
      }
    }
  }

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" type="email" label="E-mail" />
        <Input name="password" type="password" label="Senha" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
    </>
  );
};

export default SignIn;
