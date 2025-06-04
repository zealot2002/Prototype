import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './MainLayout.css';

const MetalHomeIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'url(#rose1)' : 'url(#metal1)'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="metal1" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#bfc1c6" />
        <stop offset="100%" stopColor="#23272e" />
      </linearGradient>
      <linearGradient id="rose1" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#e94370" />
        <stop offset="100%" stopColor="#ffb6c1" />
      </linearGradient>
    </defs>
    <path d="M3 12L12 4L21 12V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V12Z" />
    <path d="M9 22V12H15V22" />
  </svg>
);
const MetalShopIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'url(#rose2)' : 'url(#metal2)'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="metal2" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#bfc1c6" />
        <stop offset="100%" stopColor="#23272e" />
      </linearGradient>
      <linearGradient id="rose2" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#e94370" />
        <stop offset="100%" stopColor="#ffb6c1" />
      </linearGradient>
    </defs>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M5 7V5A2 2 0 0 1 7 3H17A2 2 0 0 1 19 5V7" />
    <circle cx="9" cy="14" r="1.5" />
    <circle cx="15" cy="14" r="1.5" />
  </svg>
);
const MetalCartIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'url(#rose3)' : 'url(#metal3)'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="metal3" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#bfc1c6" />
        <stop offset="100%" stopColor="#23272e" />
      </linearGradient>
      <linearGradient id="rose3" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#e94370" />
        <stop offset="100%" stopColor="#ffb6c1" />
      </linearGradient>
    </defs>
    <circle cx="9" cy="21" r="1.5" />
    <circle cx="20" cy="21" r="1.5" />
    <path d="M1 1H5L7.5 16.5A2 2 0 0 0 9.5 18.5H19.5A2 2 0 0 0 21.5 16.5L23 8H6" />
  </svg>
);
const MetalSocialIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'url(#rose4)' : 'url(#metal4)'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="metal4" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#bfc1c6" />
        <stop offset="100%" stopColor="#23272e" />
      </linearGradient>
      <linearGradient id="rose4" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#e94370" />
        <stop offset="100%" stopColor="#ffb6c1" />
      </linearGradient>
    </defs>
    <rect x="3" y="5" width="18" height="14" rx="4" />
    <path d="M7 9H17M7 13H13" />
    <circle cx="17" cy="13" r="1.5" />
  </svg>
);
const MetalUserIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'url(#rose5)' : 'url(#metal5)'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="metal5" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#bfc1c6" />
        <stop offset="100%" stopColor="#23272e" />
      </linearGradient>
      <linearGradient id="rose5" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#e94370" />
        <stop offset="100%" stopColor="#ffb6c1" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20" />
  </svg>
);

const navs = [
  { key: 'home', label: '首页', path: '/home', icon: MetalHomeIcon },
  { key: 'mall', label: '商城', path: '/mall', icon: MetalShopIcon },
  { key: 'cart', label: '购物车', path: '/cart', icon: MetalCartIcon },
  { key: 'social', label: '发现', path: '/social', icon: MetalSocialIcon },
  { key: 'profile', label: '我的', path: '/profile', icon: MetalUserIcon },
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
          {navs.map((nav) => {
            const active = location.pathname === nav.path;
            return (
              <div
                key={nav.key}
                className={'nav-item' + (active ? ' active' : '')}
                onClick={() => navigate(nav.path)}
              >
                <span className="nav-icon">{nav.icon({ active })}</span>
                <span>{nav.label}</span>
              </div>
            );
          })}
        </nav>
      )}
    </div>
  );
};

export default MainLayout; 