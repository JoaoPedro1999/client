import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  header {
    max-width: 940px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      height: 42px;
      width: 172px;
      background: ${props => props.theme.colors.primary};
      font-weight: bold;
      color: #${props => props.theme.colors.background};
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#18448F')};
      }
      span {
        padding-left: 5px;
      }
    }
    strong {
      color: ${props => props.theme.colors.primary};
      font-size: 32px;
      margin: 0;
    }
  }
  ul {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 15px;
  }
`;

export const Solicitation = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  grid-gap: 15px;
  margin-top: 70px;
`;

export const SolicitationInfo = styled.li`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 0.5px solid ${props => props.theme.colors.primary};
  border-bottom: 5px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    width: 100%;

    h1 {
      align-self: center;
      color: ${props => props.theme.colors.text};
      font-size: 18px;
    }
  }
`;
