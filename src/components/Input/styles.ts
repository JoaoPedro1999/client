import styled from 'styled-components';

export const InputStyled = styled.input<{ ref: any }>`
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #fff;
  margin: 0 0 10px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const LabelStyled = styled.label`
  color: #fff;
  text-align: start;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  padding: 0 15px;
  margin-bottom: 5px;
`;
