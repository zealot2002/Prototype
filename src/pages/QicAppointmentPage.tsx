import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const catInfo = {
  name: '布偶猫',
  age: '4个月',
  gender: '母',
  id: 'CAT20240601',
  img: 'https://img1.baidu.com/it/u=156109097,2559707735&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
};
const userInfo = {
  name: '张三',
  phone: '138****8888',
  id: 'USER20240601',
};
const sellerInfo = {
  name: '李老板',
  phone: '139****6666',
  shop: '喵星宠物店',
};

function formatDateTime(dt: Date) {
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, '0');
  const d = String(dt.getDate()).padStart(2, '0');
  const h = String(dt.getHours()).padStart(2, '0');
  const min = String(dt.getMinutes()).padStart(2, '0');
  return `${y}-${m}-${d}T${h}:${min}`;
}

const QicAppointmentPage: React.FC = () => {
  const now = new Date();
  now.setHours(now.getHours() + 1, 0, 0, 0);
  const [datetime, setDatetime] = useState(formatDateTime(now));
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20, background: '#fafcff', minHeight: '100vh', boxSizing: 'border-box', paddingBottom: 100 }}>
      <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 24, color: '#1890ff', textAlign: 'center' }}>预约QIC体检</div>
      {/* 体检时间选择 */}
      <div style={{ marginBottom: 24, background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>体检时间</div>
        <input
          type="datetime-local"
          value={datetime}
          min={formatDateTime(new Date())}
          onChange={e => setDatetime(e.target.value)}
          style={{ fontSize: 16, padding: '8px 12px', borderRadius: 6, border: '1px solid #eee', width: '100%' }}
        />
      </div>
      {/* 猫咪信息 */}
      <div style={{ marginBottom: 16, background: '#fff', borderRadius: 12, padding: 16, display: 'flex', alignItems: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}>
        <img src={catInfo.img} alt={catInfo.name} style={{ width: 64, height: 64, borderRadius: 8, objectFit: 'cover', marginRight: 16 }} />
        <div>
          <div style={{ fontWeight: 600, fontSize: 16 }}>{catInfo.name}</div>
          <div style={{ color: '#888', fontSize: 14 }}>年龄：{catInfo.age} | 性别：{catInfo.gender}</div>
          <div style={{ color: '#bbb', fontSize: 13 }}>编号：{catInfo.id}</div>
        </div>
      </div>
      {/* 用户信息 */}
      <div style={{ marginBottom: 16, background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}>
        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>用户信息</div>
        <div>姓名：{userInfo.name}</div>
        <div>手机号：{userInfo.phone}</div>
        <div style={{ color: '#bbb', fontSize: 13 }}>用户ID：{userInfo.id}</div>
      </div>
      {/* 卖家信息 */}
      <div style={{ marginBottom: 16, background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}>
        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>卖家信息</div>
        <div>姓名：{sellerInfo.name}</div>
        <div>手机号：{sellerInfo.phone}</div>
        <div>店铺：{sellerInfo.shop}</div>
      </div>
      {/* 预约按钮 */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: '#fff', padding: 16, boxShadow: '0 -2px 8px rgba(24,144,255,0.06)', zIndex: 10 }}>
        <button
          style={{
            width: '100%',
            background: '#1890ff',
            color: '#fff',
            fontSize: 18,
            fontWeight: 600,
            border: 'none',
            borderRadius: 8,
            padding: '16px 0',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(24,144,255,0.08)'
          }}
          onClick={() => setShowSuccess(true)}
        >
          预约体检
        </button>
      </div>
      {/* 预约成功提示 */}
      {showSuccess && (
        <div style={{ position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.25)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 32, textAlign: 'center', minWidth: 240 }}>
            <div style={{ fontSize: 22, color: '#52c41a', marginBottom: 16 }}>预约成功！</div>
            <div style={{ color: '#888', marginBottom: 24 }}>我们会尽快与您联系确认体检安排。</div>
            <button
              style={{ background: '#1890ff', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 32px', fontSize: 16, cursor: 'pointer' }}
              onClick={() => navigate('/home', { replace: true })}
            >
              知道了
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QicAppointmentPage; 