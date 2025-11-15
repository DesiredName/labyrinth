import React from 'react';
import { Navigate } from 'react-router';
import { useAuthContext } from '../provider/AuthProvider';

interface IProtectedRouteProps {
  element: React.ReactElement;
}

function ProtectedRoute({ element }: IProtectedRouteProps) {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? element : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
