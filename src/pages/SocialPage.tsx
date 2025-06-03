import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import PostDetailPage from './PostDetailPage';

interface Reply {
  id: number;
  content: string;
}

interface Post {
  id: number;
  content: string;
  img: string[];
  user: {
    avatar: string;
    nickname: string;
  };
  likes: number;
  tag?: string;
  replies: Reply[];
}

const imageLinks = [
  'https://img2.baidu.com/it/u=756651747,3692837599&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  'https://img0.baidu.com/it/u=2448865641,2839481050&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
  'https://img0.baidu.com/it/u=670391496,676264176&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  'https://img2.baidu.com/it/u=3864613471,171010667&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  'https://img2.baidu.com/it/u=2718562740,2388864416&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
  'https://img1.baidu.com/it/u=2084962530,2457559008&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
];

const samplePosts: Omit<Post, 'id' | 'replies'>[] = [
  {
    content: '每天回家看到猫咪在门口等我，所有的疲惫都消失了。',
    img: imageLinks,
    user: {
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      nickname: '小橘子',
    },
    likes: 44,
    tag: '晒照',
  },
  {
    content: '狗狗第一次学会握手，真的太有成就感了！',
    img: imageLinks,
    user: {
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      nickname: '大壮',
    },
    likes: 7593,
    tag: '热门',
  },
  {
    content: '猫砂盆要勤快清理，家里才不会有异味。',
    img: imageLinks,
    user: {
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      nickname: '猫奴小七',
    },
    likes: 12,
    tag: '养宠',
  },
  {
    content: '带狗狗去公园玩耍，它开心得像个孩子。',
    img: imageLinks,
    user: {
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      nickname: '阿布',
    },
    likes: 75,
    tag: '晒照',
  },
  {
    content: '给猫咪买了新玩具，玩了一下午都不腻。',
    img: imageLinks,
    user: {
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      nickname: '小鱼干',
    },
    likes: 23,
    tag: '养宠',
  },
  {
    content: '养宠物最大的收获就是每天都很治愈。',
    img: imageLinks,
    user: {
      avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
      nickname: '治愈星人',
    },
    likes: 99,
    tag: '热门',
  },
  {
    content: '狗狗洗澡后香喷喷，抱着睡觉超幸福。',
    img: imageLinks,
    user: {
      avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
      nickname: '小黑',
    },
    likes: 56,
    tag: '晒照',
  },
  {
    content: '猫咪喜欢晒太阳，阳光下的它像个小天使。',
    img: imageLinks,
    user: {
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      nickname: '暖阳',
    },
    likes: 88,
    tag: '养宠',
  },
];

const channels = ['推荐', '热门', '养宠', '晒照'];

function getRandomPost(i: number): Post {
  const base = samplePosts[i % samplePosts.length];
  return {
    ...base,
    id: i + 1,
    replies: [],
  };
}

const initialPosts: Post[] = Array.from({ length: 8 }).map((_, i) => getRandomPost(i));

