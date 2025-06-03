import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// 示例商品数据（实际可从全局或API获取）
const products = [
  {
    id: 1,
    name: '皇家猫粮 2kg',
    price: '¥128',
    img: 'https://t15.baidu.com/it/u=1992151386,1024749454&fm=224&app=112&f=JPEG?w=500&h=500',
    desc: '优质猫粮，营养均衡，适合所有猫咪。',
    detailImg: 'https://img.zcool.cn/community/01b6e95d5e2e2fa8012193a3e7e2e7.jpg',
  },
  {
    id: 2,
    name: '猫爬架 多层豪华',
    price: '¥299',
    img: 'https://img0.baidu.com/it/u=3700568182,1427988911&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    desc: '多层猫爬架，结实耐用，猫咪最爱。',
    detailImg: 'https://img.zcool.cn/community/01b6e95d5e2e2fa8012193a3e7e2e7.jpg',
  },
  // ...可补充更多商品
];

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div style={{ padding: 32, textAlign: 'center', color: '#888' }}>商品不存在</div>;
  }

  return (
    <div style={{ background: '#f7f8fa', minHeight: '100vh', paddingBottom: 60 }}>
      {/* 商品大图 */}
      <div style={{ background: '#fff' }}>
        <img src={product.img} alt={product.name} style={{ width: '100%', height: 320, objectFit: 'cover' }} />
      </div>
      {/* 标题、价格、描述 */}
      <div style={{ background: '#fff', marginTop: 10, padding: '18px 16px 12px 16px', borderRadius: 12 }}>
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{product.name}</div>
        <div style={{ color: '#ff4d4f', fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{product.price}</div>
        <div style={{ color: '#888', fontSize: 15, marginBottom: 12 }}>{product.desc}</div>
      </div>
      {/* 商品图文详情 */}
      <div style={{ background: '#fff', marginTop: 12, borderRadius: 12, padding: 0 }}>
        <div style={{ fontSize: 17, fontWeight: 600, padding: '16px 16px 8px 16px' }}>商品详情</div>
        <div style={{ padding: '0 16px 16px 16px', color: '#555', fontSize: 15, lineHeight: 1.8 }}>
          1. 精选优质原料，科学配比，满足猫咪日常营养需求。<br />
          2. 适口性强，易于消化吸收，呵护肠胃健康。<br />
          3. 颗粒大小适中，适合不同年龄段猫咪食用。<br />
          4. 采用先进工艺，锁住新鲜美味，猫咪爱不释口。<br />
          5. 适合长期作为主粮，助力猫咪健康成长。
        </div>
        <img src={product.detailImg} alt="商品详情" style={{ width: '100%', borderRadius: 0, marginBottom: 0 }} />
      </div>
      {/* 返回按钮 */}
      <div style={{ position: 'fixed', left: 12, top: 12, zIndex: 10 }}>
        <button onClick={() => navigate(-1)} style={{ background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: 16, padding: '6px 12px', fontSize: 16, cursor: 'pointer' }}>返回</button>
      </div>
      {/* 悬浮立即购买按钮 */}
      <button
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: 52,
          background: '#1890ff',
          color: '#fff',
          border: 'none',
          borderRadius: 0,
          fontSize: 20,
          fontWeight: 700,
          cursor: 'pointer',
          zIndex: 100
        }}
        onClick={() => navigate('/confirm-order', { state: { product } })}
      >
        立即购买
      </button>
    </div>
  );
};

export default ProductDetailPage; 