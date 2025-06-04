import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

type Product = {
  id: number;
  name: string;
  price: string;
  img: string;
  buyers: number;
  sold: number;
  tag: string;
  originPrice?: string;
};

export const initialProducts: Product[] = [
  {
    id: 1,
    name: '皇家成猫粮10kg营养配方全价猫主粮',
    price: '¥89',
    originPrice: '¥129',
    img: 'https://t15.baidu.com/it/u=1992151386,1024749454&fm=224&app=112&f=JPEG?w=500&h=500',
    buyers: 1200,
    tag: '限时特价',
    sold: 2000,
  },
  {
    id: 2,
    name: '渴望无谷鸡肉猫粮5.4kg天然粮',
    price: '¥99',
    img: 'https://www.w3schools.com/html/mov_bbb.mp4',
    buyers: 980,
    sold: 1500,
    tag: '',
  },
  {
    id: 3,
    name: '趣味逗猫棒互动猫玩具羽毛铃铛组合',
    price: '¥29.9',
    img: 'https://img1.baidu.com/it/u=1923027163,1364216940&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    buyers: 2100,
    tag: '热销推荐',
    sold: 3200,
  },
  {
    id: 4,
    name: '毛绒老鼠电动逗猫玩具仿真小老鼠',
    price: '¥19.9',
    img: 'https://img1.baidu.com/it/u=726222788,1494926947&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    buyers: 1560,
    sold: 1100,
    tag: '',
  },
  {
    id: 5,
    name: '猫咪趣味球轨道玩具多层互动益智',
    price: '¥15.9',
    originPrice: '¥25.9',
    img: 'https://img0.baidu.com/it/u=906747860,679994589&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    buyers: 800,
    tag: '限时特价',
    sold: 900,
  },
  {
    id: 6,
    name: '进口膨润土结团猫砂20L除臭抑菌',
    price: '¥59.9',
    img: 'https://img0.baidu.com/it/u=989315967,1060868218&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    buyers: 1340,
    sold: 1800,
    tag: '',
  },
  {
    id: 7,
    name: '豆腐猫砂6L原味除臭无尘结团',
    price: '¥69.9',
    img: 'https://img1.baidu.com/it/u=2585427602,3353812777&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    buyers: 920,
    tag: '热销推荐',
    sold: 2100,
  },
  {
    id: 8,
    name: '猫薄荷天然猫草解腻助消化零食',
    price: '¥12.9',
    img: 'https://t14.baidu.com/it/u=3574418580,1307549435&fm=224&app=112&f=JPEG?w=500&h=500',
    buyers: 600,
    sold: 700,
    tag: '',
  },
  {
    id: 9,
    name: '猫薄荷球玩具洁齿磨牙缓解压力',
    price: '¥15.9',
    originPrice: '¥22.9',
    img: 'https://t15.baidu.com/it/u=2744378959,19600248&fm=224&app=112&f=JPEG?w=500&h=500',
    buyers: 450,
    tag: '限时特价',
    sold: 500,
  },
];