const PostCreatePage: React.FC<{ onPost: (post: Post) => void }> = ({ onPost }) => {
  const [newPost, setNewPost] = useState('');
  const [imgFiles, setImgFiles] = useState<File[]>([]);
  const [imgPreviews, setImgPreviews] = useState<string[]>([]);
  const [channel, setChannel] = useState('推荐');
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 处理多图选择
  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length > 0) {
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setImgFiles(prev => [...prev, ...files]);
      setImgPreviews(prev => [...prev, ...newPreviews]);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // 删除某张图片
  const handleRemoveImg = (idx: number) => {
    setImgFiles(prev => prev.filter((_, i) => i !== idx));
    setImgPreviews(prev => prev.filter((_, i) => i !== idx));
  };

  const handlePost = () => {
    if (!newPost.trim() || imgPreviews.length === 0) return;
    onPost({
      id: Date.now(),
      content: newPost,
      img: imgPreviews,
      user: {
        avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
        nickname: '我自己',
      },
      likes: Math.floor(Math.random() * 100),
      tag: channel,
      replies: [],
    });
    setNewPost('');
    setImgFiles([]);
    setImgPreviews([]);
    alert('发布成功');
    navigate(-1);
  };

  // 页面禁止滑动
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, []);

  return (
    <div style={{ background: '#f7f8fa', minHeight: '100vh', padding: 0, overflow: 'hidden' }}>
      <form style={{ width: '100%', padding: '24px 16px 90px 16px', display: 'flex', flexDirection: 'column', gap: 18 }} onSubmit={e => { e.preventDefault(); handlePost(); }}>
        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>发布新帖</div>
        <textarea
          value={newPost}
          onChange={e => setNewPost(e.target.value)}
          placeholder="分享你的养宠感受..."
          style={{
            width: '100%',
            minHeight: 128,
            borderRadius: 10,
            border: '1px solid #eee',
            padding: '10px 14px',
            fontSize: 16,
            resize: 'none',
            background: '#fff',
            boxSizing: 'border-box',
            margin: 0,
            display: 'block',
          }}
          maxLength={200}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontSize: 15, fontWeight: 500, marginBottom: 2 }}>图片：</label>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 10, overflowX: 'auto', alignItems: 'center' }}>
            {imgPreviews.map((src, idx) => (
              <div key={idx} style={{ position: 'relative', width: 80, height: 80, flex: '0 0 auto' }}>
                <img src={src} alt={`预览${idx+1}`} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 10, background: '#f5f5f5' }} />
                <button type="button" onClick={() => handleRemoveImg(idx)} style={{ position: 'absolute', top: -8, right: -8, background: '#fff', border: '1px solid #eee', borderRadius: '50%', width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', fontSize: 16, color: '#888' }}>×</button>
              </div>
            ))}
            {/* +按钮 */}
            <button type="button" onClick={() => fileInputRef.current?.click()} style={{ width: 80, height: 80, borderRadius: 10, border: '1.5px dashed #1890ff', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, color: '#1890ff', cursor: 'pointer', flex: '0 0 auto', padding: 0 }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="18" y1="8" x2="18" y2="28" stroke="#1890ff" strokeWidth="3" strokeLinecap="round"/>
                <line x1="8" y1="18" x2="28" y2="18" stroke="#1890ff" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </button>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              multiple
              ref={fileInputRef}
              onChange={handleImgChange}
              style={{ display: 'none' }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 15 }}>频道：</span>
          <select value={channel} onChange={e => setChannel(e.target.value)} style={{ height: 32, borderRadius: 8, border: '1px solid #eee', fontSize: 15 }}>
            {channels.map(tab => <option key={tab} value={tab}>{tab}</option>)}
          </select>
        </div>
      </form>
      {/* 固定底部发布按钮 */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: '#fff', boxShadow: '0 -2px 12px rgba(0,0,0,0.04)', padding: '12px 16px', zIndex: 100 }}>
        <button
          type="button"
          onClick={handlePost}
          style={{ width: '100%', height: 48, borderRadius: 24, background: '#1890ff', color: '#fff', border: 'none', fontWeight: 700, fontSize: 18, cursor: 'pointer', letterSpacing: 2 }}
        >
          发布
        </button>
      </div>
    </div>
  );
};

