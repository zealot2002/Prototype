import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './MainLayout.css';

const navs = [
  { key: 'home', label: '首页', path: '/home' },
  { key: 'mall', label: '商城', path: '/mall' },
  { key: 'social', label: '社交', path: '/social' },
  { key: 'profile', label: '我的', path: '/profile' },
];

const MainLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="main-layout">
      <div className="main-content">
        <Outlet />
      </div>
      <nav className="bottom-nav">
        {navs.map((nav) => (
          <div
            key={nav.key}
            className={
              'nav-item' + (location.pathname === nav.path ? ' active' : '')
            }
            onClick={() => navigate(nav.path)}
          >
            {nav.label}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MainLayout; 