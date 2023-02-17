import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Div = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  min-height: 100vh;
  width: 100%;
`;

const Layout = () => {
  return (
    <Div>
      <Header />
      <Outlet />
    </Div>
  );
};

export default Layout;
