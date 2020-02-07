import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #18448f;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      width: 48px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const StyledLink = styled(Link)`
  margin-right: 20px;
  font-size: 1.4em;
  font-weight: bold;
  color: #fff;
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #333;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
