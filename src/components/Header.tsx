import styled from 'styled-components';
import px2vw from '../utils/px2vw';
import { useNavigate } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${px2vw(200)};
  background-color: ${({ theme }) => theme.tabColor};
  height: 72px;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: ${({ theme }) => theme.border};
  > h1 {
    color: ${({ theme }) => theme.mainColor};
  }
  > button {
    background-color: ${({ theme }) => theme.highlightColor};
    width: 120px;
    height: 32px;
    border-radius: 16px;
    color: #fff;
    font: ${({ theme }) => theme.font};
  }
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <Nav>
      <h1>Reddit</h1>
      <button onClick={() => navigate('/login')}>Login</button>
    </Nav>
  );
};

export default Header;
