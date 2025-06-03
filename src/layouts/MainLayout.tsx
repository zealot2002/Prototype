import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './MainLayout.css';
import { AiOutlineHome, AiOutlineShop, AiOutlineShoppingCart, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';

const navs = [
  { key: 'home', label: '首页', path: '/home', icon: <AiOutlineHome size={24} /> },
  { key: 'mall', label: '商城', path: '/mall', icon: <AiOutlineShop size={24} /> },
  { key: 'cart', label: '购物车', path: '/cart', icon: <AiOutlineShoppingCart size={24} /> },
  { key: 'social', label: '社交', path: '/social', icon: <AiOutlineMessage size={24} /> },
  { key: 'profile', label: '我的', path: '/profile', icon: <AiOutlineUser size={24} /> },
];

const firstLevelRoutes = ['/home', '/mall', '/cart', '/social', '/profile'];

const MainLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const showTabBar = firstLevelRoutes.includes(location.pathname);

  return (
    <div className="main-layout">
      <div className="main-content">
        <Outlet />
      </div>
      {showTabBar && (
        <nav className="bottom-nav">
          {navs.map((nav) => (
            <div
              key={nav.key}
              className={
                'nav-item' + (location.pathname === nav.path ? ' active' : '')
              }
              onClick={() => navigate(nav.path)}
            >
              <span className="nav-icon">{nav.icon}</span>
              <span>{nav.label}</span>
            </div>
          ))}
        </nav>
      )}
    </div>
  );
};

export default MainLayout; 