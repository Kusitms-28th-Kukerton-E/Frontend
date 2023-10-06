import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "../page/Test";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};
