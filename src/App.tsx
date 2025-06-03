import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import MallPage from './pages/MallPage';
import SocialPage from './pages/SocialPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ConfirmOrderPage from './pages/ConfirmOrderPage';
import QicIntroPage from './pages/QicIntroPage';
import QicAppointmentPage from './pages/QicAppointmentPage';
import CatFamilyIntroPage from './pages/CatFamilyIntroPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}> 
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/mall" element={<MallPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/confirm-order" element={<ConfirmOrderPage />} />
          <Route path="/qic-intro" element={<QicIntroPage />} />
          <Route path="/appointment" element={<QicAppointmentPage />} />
          <Route path="/family-intro" element={<CatFamilyIntroPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
