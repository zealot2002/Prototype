import React from 'react';
import { useNavigate } from 'react-router-dom';

const user = {
  avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
  nickname: '有态度网友0gb_FT',
  level: '副局长',
  medals: 14,
  influence: 324,
  stats: [
    { label: '跟贴/动态', value: 771 },
    { label: '粉丝', value: 4 },
    { label: '收藏/推荐', value: 17223 },
    { label: '历史', value: 36465 },
  ],
};

const quickActions = [
  { icon: '✔️', label: '我的关注' },
  { icon: '🗨️', label: '我的圈子' },
  { icon: '📅', label: '任务中心' },
  { icon: '🛍️', label: '金币商城' },
];

const creationCenter = [
  { icon: '🏆', label: '创作首页' },
  { icon: '📖', label: '内容管理' },
  { icon: '📈', label: '数据统计' },
  { icon: '📦', label: '草稿箱' },
];

const allServices = [
  { icon: '💡', label: '意见反馈' },
  { icon: '🌙', label: '夜间模式' },
  { icon: '💰', label: '我的钱包' },
  { icon: '🛒', label: '我的已购' },
  { icon: '⬇️', label: '我的下载' },
  { icon: '🤝', label: '用户共建' },
  { icon: '🎁', label: '京东特供' },
  { icon: '🖼️', label: '数字藏品' },
];

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ background: '#f7f8fa', minHeight: '100vh', paddingBottom: 16 }}>
      {/* 顶部用户信息 */}
      <div style={{ background: 'linear-gradient(90deg, #f7b42c 0%, #fc575e 100%)', padding: '32px 0 16px 0', color: '#fff', borderBottomLeftRadius: 24, borderBottomRightRadius: 24, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
          <span style={{ fontSize: 20, fontWeight: 600 }}>设置</span>
          <span style={{ fontSize: 20, fontWeight: 600 }}>消息</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 18, padding: '0 20px' }}>
          <img src={user.avatar} alt="头像" style={{ width: 64, height: 64, borderRadius: '50%', border: '3px solid #fff', objectFit: 'cover', marginRight: 16 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{user.nickname}</div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 6 }}>
              <span style={{ fontSize: 14, background: '#fff', color: '#fc575e', borderRadius: 8, padding: '2px 8px', fontWeight: 500, marginRight: 8 }}>{user.level}</span>
              <span style={{ fontSize: 14, color: '#fff', marginRight: 8 }}>🏅{user.medals}枚</span>
              <span style={{ fontSize: 14, color: '#fff', background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '2px 8px', fontWeight: 500 }}>影响力 {user.influence}</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 18, background: 'rgba(255,255,255,0.15)', borderRadius: 12, marginLeft: 12, marginRight: 12, padding: '10px 0' }}>
          {user.stats.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{stat.value}</div>
              <div style={{ fontSize: 13 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* 我的订单和服务入口 */}
      <div style={{ background: '#fff', borderRadius: 12, margin: '18px 12px 0 12px', padding: '0' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid #f0f0f0' }}>
          <div
            style={{ flex: 1, textAlign: 'center', padding: '18px 0', fontSize: 16, fontWeight: 600, cursor: 'pointer', color: '#fc575e' }}
            onClick={() => navigate('/profile/orders')}
          >
            我的订单
          </div>
          <div
            style={{ flex: 1, textAlign: 'center', padding: '18px 0', fontSize: 16, fontWeight: 600, cursor: 'pointer', color: '#f7b42c' }}
            onClick={() => navigate('/profile/services')}
          >
            我的服务
          </div>
        </div>
      </div>
      {/* 底部提示 */}
      <div style={{ textAlign: 'center', color: '#aaa', fontSize: 13, margin: '18px 0 0 0' }}>
        做任务，得金币，金币商城兑换好物
      </div>
    </div>
  );
};

export default ProfilePage; 