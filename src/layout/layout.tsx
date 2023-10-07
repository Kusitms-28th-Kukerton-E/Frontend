import Header from '@/layout/header';
import { Outlet, useLocation } from 'react-router-dom';
import BannerOrg from '@/assets/banner/banner_organization.png';
import BannerVol from '@/assets/banner/banner_volunteer.png';
import BannerKid from '@/assets/banner/banner_kid.png';
import BannerLog from '@/assets/banner/banner_login.png';
import Footer from './footer';

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      {pathname === '/main/organization' && (
        <img src={BannerOrg} alt={BannerOrg} width="100%" />
      )}
      {pathname === '/main/volunteer' && (
        <img src={BannerVol} alt={BannerVol} width="100%" />
      )}
      {pathname === '/main/kid' && (
        <img src={BannerKid} alt={BannerKid} width="100%" />
      )}
      {pathname === '/login' && (
        <img src={BannerLog} alt={BannerLog} width="100%" />
      )}
      {pathname === '/register' && (
        <img src={BannerLog} alt={BannerLog} width="100%" />
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
