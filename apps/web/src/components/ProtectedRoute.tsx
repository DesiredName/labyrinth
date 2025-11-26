import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../provider/Auth';

interface IProtectedRouteProps {
  element: React.ReactElement;
}

function ProtectedRoute({ element }: IProtectedRouteProps) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
