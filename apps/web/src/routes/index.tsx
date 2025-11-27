import { Navigate, Route, Routes, useLocation } from 'react-router';
import { AuthLayout } from '../layouts/auth.layout';
import { BaseLayout } from '../layouts/base.layout';
import { NotFound } from '../not-found';
import { RestorePassword } from '../pages/auth/restore-password';
import { Register } from '../pages/auth/register';
import { Dashboard } from '../pages/dashboard';
import { Campaigns } from '../pages/campaigns';
import { CampaignProfit } from '../pages/reports/campaign-profit';
import { CountryProfit } from '../pages/reports/country-profit';
import { DateProfit } from '../pages/reports/date-profit';
import { AnimatePresence } from 'framer-motion';
import { useAuth } from '../provider/Auth';
import { SignOut } from '../pages/auth/signout';
import ProtectedRoute from '../components/ProtectedRoute';
import { UserProfile } from '../pages/settings/user-profile';
import { Settings } from '../pages/settings';
import { Login } from '../pages/auth/login';

const AppRouter = () => {
  const { isAuthenticated, isInitialized } = useAuth();
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
              <Navigate to="/login" replace />
            )
          }
        ></Route>

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="signout" element={<SignOut />} />
          <Route path="restore-password" element={<RestorePassword />} />
        </Route>

        <Route element={<BaseLayout />}>
          <Route
            path="dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route
            path="campaigns"
            element={<ProtectedRoute element={<Campaigns />} />}
          />
          <Route path="report">
            <Route
              path="campaign-profit"
              element={<ProtectedRoute element={<CampaignProfit />} />}
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
          <Route path="settings">
            <Route index element={<ProtectedRoute element={<Settings />} />} />
            <Route
              path="user-profile"
              element={<ProtectedRoute element={<UserProfile />} />}
            />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export { AppRouter };
