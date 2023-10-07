import Layout from '@/layout/layout';
import Home from '@/page/Home';
import Login from '@/page/Login';
import Register from '@/page/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VolunteerPage from '@/page/Home/VolunteerPage';
import Main2 from '@/page/Home/main2';
import Teacher from '@/page/Home/teacher';
import VolunteerMyPage from '@/page/mypage/VolunteerMyPage';
import OrganizationMyPage from '@/page/mypage/OrganizationMyPage';
import KidMyPage from '@/page/mypage/KidMyPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/main/volunteer"
            element={<VolunteerPage title="모집 중인 자원봉사" />}
          />

          <Route path="/main/organization" element={<Main2 />} />

          <Route
            path="/main/kid"
            element={<Teacher title="나와 함께할 선생님 살펴보기" />}
          />

          <Route path="/mypage/volunteer" element={<VolunteerMyPage />} />
          <Route path="/mypage/organization" element={<OrganizationMyPage />} />
          <Route path="/mypage/kid" element={<KidMyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
