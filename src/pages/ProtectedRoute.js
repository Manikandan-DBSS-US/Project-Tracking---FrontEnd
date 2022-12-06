import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { firstUser } = useSelector((store) => store.userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!firstUser) {
      return navigate("/login");
    }
  }, [firstUser]);
  return children;
};

export default ProtectedRoute;
