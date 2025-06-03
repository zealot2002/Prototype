import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// 假设商品信息通过 location.state 传递
const ConfirmOrderPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  // 示例收货地址
  const address = {
    name: '张三',
    phone: '138****8888',
    detail: '上海市浦东新区世纪大道1000号 1号楼101室',
    isDefault: true,
  };

  // 示例配送和支付方式
  const delivery = '京东快递（免运费）';
  const payment = '在线支付';

  // 示例价格明细
  const price = product ? Number(product.price.replace('¥', '')) : 0;
  const freight = 0;
  const total = price + freight;

  return (
    <div style={{ background: '#f7f8fa', minHeight: '100vh', paddingBottom: 60 }}>
      {/* 收货地址 */}
      <div style={{ background: '#fff', margin: '12px 0', borderRadius: 12, padding: 16, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 600 }}>{address.name} {address.phone}</div>
          <div style={{ color: '#888', fontSize: 14, marginTop: 4 }}>{address.detail}</div>
        </div>
        <span style={{ color: '#1890ff', fontSize: 15, fontWeight: 500 }}>更换</span>
      </div>
      {/* 商品信息 */}
      <div style={{ background: '#fff', borderRadius: 12, margin: '0 0 12px 0', padding: 16, display: 'flex', alignItems: 'center' }}>
        <img src={product?.img} alt={product?.name} style={{ width: 80, height: 80, borderRadius: 8, objectFit: 'cover', marginRight: 16 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{product?.name}</div>
          <div style={{ color: '#888', fontSize: 14, marginBottom: 6 }}>{product?.desc}</div>
          <div style={{ color: '#ff4d4f', fontSize: 16, fontWeight: 700 }}>{product?.price}</div>
        </div>
      </div>
      {/* 配送方式 */}
      <div style={{ background: '#fff', borderRadius: 12, margin: '0 0 12px 0', padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 15 }}>配送方式</span>
        <span style={{ color: '#333', fontSize: 15 }}>{delivery}</span>
      </div>
      {/* 支付方式 */}
      <div style={{ background: '#fff', borderRadius: 12, margin: '0 0 12px 0', padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 15 }}>支付方式</span>
        <span style={{ color: '#333', fontSize: 15 }}>{payment}</span>
      </div>
      {/* 订单备注 */}
      <div style={{ background: '#fff', borderRadius: 12, margin: '0 0 12px 0', padding: 16 }}>
        <span style={{ fontSize: 15 }}>订单备注</span>
        <input type="text" placeholder="选填：对本次订单的说明" style={{ width: '100%', marginTop: 8, border: '1px solid #eee', borderRadius: 8, padding: 8, fontSize: 15, outline: 'none' }} />
      </div>
      {/* 价格明细 */}
      <div style={{ background: '#fff', borderRadius: 12, margin: '0 0 12px 0', padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, marginBottom: 8 }}>
          <span>商品金额</span>
          <span>¥{price.toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, marginBottom: 8 }}>
          <span>运费</span>
          <span>¥{freight.toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 17, fontWeight: 700, marginTop: 8 }}>
          <span>应付总额</span>
          <span style={{ color: '#ff4d4f' }}>¥{total.toFixed(2)}</span>
        </div>
      </div>
      {/* 悬浮提交订单按钮 */}
      <button
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: 52,
          background: '#ff4d4f',
          color: '#fff',
          border: 'none',
          borderRadius: 0,
          fontSize: 20,
          fontWeight: 700,
          cursor: 'pointer',
          zIndex: 100
        }}
        onClick={() => alert('下单功能待实现')}
      >
        提交订单
      </button>
    </div>
  );
};

export default ConfirmOrderPage; 