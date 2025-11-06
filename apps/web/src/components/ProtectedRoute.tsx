import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

interface IProtectedRouteProps {
  element: React.ReactElement;
}

function ProtectedRoute({ element }: IProtectedRouteProps) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
