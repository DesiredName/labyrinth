import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { AuthLayout } from '../layouts/auth.layout';
import { BaseLayout } from '../layouts/base.layout';
import { NotFound } from '../not-found';
import { RestorePassword } from '../pages/auth/restore-password';
import { SignIn } from '../pages/auth/signin';
import { SignUp } from '../pages/auth/signup';
import { Dashboard } from '../pages/dashboard';
import { EmailLists } from '../pages/email-lists';
import { CompainProfit } from '../pages/reports/compain-profit';
import { CountryProfit } from '../pages/reports/country-profit';
import { DateProfit } from '../pages/reports/date-profit';

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        ></Route>

        <Route element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="restore-password" element={<RestorePassword />} />
        </Route>

        <Route element={<BaseLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="email-lists" element={<EmailLists />} />
          <Route path="report">
            <Route path="compain-profit" element={<CompainProfit />} />
            <Route path="country-profit" element={<CountryProfit />} />
            <Route path="date-profit" element={<DateProfit />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
