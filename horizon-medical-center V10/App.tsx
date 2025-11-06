import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import TeamPage from './pages/TeamPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import HealthTipsPage from './pages/LegalUpdatesPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';
import { ContentProvider } from './contexts/ContentContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import FloatingActionButtons from './components/FloatingActionButtons';

const App: React.FC = () => {
  return (
    <ContentProvider>
      <LanguageProvider>
        <Router>
          <AuthProvider>
            <ScrollToTop />
            <div className="bg-clinic-light text-clinic-dark font-sans">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/health-tips" element={<HealthTipsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route 
                    path="/admin" 
                    element={
                      <ProtectedRoute>
                        <AdminPage />
                      </ProtectedRoute>
                    } 
                  />
                </Routes>
              </main>
              <Footer />
              <FloatingActionButtons />
            </div>
          </AuthProvider>
        </Router>
      </LanguageProvider>
    </ContentProvider>
  );
};

export default App;
