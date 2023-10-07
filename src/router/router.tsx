import Layout from '@/layout/layout';
import Login from '@/page/Login';
import Register from '@/page/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VolunteerPage from '@/page/Home/VolunteerPage';
import Home from '@/page/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<VolunteerPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
