import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: '皇家猫粮 2kg',
    price: '¥128',
    img: 'https://t15.baidu.com/it/u=1992151386,1024749454&fm=224&app=112&f=JPEG?w=500&h=500',
    tag: '热销',
    buyers: 1200,
  },
  {
    id: 2,
    name: '猫爬架 多层豪华',
    price: '¥299',
    img: 'https://img0.baidu.com/it/u=3700568182,1427988911&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    tag: '新品',
    buyers: 980,
  },
  {
    id: 3,
    name: '豆腐猫砂 6L',
    price: '¥39',
    img: 'https://img1.baidu.com/it/u=1923027163,1364216940&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    tag: '爆款',
    buyers: 2100,
  },
  {
    id: 4,
    name: '逗猫棒三件套',
    price: '¥19',
    img: 'https://img1.baidu.com/it/u=726222788,1494926947&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    tag: '热销',
    buyers: 1560,
  },
  {
    id: 5,
    name: '智能饮水机',
    price: '¥159',
    img: 'https://img0.baidu.com/it/u=906747860,679994589&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    tag: '推荐',
    buyers: 800,
  },
  {
    id: 6,
    name: '猫咪自动喂食器',
    price: '¥199',
    img: 'https://img0.baidu.com/it/u=989315967,1060868218&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    tag: '新品',
    buyers: 1340,
  },
  {
    id: 7,
    name: '宠物背包太空舱',
    price: '¥89',
    img: 'https://img1.baidu.com/it/u=2585427602,3353812777&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    tag: '热销',
    buyers: 920,
  },
  {
    id: 8,
    name: '猫咪梳毛刷',
    price: '¥29',
    img: 'https://t14.baidu.com/it/u=3574418580,1307549435&fm=224&app=112&f=JPEG?w=500&h=500',
    tag: '爆款',
    buyers: 600,
  },
];

const tags = ['全部', '热销', '新品', '爆款', '推荐'];

const MallPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('全部');
  const navigate = useNavigate();

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
              <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '12px 8px 10px 8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1, position: 'relative' }}>
                <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>{item.name}</div>
                <div style={{ color: '#ff4d4f', fontWeight: 600, marginBottom: 6 }}>{item.price}</div>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: '#999' }}>{item.buyers ? `${item.buyers}人已购买` : ''}</span>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginLeft: 8 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1890ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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