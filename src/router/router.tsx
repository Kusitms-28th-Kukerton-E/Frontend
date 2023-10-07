import Layout from '@/layout/layout';
import Home from '@/page/Home';
import Login from '@/page/Login';
import MyVolunteer from '@/page/My/MyVolunteer';
import Register from '@/page/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mypage/volunteer" element={<MyVolunteer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