const SocialHome: React.FC<{ posts: Post[]; onAddPost: (post: Post) => void }> = ({ posts, onAddPost }) => {
  const [replyContent, setReplyContent] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [channel, setChannel] = useState('推荐');
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // 无限加载更多（模拟）
  useEffect(() => {
    const handleScroll = () => {
      if (!listRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        if (!loading && hasMore) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setHasMore(posts.length < 40);
          }, 800);
        }
      }
    };
    const node = listRef.current;
    if (node) node.addEventListener('scroll', handleScroll);
    return () => {
      if (node) node.removeEventListener('scroll', handleScroll);
    };
  }, [posts, loading, hasMore]);

  // 频道过滤
  const filteredPosts = posts.filter(post => channel === '推荐' || post.tag === channel);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#f7f8fa', position: 'relative' }}>
      {/* 频道Tab */}
      <div style={{ background: '#fff', borderBottom: '1px solid #eee', position: 'sticky', top: 0, zIndex: 20, display: 'flex', alignItems: 'center', height: 44, padding: '0 8px' }}>
        {channels.map(tab => (
          <div
            key={tab}
            onClick={() => setChannel(tab)}
            style={{
              fontWeight: channel === tab ? 600 : 400,
              color: channel === tab ? '#1890ff' : '#333',
              fontSize: 16,
              margin: '0 12px',
              padding: '4px 0',
              borderBottom: channel === tab ? '2px solid #1890ff' : '2px solid transparent',
              cursor: 'pointer',
              transition: 'color 0.2s',
            }}
          >
            {tab}
          </div>
        ))}
      </div>
      {/* 帖子列表 */}
      <div ref={listRef} style={{ flex: 1, overflowY: 'auto', padding: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {filteredPosts.map(post => (
          <div key={post.id} 
            style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', minHeight: 320, maxHeight: 320, height: 320, cursor: 'pointer' }}
            onClick={() => navigate(`/social/post/${post.id}`, { state: { post } })}
          >
            {/* 图片及角标 */}
            <div style={{ width: '100%', height: 200, background: '#f5f5f5', overflow: 'hidden', position: 'relative' }}>
              <img src={post.img[0]} alt="帖子配图" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {post.tag && (
                <span style={{ position: 'absolute', left: 8, top: 8, background: '#ff385c', color: '#fff', fontSize: 12, borderRadius: 8, padding: '2px 8px', fontWeight: 500 }}>{post.tag}</span>
              )}
            </div>
            {/* 内容+用户+点赞 */}
            <div style={{ padding: '8px 10px 10px 10px', display: 'flex', flexDirection: 'column', flex: 1, overflow: 'auto' }}>
              <div style={{ fontSize: 15, color: '#222', marginBottom: 6, lineHeight: 1.5, fontWeight: 500, minHeight: 36, maxHeight: 72, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{post.content}</div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                <img src={post.user.avatar} alt="头像" style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover', marginRight: 6, border: '1.5px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }} />
                <span style={{ fontSize: 14, color: '#666', marginRight: 8 }}>{post.user.nickname}</span>
                <span style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', color: '#ff385c', fontSize: 14, fontWeight: 500 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff385c" style={{ marginRight: 2 }}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  {post.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
        {loading && <div style={{ gridColumn: '1/3', textAlign: 'center', color: '#aaa', padding: 12 }}>加载中...</div>}
        {!hasMore && <div style={{ gridColumn: '1/3', textAlign: 'center', color: '#aaa', padding: 12 }}>没有更多了</div>}
      </div>
      {/* 悬浮发帖按钮 */}
      <div style={{ position: 'fixed', right: 24, bottom: 80, zIndex: 30 }}>
        <button
          onClick={() => navigate('/social/create')}
          style={{
            width: 50,
            height: 50,
            minWidth: 50,
            minHeight: 50,
            maxWidth: 50,
            maxHeight: 50,
            borderRadius: '50%',
            background: '#fff',
            color: '#1890ff',
            border: 'none',
            boxShadow: '0 4px 16px rgba(24,144,255,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: 32,
            fontWeight: 700,
            transition: 'box-shadow 0.2s, transform 0.2s',
            padding: 0,
            overflow: 'hidden',
          }}
          onMouseOver={e => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(24,144,255,0.28)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)';
          }}
          onMouseOut={e => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(24,144,255,0.18)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <line x1="14" y1="6" x2="14" y2="22" stroke="#1890ff" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="6" y1="14" x2="22" y2="14" stroke="#1890ff" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

const SocialPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleAddPost = (post: Post) => {
    setPosts([post, ...posts]);
  };

  return (
    <Routes>
      <Route path="/" element={<SocialHome posts={posts} onAddPost={handleAddPost} />} />
      <Route path="/create" element={<PostCreatePage onPost={handleAddPost} />} />
      <Route path="post/:id" element={<PostDetailPage posts={posts} />} />
    </Routes>
  );
};

export default SocialPage; 