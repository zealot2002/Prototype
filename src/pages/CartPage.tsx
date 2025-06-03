import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 测试数据，实际可替换为全局购物车数据
const mockCart = [
  {
    id: 1,
    name: '皇家猫粮 2kg',
    price: '¥128',
    img: 'https://t15.baidu.com/it/u=1992151386,1024749454&fm=224&app=112&f=JPEG?w=500&h=500',
  },
  {
    id: 2,
    name: '猫爬架 多层豪华',
    price: '¥299',
    img: 'https://img0.baidu.com/it/u=3700568182,1427988911&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
  },
  {
    id: 3,
    name: '豆腐猫砂 6L',
    price: '¥39',
    img: 'https://img1.baidu.com/it/u=1923027163,1364216940&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
  },
];

function getPriceNum(price: string) {
  // "¥128" => 128
  return Number(price.replace(/[^\d.]/g, '')) || 0;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState(mockCart);
  const [selected, setSelected] = useState<number[]>(cart.map(item => item.id));
  const navigate = useNavigate();
  const selectAllRef = useRef<HTMLInputElement>(null);

  // 设置全选checkbox的indeterminate状态
  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = selected.length > 0 && selected.length < cart.length;
    }
  }, [selected, cart.length]);

  const handleDelete = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
    setSelected(selected.filter(sid => sid !== id));
  };

  const handleSelect = (id: number) => {
    setSelected(selected.includes(id)
      ? selected.filter(sid => sid !== id)
      : [...selected, id]
    );
  };

  const handleSelectAll = () => {
    if (selected.length === cart.length) {
      setSelected([]);
    } else {
      setSelected(cart.map(item => item.id));
    }
  };

  const selectedItems = cart.filter(item => selected.includes(item.id));
  const totalPrice = selectedItems.reduce((sum, item) => sum + getPriceNum(item.price), 0);

  const handleBuy = () => {
    if (selectedItems.length === 0) {
      alert('请先选择要购买的商品');
      return;
    }
    navigate('/confirm-order', { state: { products: selectedItems } });
  };

  return (
    <div style={{ background: '#f7f8fa', minHeight: '100vh', padding: '16px 0 70px 0' }}>
      {/* 吸顶标题 */}
      <div style={{
        fontSize: 22,
        fontWeight: 700,
        textAlign: 'center',
        margin: '0 0 18px 0',
        color: '#222',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: '#f7f8fa',
        padding: '12px 0 12px 0',
        borderBottom: '1px solid #f0f0f0',
      }}>
        购物车
      </div>
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#aaa', fontSize: 18, marginTop: 60 }}>购物车空空如也</div>
      ) : (
        <div style={{ maxWidth: 600, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12, padding: '0 12px' }}>
          {/* 全选栏 */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <input
              type="checkbox"
              ref={selectAllRef}
              checked={selected.length === cart.length && cart.length > 0}
              onChange={handleSelectAll}
              style={{ width: 18, height: 18, marginRight: 8 }}
            />
            <span style={{ fontSize: 15, color: '#333', fontWeight: 500 }}>全选</span>
          </div>
          {cart.map(item => (
            <div
              key={item.id}
              style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', padding: 10, cursor: 'pointer', position: 'relative' }}
              onClick={e => {
                if ((e.target as HTMLElement).closest('.cart-delete-btn')) return;
                if ((e.target as HTMLElement).closest('.cart-checkbox')) return;
                navigate(`/product/${item.id}`);
              }}
            >
              <input
                type="checkbox"
                className="cart-checkbox"
                checked={selected.includes(item.id)}
                onChange={() => handleSelect(item.id)}
                style={{ width: 18, height: 18, marginRight: 10 }}
                onClick={e => e.stopPropagation()}
              />
              <img src={item.img} alt={item.name} style={{ width: 64, height: 64, borderRadius: 8, objectFit: 'cover', marginRight: 14, border: '1px solid #f0f0f0' }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</div>
                <div style={{ color: '#ff4d4f', fontSize: 16, fontWeight: 700 }}>{item.price}</div>
              </div>
              <button
                className="cart-delete-btn"
                style={{ background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 16px', fontSize: 15, cursor: 'pointer', marginLeft: 10 }}
                onClick={e => {
                  e.stopPropagation();
                  handleDelete(item.id);
                }}
              >
                删除
              </button>
            </div>
          ))}
        </div>
      )}
      {/* 底部吸底栏 */}
      {cart.length > 0 && (
        <div style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 56, // 上移到导航栏上方
          background: '#fff',
          borderTop: '1px solid #eee',
          boxShadow: '0 -2px 8px rgba(0,0,0,0.03)',
          zIndex: 100,
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 56
        }}>
          <div style={{ fontSize: 16, color: '#222' }}>
            已选 <span style={{ color: '#1890ff', fontWeight: 600 }}>{selected.length}</span> 件，总价：
            <span style={{ color: '#ff4d4f', fontWeight: 700, fontSize: 18 }}>¥{totalPrice.toFixed(2)}</span>
          </div>
          <button
            style={{ background: selected.length === 0 ? '#ccc' : '#ffb347', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 32px', fontSize: 17, fontWeight: 600, cursor: selected.length === 0 ? 'not-allowed' : 'pointer', boxShadow: '0 2px 8px rgba(255,179,71,0.08)' }}
            disabled={selected.length === 0}
            onClick={handleBuy}
          >
            购买
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage; 