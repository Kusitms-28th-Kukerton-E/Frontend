import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/layout/layout';
import VolunteerPage from '@/page/Home/VolunteerPage';
import Home from '@/page/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<VolunteerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
