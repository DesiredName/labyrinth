import { Navigate, Route, Routes, useLocation } from 'react-router';
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
import { AnimatePresence } from 'framer-motion';
import { useAuthContext } from '../context/AuthContext';
import { SignOut } from '../pages/auth/signout';
import ProtectedRoute from '../components/ProtectedRoute';
import { UserProfile } from '../pages/auth/user-profile';

const AppRouter = () => {
  const { isAuthenticated, isInitialized } = useAuthContext();
  const location = useLocation();

  if (isInitialized !== true) {
    return (
      <div className="absolute inset-0 flex justify-center items-center"></div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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
          <Route path="signout" element={<SignOut />} />
          <Route path="restore-password" element={<RestorePassword />} />
        </Route>

        <Route element={<BaseLayout />}>
          <Route
            path="user-profile"
            element={<ProtectedRoute element={<UserProfile />} />}
          />
          <Route
            path="dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route
            path="email-lists"
            element={<ProtectedRoute element={<EmailLists />} />}
          />
          <Route path="report">
            <Route
              path="compain-profit"
              element={<ProtectedRoute element={<CompainProfit />} />}
            />
            <Route
              path="country-profit"
              element={<ProtectedRoute element={<CountryProfit />} />}
            />
            <Route
              path="date-profit"
              element={<ProtectedRoute element={<DateProfit />} />}
            />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export { AppRouter };
