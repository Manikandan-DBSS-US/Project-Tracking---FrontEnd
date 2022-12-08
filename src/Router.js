import { Routes, Route } from "react-router-dom";
import {
  CreateProject,
  CreateTask,
  CreateUser,
  Dashboard,
  EditTask,
  EditUser,
  ErrorPage,
  HomePage,
  LoginPage,
  ProjectsList,
  RegisterPage,
  TasksList,
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
        <Route path="create-project" element={<CreateProject />} />
        <Route path="projects-list" element={<ProjectsList />} />
        <Route path="projects-list/:id" element={<ProjectsListEdit />} />
        {/* <Route path="/*" element={<ErrorPage />} /> */}

=======
>>>>>>> fa2f11014f88a3a5eca31ff5d3b776fc4e9dc94a
        <Route path="create-task" element={<CreateTask />} />
        <Route path="tasks-list" element={<TasksList />} />

        <Route path="create-project" element={<CreateProject />} />
        <Route path="projects-list" element={<ProjectsList />} />
        <Route path="projects-list/:id" element={<ProjectsListEdit />} />

        <Route path="/*" element={<ErrorPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default Router;
