import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSetting, AiOutlineBell, AiOutlineRight, AiOutlineWallet, AiOutlineGift, AiOutlineStar, AiOutlineHome, AiOutlineUser, AiOutlineMessage, AiOutlineAppstore, AiOutlineTeam, AiOutlineCustomerService, AiOutlineQuestionCircle, AiOutlineBulb } from 'react-icons/ai';

const user = {
  avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
  nickname: '喵星人小主',
  level: '铂金会员',
  id: 'UID20240601',
};

const assets = [
  { icon: <AiOutlineWallet size={26} color="#ffb347" />, label: '钱包', value: '¥ 128.00' },
  { icon: <AiOutlineGift size={26} color="#70c1ff" />, label: '优惠券', value: '3张' },
  { icon: <AiOutlineStar size={26} color="#fc575e" />, label: '积分', value: '520' },
];

const orderStatus = [
  { icon: <AiOutlineWallet size={22} color="#1890ff" />, label: '待付款', key: 'pending' },
  { icon: <AiOutlineGift size={22} color="#ffb347" />, label: '待发货', key: 'tosend' },
  { icon: <AiOutlineHome size={22} color="#70c1ff" />, label: '待收货', key: 'toreceive' },
  { icon: <AiOutlineStar size={22} color="#fc575e" />, label: '待评价', key: 'toreview' },
];

const serviceEntries = [
  { icon: <AiOutlineBulb size={22} color="#70c1ff" />, label: '健康体检', path: '/qic-intro' },
  { icon: <AiOutlineTeam size={22} color="#ffb347" />, label: '亲人见面', path: '/family-intro' },
  { icon: <AiOutlineCustomerService size={22} color="#fc575e" />, label: '售后客服', path: '#' },
];

const quickActions = [
  { icon: <AiOutlineHome size={22} color="#1890ff" />, label: '地址管理', path: '#' },
  { icon: <AiOutlineMessage size={22} color="#ffb347" />, label: '意见反馈', path: '#' },
  { icon: <AiOutlineQuestionCircle size={22} color="#fc575e" />, label: '关于我们', path: '#' },
];

const pet = {
  avatar: 'https://img2.baidu.com/it/u=756651747,3692837599&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  name: '小橘',
  breed: '英短蓝猫',
  adoptDate: '2022-06-01',
};