function getMoreProducts(startId: number, count: number = 8): Product[] {
  // 生成更多商品，id递增
  return Array.from({ length: count }).map((_, i) => {
    const hasTag = Math.random() > 0.5;
    return {
      id: startId + i,
      name: `更多猫咪好物${startId + i}号`,
      price: `¥${(Math.random() * 100 + 10).toFixed(1)}`,
      img: 'https://img1.baidu.com/it/u=1923027163,1364216940&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
      buyers: Math.floor(Math.random() * 2000),
      sold: Math.floor(Math.random() * 3000),
      tag: hasTag ? '热销推荐' : '',
    };
  });
}

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(initialProducts);
  const [loadingMore, setLoadingMore] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  // 无限加载更多
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // 显示回到顶部按钮
      setShowBackTop(scrollTop > winHeight);
      // 无限加载
      if (!loadingMore && scrollTop + winHeight >= docHeight - 100) {
        setLoadingMore(true);
        setTimeout(() => {
          setProducts(prev => [...prev, ...getMoreProducts(prev.length + 1)]);
          setLoadingMore(false);
        }, 800);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadingMore]);

  return (
    <div>
      {/* 沉浸式状态栏 */}
      <div style={{ height: 0, background: 'linear-gradient(90deg, #1890ff 0%, #70c1ff 100%)' }} />
      {/* Banner 轮播区 */}
      <div style={{ width: '100vw', maxWidth: '100vw', height: '100vw', margin: 0, borderRadius: 0, overflow: 'hidden' }}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={8}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          style={{ width: '100%', height: '100%' }}
        >
          <SwiperSlide>
            <img
              src="https://img2.baidu.com/it/u=3172052450,251515344&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800"
              alt="banner1"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://t13.baidu.com/it/u=2757763074,4271170914&fm=224&app=112&f=JPEG?w=500&h=500"
              alt="banner2"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://qcloud.dpfile.com/pc/6s6zRQQ031aBa7ykjo28CfEXDM5q5hOmhRgJmMuL3jHeDKoK03f4-i-02-AOnT6r.jpg"
              alt="banner3"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* 热门服务板块 */}
      <div style={{ margin: '12px 12px 0 12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 20, fontWeight: 600 }}>热门服务</span>
          <span style={{ color: '#666666', cursor: 'pointer', fontSize: 14 }}>
            更多服务<span style={{ marginLeft: 2 }}>{'>'}</span>
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: 16,
            paddingBottom: 8,
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          className="hide-scrollbar"
        >
          {/* 猫咪qic服务 */}
          <div
            style={{
              background: '#f5f5f5',
              borderRadius: 16,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 0,
              cursor: 'pointer',
              overflow: 'hidden',
              minHeight: 180,
              flex: '0 0 40vw',
              maxWidth: 160,
            }}
            onClick={() => navigate('/qic-intro')}
          >
            <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
              <img
                src="https://img1.baidu.com/it/u=156109097,2559707735&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
                alt="猫咪qic服务"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 }}
              />
            </div>
            <div style={{ padding: '12px 8px 8px 8px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>猫咪qic服务</span>
              <span style={{ fontSize: 13, color: '#888', textAlign: 'center' }}>专业体检、货对版服务。</span>
            </div>
          </div>
          {/* 猫咪亲人见面 */}
          <div
            style={{
              background: '#f5f5f5',
              borderRadius: 16,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 0,
              cursor: 'pointer',
              overflow: 'hidden',
              minHeight: 180,
              flex: '0 0 40vw',
              maxWidth: 160,
            }}
            onClick={() => navigate('/family-intro')}
          >
            <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
              <img
                src="https://img0.baidu.com/it/u=3917813119,440150981&fm=253&fmt=auto&app=120&f=JPEG?w=608&h=453"
                alt="猫咪亲人见面"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 }}
              />
            </div>
            <div style={{ padding: '12px 8px 8px 8px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>猫咪亲人见面</span>
              <span style={{ fontSize: 13, color: '#888', textAlign: 'center' }}>与父母亲、姐妹见个面。</span>
            </div>
          </div>
          {/* 猫咪健康保险 */}
          <div
            style={{
              background: '#f5f5f5',
              borderRadius: 16,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 0,
              cursor: 'pointer',
              overflow: 'hidden',
              minHeight: 180,
              flex: '0 0 40vw',
              maxWidth: 160,
            }}
            onClick={() => navigate('/insurance-intro')}
          >
            <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
              <img
                src="https://img2.baidu.com/it/u=1940013127,3201390960&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt="猫咪健康保险"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 }}
              />
            </div>
            <div style={{ padding: '12px 8px 8px 8px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>猫咪健康保险</span>
              <span style={{ fontSize: 13, color: '#888', textAlign: 'center' }}>守护健康，理赔无忧。</span>
            </div>
          </div>
          {/* 猫咪6个月租赁服务 */}
          <div
            style={{
              background: '#f5f5f5',
              borderRadius: 16,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 0,
              cursor: 'pointer',
              overflow: 'hidden',
              minHeight: 180,
              flex: '0 0 40vw',
              maxWidth: 160,
            }}
            onClick={() => navigate('/rent-intro')}
          >
            <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
              <img
                src="https://img1.baidu.com/it/u=1404857416,1555204961&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt="猫咪6个月租赁服务"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 }}
              />
            </div>
            <div style={{ padding: '12px 8px 8px 8px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>猫咪6个月租赁服务</span>
              <span style={{ fontSize: 13, color: '#888', textAlign: 'center' }}>灵活陪伴，轻松养猫。</span>
            </div>
          </div>
        </div>
      </div>
      {/* 推荐商品板块 */}
      <div style={{ margin: '24px 12px 0 12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 20, fontWeight: 600 }}>推荐商品</span>
          <span style={{ color: '#666666', cursor: 'pointer', fontSize: 14 }} onClick={() => navigate('/mall')}>
            更多商品<span style={{ marginLeft: 2 }}>{'>'}</span>
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {products.map(item => (
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
                <div style={{ fontSize: 12, color: '#888', marginBottom: 6 }}>已售{item.sold}+ </div>
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
          ))}
          {loadingMore && <div style={{ gridColumn: '1/3', textAlign: 'center', color: '#aaa', padding: 12 }}>加载中...</div>}
        </div>
        {/* 回到顶部悬浮按钮 */}
        {showBackTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'fixed',
              right: 24,
              bottom: 90,
              zIndex: 100,
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: 22,
              color: '#888',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
            aria-label="回到顶部"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 15 12 9 18 15" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage; 