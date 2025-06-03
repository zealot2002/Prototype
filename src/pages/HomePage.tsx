import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* 沉浸式状态栏 */}
      <div style={{ height: 0, background: 'linear-gradient(90deg, #1890ff 0%, #70c1ff 100%)' }} />
      {/* Banner 轮播区 */}
      <div style={{ width: '100vw', maxWidth: '100%', height: 300, margin: 0, borderRadius: 0, overflow: 'hidden' }}>
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
              src="https://img2.baidu.com/it/u=3016829435,1168698880&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067"
              alt="banner1"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img0.baidu.com/it/u=808720914,4112648582&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1731"
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
          <span style={{ color: '#1890ff', cursor: 'pointer', fontSize: 14 }}>更多服务</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {/* 猫咪qic服务 */}
          <div style={{ background: '#f5f5f5', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, cursor: 'pointer', overflow: 'hidden', minHeight: 180 }}>
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
          <div style={{ background: '#f5f5f5', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, cursor: 'pointer', overflow: 'hidden', minHeight: 180 }}>
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
        </div>
      </div>
      {/* 推荐商品板块 */}
      <div style={{ margin: '24px 12px 0 12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 20, fontWeight: 600 }}>推荐商品</span>
          <span style={{ color: '#1890ff', cursor: 'pointer', fontSize: 14 }} onClick={() => navigate('/mall')}>更多商品</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            {
              id: 1,
              name: '猫粮',
              price: '¥89',
              img: 'https://t15.baidu.com/it/u=1992151386,1024749454&fm=224&app=112&f=JPEG?w=500&h=500',
              buyers: 1200,
            },
            {
              id: 2,
              name: '猫粮',
              price: '¥99',
              img: 'https://img0.baidu.com/it/u=3700568182,1427988911&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
              buyers: 980,
            },
            {
              id: 3,
              name: '猫玩具',
              price: '¥29.9',
              img: 'https://img1.baidu.com/it/u=1923027163,1364216940&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
              buyers: 2100,
            },
            {
              id: 4,
              name: '猫玩具',
              price: '¥19.9',
              img: 'https://img1.baidu.com/it/u=726222788,1494926947&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              buyers: 1560,
            },
            {
              id: 5,
              name: '猫玩具',
              price: '¥15.9',
              img: 'https://img0.baidu.com/it/u=906747860,679994589&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
              buyers: 800,
            },
            {
              id: 6,
              name: '猫砂',
              price: '¥59.9',
              img: 'https://img0.baidu.com/it/u=989315967,1060868218&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              buyers: 1340,
            },
            {
              id: 7,
              name: '猫砂',
              price: '¥69.9',
              img: 'https://img1.baidu.com/it/u=2585427602,3353812777&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
              buyers: 920,
            },
            {
              id: 8,
              name: '猫薄荷',
              price: '¥12.9',
              img: 'https://t14.baidu.com/it/u=3574418580,1307549435&fm=224&app=112&f=JPEG?w=500&h=500',
              buyers: 600,
            },
            {
              id: 9,
              name: '猫薄荷',
              price: '¥15.9',
              img: 'https://t15.baidu.com/it/u=2744378959,19600248&fm=224&app=112&f=JPEG?w=500&h=500',
              buyers: 450,
            },
          ].map(item => (
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
                  <span style={{ fontSize: 12, color: '#999' }}>{item.buyers}人已购买</span>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 