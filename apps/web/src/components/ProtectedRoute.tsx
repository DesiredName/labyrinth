import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

interface IProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
