import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initialProducts } from './HomePage';

const tags = ['全部', '限时特价', '热销推荐', ''];
const sortOptions = [
  { label: '综合排序', value: 'default' },
  { label: '销量优先', value: 'sold' },
  { label: '价格升序', value: 'priceAsc' },
  { label: '价格降序', value: 'priceDesc' },
];

function getPriceNum(price: string) {
  return Number((price || '').replace(/[^\d.]/g, '')) || 0;
}

const MallPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('全部');
  const [sort, setSort] = useState('default');
  const navigate = useNavigate();

  let filteredProducts = initialProducts.filter(
    (item) =>
      (filter === '全部' || item.tag === filter) &&
      (item.name.includes(search) || item.tag.includes(search))
  );

  if (sort === 'sold') {
    filteredProducts = [...filteredProducts].sort((a, b) => (b.sold || 0) - (a.sold || 0));
  } else if (sort === 'priceAsc') {
    filteredProducts = [...filteredProducts].sort((a, b) => getPriceNum(a.price) - getPriceNum(b.price));
  } else if (sort === 'priceDesc') {
    filteredProducts = [...filteredProducts].sort((a, b) => getPriceNum(b.price) - getPriceNum(a.price));
  }

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
            {tags.map(tag => <option key={tag} value={tag}>{tag || '无标签'}</option>)}
          </select>
        </div>
        {/* 排序栏 */}
        <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
          {sortOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => setSort(opt.value)}
              style={{
                background: sort === opt.value ? '#1890ff' : '#fff',
                color: sort === opt.value ? '#fff' : '#1890ff',
                border: 'none',
                borderRadius: 16,
                padding: '4px 16px',
                fontWeight: 500,
                fontSize: 11,
                cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      {/* 商品列表 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: 16 }}>
        {filteredProducts.length === 0 ? (
          <div style={{ gridColumn: '1/3', textAlign: 'center', color: '#aaa', marginTop: 32 }}>暂无相关商品</div>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: 0, minHeight: 260, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'stretch', overflow: 'hidden' }}
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderTopLeftRadius: 10, borderTopRightRadius: 10, position: 'relative' }}>
                {item.tag && (
                  <span style={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    background: item.tag === '限时特价' ? '#ff4d4f' : '#1890ff',
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 600,
                    borderRadius: 4,
                    padding: '2px 8px',
                    zIndex: 2,
                  }}>{item.tag}</span>
                )}
                {item.img.endsWith('.mp4') ? (
                  <video
                    src={item.img}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                ) : (
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                )}
              </div>
              <div style={{ padding: '12px 8px 10px 8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1, position: 'relative' }}>
                <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>{item.name}</div>
                {item.tag === '限时特价' && item.originPrice ? (
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ color: '#999', textDecoration: 'line-through', fontSize: 13, marginRight: 8 }}>{item.originPrice}</span>
                    <span style={{ color: '#ff4d4f', fontWeight: 600, fontSize: 15 }}>{item.price}</span>
                  </div>
                ) : (
                  <div style={{ color: '#ff4d4f', fontWeight: 600, marginBottom: 6 }}>{item.price}</div>
                )}
                <div style={{ fontSize: 12, color: '#888', marginBottom: 6 }}>已售{item.sold || 0}+ </div>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: '#999' }}>{item.buyers}人已购买</span>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginLeft: 6 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1890ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6" />
                    </svg>
                  </span>
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