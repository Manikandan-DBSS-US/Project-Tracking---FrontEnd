import { Routes, Route } from "react-router-dom";
import { CreateUser, Dashboard, ErrorPage, HomePage, LoginPage, RegisterPage } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/CreateUser" element={<CreateUser />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
