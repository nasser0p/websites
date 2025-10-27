import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

const HomePage = lazy(() => import('./pages/index'));
const ServiceDetailsPage = lazy(() => import('./pages/services/[id]'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
    Loading...
  </div>
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="services/:id" element={<ServiceDetailsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
