import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { FiArrowLeft, FiUserPlus, FiShare2 } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Reply {
  id: number;
  content: string;
}

interface Post {
  id: number;
  content: string;
  img: string | string[]; // 支持多图
  user: {
    avatar: string;
    nickname: string;
  };
  likes: number;
  tag?: string;
  replies: Reply[];
}

interface PostDetailPageProps {
  posts: Post[];
}

const PostDetailPage: React.FC<PostDetailPageProps> = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [comment, setComment] = useState('');
  const [replyList, setReplyList] = useState<Reply[]>([]);
  // 优先用 location.state 传递的 post，否则用 id 查找
  let post: Post | undefined = location.state?.post;
  if (!post && id) {
    post = posts.find(p => String(p.id) === id);
  }
  React.useEffect(() => {
    if (post) setReplyList(post.replies);
  }, [post]);

  if (!post) {
    return (
      <div style={{ padding: 32, textAlign: 'center', color: '#888' }}>
        帖子不存在或未传递数据。
        <button style={{ marginLeft: 16 }} onClick={() => navigate(-1)}>返回</button>
      </div>
    );
  }

  // 处理多图
  const images = Array.isArray(post.img) ? post.img : [post.img];
  // 评论提交
  const handleCommentSend = () => {
    if (!comment.trim()) return;
    setReplyList(prev => [
      ...prev,
      { id: Date.now(), content: comment }
    ]);
    setComment('');
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'inherit' }}>
      {/* 顶部栏 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 10px 8px 10px', borderBottom: '1px solid #f0f0f0', position: 'sticky', top: 0, background: '#fff', zIndex: 10 }}>
        {/* 左侧：返回+头像+昵称 */}
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
          <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', padding: 0, marginRight: 8, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <FiArrowLeft style={{ fontSize: 22 }} />
          </button>
          <img src={post.user.avatar} alt="头像" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', marginRight: 10, border: '1.5px solid #eee' }} />
          <div style={{ fontWeight: 600, fontSize: 17, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{post.user.nickname}</div>
        </div>
        {/* 右侧：关注+分享 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button 
            style={{ border: '1px solid #ff385c', color: '#ff385c', background: '#fff', borderRadius: 16, padding: '4px 14px', fontWeight: 500, fontSize: 15, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
            onClick={() => alert('已经关注')}
          >
            <FiUserPlus style={{ fontSize: 18 }} /> 关注
          </button>
          <button 
            style={{ background: 'none', border: 'none', borderRadius: 12, padding: 4, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', cursor: 'pointer' }}
            onClick={() => alert('已经分享')}
          >
            <FiShare2 style={{ fontSize: 20 }} />
          </button>
        </div>
      </div>
      {/* 帖子图片轮播 */}
      <div style={{ width: '100%', background: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Swiper
          spaceBetween={8}
          slidesPerView={1}
          pagination={{ clickable: true }}
          style={{ width: '100%', maxWidth: 480, maxHeight: 320 }}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`帖子配图${idx + 1}`}
                style={{ width: '100%', height: 320, objectFit: 'cover', cursor: 'pointer' }}
                // onClick={() => handlePreview(idx)} // 预览功能后续补充
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 正文内容 */}
      <div style={{ padding: '0 18px', fontSize: 19, fontWeight: 600, color: '#222', lineHeight: 1.7, margin: '8px 0 0 0', wordBreak: 'break-all' }}>
        {post.content}
      </div>
      {/* 点赞评论栏 */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px 18px 0 18px', gap: 18 }}>
        <span style={{ display: 'flex', alignItems: 'center', color: '#ff385c', fontWeight: 600, fontSize: 17, marginRight: 8 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#ff385c" style={{ marginRight: 4 }}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          {post.likes}
        </span>
        <span style={{ color: '#888', fontSize: 16 }}>评论 {replyList.length}</span>
        <span style={{ color: '#888', fontSize: 16 }}>收藏</span>
      </div>
      {/* 评论区 */}
      <div style={{ padding: '18px', color: '#222', fontSize: 15 }}>
        {replyList.length === 0 ? (
          <div style={{ color: '#888' }}>暂无评论</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {replyList.map(r => (
              <div key={r.id} style={{ background: '#f7f7f7', borderRadius: 8, padding: '8px 12px', color: '#333' }}>{r.content}</div>
            ))}
          </div>
        )}
      </div>
      {/* 评论输入框 */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px 18px 18px 18px', borderTop: '1px solid #f0f0f0', background: '#fff', position: 'sticky', bottom: 0, zIndex: 10 }}>
        <input
          type="text"
          placeholder="写下你的评论..."
          value={comment}
          onChange={e => setComment(e.target.value)}
          style={{ flex: 1, fontSize: 16, padding: '8px 12px', borderRadius: 18, border: '1px solid #eee', outline: 'none', marginRight: 10 }}
          onKeyDown={e => { if (e.key === 'Enter') handleCommentSend(); }}
        />
        <button
          onClick={handleCommentSend}
          style={{ background: '#ff385c', color: '#fff', border: 'none', borderRadius: 16, padding: '7px 18px', fontWeight: 500, fontSize: 15, cursor: 'pointer' }}
        >发送</button>
      </div>
    </div>
  );
};

export default PostDetailPage; 