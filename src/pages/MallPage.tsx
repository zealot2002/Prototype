import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: '皇家猫粮 2kg',
    price: '¥128',
    img: 'https://images.unsplash.com/photo-1518715308788-3005759c61d3?auto=format&fit=crop&w=400&q=80',
    tag: '热销',
  },
  {
    id: 2,
    name: '猫爬架 多层豪华',
    price: '¥299',
    img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80',
    tag: '新品',
  },
  {
    id: 3,
    name: '豆腐猫砂 6L',
    price: '¥39',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    tag: '爆款',
  },
  {
    id: 4,
    name: '逗猫棒三件套',
    price: '¥19',
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a1408?auto=format&fit=crop&w=400&q=80',
    tag: '热销',
  },
  {
    id: 5,
    name: '智能饮水机',
    price: '¥159',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    tag: '推荐',
  },
  {
    id: 6,
    name: '猫咪自动喂食器',
    price: '¥199',
    img: 'https://images.unsplash.com/photo-1518715308788-3005759c61d3?auto=format&fit=crop&w=400&q=80',
    tag: '新品',
  },
  {
    id: 7,
    name: '宠物背包太空舱',
    price: '¥89',
    img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80',
    tag: '热销',
  },
  {
    id: 8,
    name: '猫咪梳毛刷',
    price: '¥29',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    tag: '爆款',
  },
];

const tags = ['全部', '热销', '新品', '爆款', '推荐'];

const MallPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('全部');

  const filteredProducts = products.filter(
    (item) =>
      (filter === '全部' || item.tag === filter) &&
      (item.name.includes(search) || item.tag.includes(search))
  );

  return (
    <div style={{ background: '#f7f8fa', minHeight: '100vh', paddingBottom: 16 }}>
      {/* 顶部搜索和筛选栏，永远置顶 */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'linear-gradient(90deg, #1890ff 0%, #70c1ff 100%)',
        padding: '12px 12px 8px 12px',
        boxShadow: '0 2px 8px rgba(24,144,255,0.08)'
      }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="text"
            placeholder="搜索商品/标签"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flex: 1,
              height: 36,
              borderRadius: 18,
              border: 'none',
              outline: 'none',
              padding: '0 16px',
              fontSize: 15,
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
            }}
          />
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            style={{
              height: 36,
              borderRadius: 18,
              border: 'none',
              outline: 'none',
              padding: '0 12px',
              fontSize: 15,
              background: '#fff',
              color: '#1890ff',
              fontWeight: 500,
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
            }}
          >
            {tags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
          </select>
        </div>
      </div>
      {/* 商品列表 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, padding: 16 }}>
        {filteredProducts.length === 0 ? (
          <div style={{ gridColumn: '1/3', textAlign: 'center', color: '#aaa', marginTop: 32 }}>暂无相关商品</div>
        ) : (
          filteredProducts.map((item) => (
            <div key={item.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', overflow: 'hidden', position: 'relative', cursor: 'pointer', transition: 'box-shadow 0.2s', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', aspectRatio: '1/1', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={item.img} alt={item.name} style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }} />
              </div>
              <div style={{ padding: '8px 12px 4px 12px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: '#222', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: '#1890ff', fontWeight: 600, fontSize: 16 }}>{item.price}</span>
                  <span style={{ fontSize: 12, color: '#fff', background: '#ff5722', borderRadius: 8, padding: '2px 8px', marginLeft: 8 }}>{item.tag}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MallPage; 