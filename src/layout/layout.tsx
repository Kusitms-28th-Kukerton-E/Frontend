import Login from '@/page/Login';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Login />
      <Outlet />
    </>
  );
};

export default Layout;
