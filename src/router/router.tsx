import Layout from '@/layout/layout';
import Home from '@/page/Home';
import Login from '@/page/Login';
import Register from '@/page/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VolunteerPage from '@/page/Home/VolunteerPage';
import Main2 from '@/page/Home/main2';
import Teacher from '@/page/Home/teacher';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/main"
            element={<VolunteerPage title="모집 중인 자원봉사" />}
          />
          <Route path="/main2" element={<Main2 />} />
          <Route
            path="/main/teacher"
            element={<Teacher title="나와 함께할 선생님 살펴보기" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
