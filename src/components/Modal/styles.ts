import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: ${props => props.theme.colors.secundary};
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: 600px;
  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px 0 0;
      height: 44px;
      background: ${props => props.theme.colors.button};
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#18448F')};
      }
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0 0;
    height: 44px;
    width: 520px;
    background: ${darken(0.13, 'red')};
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.23, 'red')};
    }
    span {
      padding-left: 5px;
    }
  }
`;
