import './css/main.scss';
import styles from './App.module.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { HomePage } from './pages/home-page';
import { LabsPage } from './pages/labs-page';
import { LoginPage } from './pages/login-page';
import { SignUpPage } from './pages/signup-page';
import { LabPage } from './pages/lab-page';
import ProfilePage from './pages/profile-page/profile-page';
import { Page404 } from './pages/page404';
import ScrollToTop from './utils/scroll-to-top';
import { AppointmentsPage } from './pages/appointments-page';
import { FindingsPage } from './pages/findings-page';
import { EditProfilePage } from './pages/edit-profile-page';
import { NotificationsPage } from './pages/notifications-page';
import { AllNotificationsPage } from './pages/all-notifications-page';
import { EmailConfirmPage } from './pages/email-confirm-page';
import { AboutPage } from './pages/about-page';
import PatientDashboardWrapper from './pages/patient-dashboard/patient-dashboard-wrapper';
import AdminDashboardWrapper from './pages/admin-dashboard/admin-dashboard-wrapper';
import authRoute from './components/auth/auth-route/authRoute';
import AuthRoute from './components/auth/auth-route/authRoute';

function App() {
  const location = useLocation();

  return (
    <main>
      <div className={styles.page}>
        {!location.pathname.includes('dashboard') && <Header />}
        <div className={styles.pageContent}>
          <ScrollToTop />
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/" element={<HomePage />} />
            <Route path="/labs" element={<LabsPage />} />
            <Route path="/:labKey" element={<LabPage />} />

            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/appointments' element={<AppointmentsPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/findings' element={<FindingsPage />} />
            <Route path='/admin-dashboard/*' element={<AdminDashboardWrapper />} />
            <Route path='/patient-dashboard/*' element={<AuthRoute><PatientDashboardWrapper /></AuthRoute>} />
              <Route path='/edit-profile' element={<EditProfilePage />} />

              <Route path='/notifications' element={<NotificationsPage />} />
              <Route path='/all-notifications' element={<AllNotificationsPage />} />

              <Route path='/email-confirm' element={<EmailConfirmPage />} />
              <Route path='/agency-services' element={<div style={{ marginTop: '95px' }}>Agency Services</div>} />
              <Route path='/staff-services' element={<div style={{ marginTop: '95px' }}>Staff Services</div>} />

              <Route path="/notfound" element={<Page404 />} />
              <Route path='*' element={<Navigate to="/notfound" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
