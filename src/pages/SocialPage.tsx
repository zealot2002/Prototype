import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

interface Reply {
  id: number;
  content: string;
}

interface Post {
  id: number;
  content: string;
  img: string;
  user: {
    avatar: string;
    nickname: string;
  };
  likes: number;
  tag?: string;
  replies: Reply[];
}

const samplePosts: Omit<Post, 'id' | 'replies'>[] = [
  {
    content: '每天回家看到猫咪在门口等我，所有的疲惫都消失了。',
    img: 'https://images.unsplash.com/photo-1518715308788-3005759c61d3?auto=format&fit=crop&w=400&q=80',
    user: {
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      nickname: '小橘子',
    },
    likes: 44,
    tag: '晒照',
  },
  {
    content: '狗狗第一次学会握手，真的太有成就感了！',
    img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80',
    user: {
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      nickname: '大壮',
    },
    likes: 7593,
    tag: '热门',
  },
  {
    content: '猫砂盆要勤快清理，家里才不会有异味。',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    user: {
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      nickname: '猫奴小七',
    },
    likes: 12,
    tag: '养宠',
  },
  {
    content: '带狗狗去公园玩耍，它开心得像个孩子。',
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a1408?auto=format&fit=crop&w=400&q=80',
    user: {
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      nickname: '阿布',
    },
    likes: 75,
    tag: '晒照',
  },
  {
    content: '给猫咪买了新玩具，玩了一下午都不腻。',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    user: {
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      nickname: '小鱼干',
    },
    likes: 23,
    tag: '养宠',
  },
  {
    content: '养宠物最大的收获就是每天都很治愈。',
    img: 'https://images.unsplash.com/photo-1518715308788-3005759c61d3?auto=format&fit=crop&w=400&q=80',
    user: {
      avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
      nickname: '治愈星人',
    },
    likes: 99,
    tag: '热门',
  },
  {
    content: '狗狗洗澡后香喷喷，抱着睡觉超幸福。',
    img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80',
    user: {
      avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
      nickname: '小黑',
    },
    likes: 56,
    tag: '晒照',
  },
  {
    content: '猫咪喜欢晒太阳，阳光下的它像个小天使。',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
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
  const [newImg, setNewImg] = useState('');
  const [channel, setChannel] = useState('推荐');
  const navigate = useNavigate();

  const handlePost = () => {
    if (!newPost.trim() || !newImg.trim()) return;
    onPost({
      id: Date.now(),
      content: newPost,
      img: newImg,
      user: {
        avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
        nickname: '我自己',
      },
      likes: Math.floor(Math.random() * 100),
      tag: channel,
      replies: [],
    });
    setNewPost('');
    setNewImg('');
    navigate(-1);
  };

  return (
    <div style={{ background: '#f7f8fa', minHeight: '100vh', padding: 16 }}>
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 16, maxWidth: 480, margin: '32px auto' }}>
        <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 16 }}>发布新帖</div>
        <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
          <textarea
            value={newPost}
            onChange={e => setNewPost(e.target.value)}
            placeholder="分享你的养宠感受..."
            style={{ width: '100%', minHeight: 64, borderRadius: 12, border: '1px solid #eee', padding: '8px 12px', fontSize: 15, resize: 'none' }}
            maxLength={200}
          />
          <input
            value={newImg}
            onChange={e => setNewImg(e.target.value)}
            placeholder="图片URL（可用Unsplash等公开图片）"
            style={{ width: '100%', height: 36, borderRadius: 12, border: '1px solid #eee', padding: '0 12px', fontSize: 15 }}
          />
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 15 }}>频道：</span>
            <select value={channel} onChange={e => setChannel(e.target.value)} style={{ height: 32, borderRadius: 8, border: '1px solid #eee', fontSize: 15 }}>
              {channels.map(tab => <option key={tab} value={tab}>{tab}</option>)}
            </select>
          </div>
          <button
            onClick={handlePost}
            style={{ height: 40, borderRadius: 18, background: '#1890ff', color: '#fff', border: 'none', padding: '0 18px', fontWeight: 500, fontSize: 16, cursor: 'pointer', alignSelf: 'flex-end', marginTop: 8 }}
          >
            发布
          </button>
        </div>
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
          <div key={post.id} style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', minHeight: 420, maxHeight: 600 }}>
            {/* 图片及角标 */}
            <div style={{ width: '100%', aspectRatio: '1/1.2', background: '#f5f5f5', overflow: 'hidden', position: 'relative' }}>
              <img src={post.img} alt="帖子配图" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {post.tag && (
                <span style={{ position: 'absolute', left: 8, top: 8, background: '#ff385c', color: '#fff', fontSize: 12, borderRadius: 8, padding: '2px 8px', fontWeight: 500 }}>{post.tag}</span>
              )}
            </div>
            {/* 内容+用户+点赞 */}
            <div style={{ padding: '8px 10px 10px 10px', display: 'flex', flexDirection: 'column', flex: 1, overflow: 'auto' }}>
              <div style={{ fontSize: 15, color: '#222', marginBottom: 6, lineHeight: 1.5, fontWeight: 500, minHeight: 36, maxHeight: 120, overflow: 'auto', textOverflow: 'ellipsis' }}>{post.content}</div>
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
      <div style={{ position: 'fixed', left: '50%', bottom: 70, transform: 'translateX(-50%)', zIndex: 30 }}>
        <button
          onClick={() => navigate('/social/create')}
          style={{ width: 56, height: 56, borderRadius: '50%', background: '#ff385c', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(255,56,92,0.18)', fontSize: 32, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        >
          +
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
    </Routes>
  );
};

export default SocialPage; 