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

export const SolicitationHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space - between;
  max-width: 940px;
  padding: 20px;
  margin-top: 30px;
  span {
    color: ${props => props.theme.colors.primary};
    margin: 0;
  }
`;

export const Solicitation = styled.li`
  display: flex;
  justify-content: space - between;
  align-items: center;
  margin-top: 5px;
  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid ${props => props.theme.colors.primary};
  strong {
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }
  span {
    color: ${props => props.theme.colors.primary};
  }
`;
