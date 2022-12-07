import { Routes, Route } from "react-router-dom";
import {
<<<<<<< HEAD
  CreateProject,
=======
  CreateTask,
>>>>>>> 8c5e592258aa2242a331b03120c9debab7a360a1
  CreateUser,
  Dashboard,
  ErrorPage,
  HomePage,
  LoginPage,
  ProjectsList,
  RegisterPage,
  UsersList,
} from "./pages";
import { ProjectsListEdit } from "./pages/ProjectsList/ProjectsListEdit";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayoutPage from "./pages/SharedLayoutPage";

const Router = () => {
  return (
    <Routes>
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
<<<<<<< HEAD
        <Route path="create-project" element={<CreateProject/>}/>
        <Route path="projects-list" element={<ProjectsList/>}/> 
        <Route path="projects-list/:id" element={<ProjectsListEdit />}/>
        {/* <Route path="/*" element={<ErrorPage />} /> */}
=======
        <Route path="create-task" element={<CreateTask />} />
        <Route path="/*" element={<ErrorPage />} />
>>>>>>> 8c5e592258aa2242a331b03120c9debab7a360a1
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default Router;
