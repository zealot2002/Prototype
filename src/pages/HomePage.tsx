import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* 沉浸式状态栏 */}
      <div style={{ height: 24, background: 'linear-gradient(90deg, #1890ff 0%, #70c1ff 100%)' }} />
      {/* Banner 轮播区 */}
      <div style={{ height: 160, background: '#eee', margin: '12px', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Banner 轮播（待实现）
      </div>
      {/* 金刚区 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, margin: '12px' }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{ background: '#f5f5f5', borderRadius: 12, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            金刚{i+1}
          </div>
        ))}
      </div>
      {/* 热门商品瀑布流 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '12px' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 12, minHeight: 100, cursor: 'pointer' }}>
            热门商品{i+1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage; 