function getDaysTogether(dateStr: string) {
  const start = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return diff;
}

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ background: '#f7f8fa', minHeight: '100vh', paddingBottom: 16, fontFamily: 'inherit' }}>
      {/* 顶部用户信息（紧凑无会员/编辑按钮） */}
      <div style={{
        background: 'linear-gradient(120deg, #232526 0%, #414345 100%)',
        padding: '0 0 18px 0',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        position: 'relative',
        minHeight: 90,
        boxShadow: '0 4px 24px 0 rgba(60,60,60,0.18)'
      }}>
        {/* 顶部操作按钮 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px 0 20px' }}>
          <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(80,80,80,0.10)', cursor: 'pointer' }}>
            <AiOutlineSetting size={20} color="#b0b0b0" onClick={() => alert('设置功能待实现')} />
          </div>
          <div style={{ background: 'rgba(255,255,255,0.10)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(80,80,80,0.10)', cursor: 'pointer' }}>
            <AiOutlineBell size={20} color="#b0b0b0" onClick={() => alert('消息通知功能待实现')} />
          </div>
        </div>
        {/* 头像+昵称+ID 横向排列 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10, gap: 16 }}>
          {/* 金属质感头像 */}
          <div style={{
            background: 'linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 40%, #757575 100%)',
            borderRadius: '50%',
            padding: 2,
            boxShadow: '0 2px 12px 0 rgba(180,180,180,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img src={user.avatar} alt="头像" style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid #fff', objectFit: 'cover', boxShadow: '0 2px 8px rgba(80,80,80,0.10)' }} />
          </div>
          {/* 昵称+ID */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
            {/* 金属渐变昵称 */}
            <span style={{
              fontSize: 18,
              fontWeight: 800,
              background: 'linear-gradient(90deg, #f5f7fa 0%, #bdbdbd 40%, #ffd700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: 1,
              textShadow: '0 1px 4px rgba(255,215,0,0.10)'
            }}>{user.nickname}</span>
            {/* 半透明金属ID卡片 */}
            <span style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(180,180,180,0.18) 100%)',
              color: '#ffd700',
              fontWeight: 600,
              fontSize: 12,
              borderRadius: 8,
              padding: '2px 10px',
              boxShadow: '0 1px 4px rgba(255,215,0,0.08)',
              letterSpacing: 1
            }}>ID: {user.id}</span>
          </div>
        </div>
      </div>

      {/* 我的爱宠板块（悬浮于顶部信息区上） */}
      <div style={{
        background: '#fff',
        borderRadius: 14,
        margin: '-10px 12px 0 12px', // 向上移动20px
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        padding: '18px',
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        position: 'relative',
        zIndex: 2,
      }}>
        <img src={pet.avatar} alt="宠物头像" style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #ffd700', objectFit: 'cover', boxShadow: '0 2px 8px rgba(255,215,0,0.10)' }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: '#222' }}>{pet.name} <span style={{ fontSize: 13, color: '#bbb', fontWeight: 500, marginLeft: 8 }}>{pet.breed}</span></div>
          <div style={{ fontSize: 14, color: '#888', marginTop: 6 }}>已陪伴你 <span style={{ color: '#ffd700', fontWeight: 700 }}>{getDaysTogether(pet.adoptDate)}</span> 天</div>
        </div>
      </div>

      {/* 我的订单 */}
      <div style={{ background: '#fff', borderRadius: 14, margin: '18px 12px 0 12px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: '0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 18px 0 18px' }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#222' }}>我的订单</span>
          <span style={{ color: '#888', fontSize: 15, cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => alert('全部订单功能待实现')}>全部订单 <AiOutlineRight /></span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '18px 0 0 0', padding: '0 0 18px 0' }}>
          {orderStatus.map(s => (
            <div key={s.label} style={{ textAlign: 'center', flex: 1, cursor: 'pointer' }} onClick={() => alert(`${s.label}功能待实现`)}>
              <div>{s.icon}</div>
              <div style={{ fontSize: 15, color: '#222', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 我的服务 */}
      <div style={{ background: '#fff', borderRadius: 14, margin: '18px 12px 0 12px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: '0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 18px 0 18px' }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#222' }}>我的服务</span>
          <span style={{ color: '#888', fontSize: 15, cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => alert('全部服务功能待实现')}>全部服务 <AiOutlineRight /></span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '18px 0 0 0', padding: '0 0 18px 0' }}>
          {serviceEntries.map(s => (
            <div key={s.label} style={{ textAlign: 'center', flex: 1, cursor: 'pointer' }} onClick={() => s.path !== '#' ? navigate(s.path) : alert(`${s.label}功能待实现`)}>
              <div>{s.icon}</div>
              <div style={{ fontSize: 15, color: '#222', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 常用功能快捷入口 */}
      <div style={{ background: '#fff', borderRadius: 14, margin: '18px 12px 0 12px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: '0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 18px 0 18px' }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#222' }}>常用功能</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '18px 0 0 0', padding: '0 0 18px 0' }}>
          {quickActions.map((a, idx) => (
            <div key={a.label} style={{ width: '33.33%', textAlign: 'center', marginBottom: 18, cursor: 'pointer' }} onClick={() => a.path !== '#' ? navigate(a.path) : alert(`${a.label}功能待实现`)}>
              <div>{a.icon}</div>
              <div style={{ fontSize: 15, color: '#222', marginTop: 6 }}>{a.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部品牌标识/宣传语 */}
      <div style={{ textAlign: 'center', color: '#bbb', fontSize: 13, margin: '32px 0 0 0', letterSpacing: 1 }}>
        喵星优选 · 用心服务每一位宠物家庭
      </div>
    </div>
  );
};

export default ProfilePage; 