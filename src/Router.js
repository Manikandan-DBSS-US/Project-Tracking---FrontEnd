import { Routes, Route } from "react-router-dom";
import {
  CreateUser,
  Dashboard,
  ErrorPage,
  HomePage,
  LoginPage,
  RegisterPage,
  UsersList,
} from "./pages";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayoutPage from "./pages/SharedLayoutPage";

const Router = () => {
  return (
    <Routes>
      {/* <Route
        path="/"
        element={
          <ProtectedRoute>
            <SharedLayoutPage />
          </ProtectedRoute>
        }
      >
      </Route> */}
      {/* <Route index element={<Dashboard />} /> */}
      {/* <Route path="/" element={<HomePage />} /> */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <SharedLayoutPage />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="create-user" element={<CreateUser />} />
        <Route path="users-list" element={<UsersList />} />
      <Route path="/*" element={<ErrorPage />} />

      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
