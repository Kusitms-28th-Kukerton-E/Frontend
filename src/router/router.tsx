import Layout from '@/layout/layout';
import Home from '@/page/Home';
import OrganizationPage from '@/page/Home/Organization';
import Login from '@/page/Login';
import Register from '@/page/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VolunteerPage from '@/page/Home/VolunteerPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main/organization" element={<OrganizationPage />} />
          <Route path="/main/volunteer" element={<VolunteerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
