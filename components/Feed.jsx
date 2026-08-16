'use client';
import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import Hero from './Hero';
import { Image, Send, Edit3 } from 'lucide-react';

const DUMMY_POSTS = [
  {
    _id: 'sample1',
    content: 'Just wrapped up our Sustainable Couture collection fitting for Paris Fashion Week! Excited to share behind-the-scenes previews soon. 🌿👗',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    author: { name: 'Sophia Laurent', role: 'Lead Runway Stylist' },
    likes: [1, 2, 3, 4, 5],
    comments: [1, 2]
  },
  {
    _id: 'sample2',
    content: 'Looking for freelance fashion photographers in Milan for an upcoming editorial campaign next month. Send over your portfolios! 📸',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    author: { name: 'Marcello Vance', role: 'Creative Director' },
    likes: [1, 2, 3],
    comments: []
  }
];

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const stored = localStorage.getItem('user');
      setUser(stored ? JSON.parse(stored) : null);
    };

    loadUser();
    fetchPosts();

    // Update the composer as soon as the user signs in or out anywhere in the app
    window.addEventListener('auth-change', loadUser);
    window.addEventListener('storage', loadUser);
    return () => {
      window.removeEventListener('auth-change', loadUser);
      window.removeEventListener('storage', loadUser);
    };
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/posts');
      if (res.ok) {
        const data = await res.json();
        setPosts(data.length > 0 ? data : DUMMY_POSTS);
      } else {
        setPosts(DUMMY_POSTS);
      }
    } catch (err) {
      setPosts(DUMMY_POSTS);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return alert('Please sign in to publish a post.');

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify({ content, image })
    });

    if (res.ok) {
      setContent('');
      setImage('');
      fetchPosts();
    }
  };

  return (
    <div className="d-flex flex-column gap-3">
      {/* 1. HERO BANNER - RENDERED ONCE */}
      <Hero />

      {/* 2. POST CREATOR - RENDERED ONCE */}
      {user ? (
        <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
          <form onSubmit={handlePostSubmit}>
            <textarea
              className="form-control border-0 bg-light rounded-3 p-3 mb-2"
              rows={2}
              placeholder={`What's happening in fashion today, ${user.name}?`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>

            <input
              type="url"
              className="form-control form-control-sm border-0 bg-light rounded-3 px-3 py-2 mb-3"
              placeholder="Image URL (optional)"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <div className="d-flex justify-content-between align-items-center">
              <span className="text-muted small d-flex align-items-center gap-1">
                <Image size={18} /> Add Media
              </span>
              <button
                type="submit"
                className="btn text-white rounded-pill px-4 fw-bold btn-sm d-flex align-items-center gap-1"
                style={{ backgroundColor: '#8C533C' }}
              >
                <Send size={14} /> Post
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#FAF8F5', color: '#8C533C' }}>
              <Edit3 size={20} />
            </div>
            <div>
              <h6 className="fw-bold mb-0 text-dark small">Want to share your fashion work?</h6>
              <small className="text-muted" style={{ fontSize: '0.75rem' }}>
                Sign in or create an account to post updates, share collections, and network with professionals.
              </small>
            </div>
          </div>
          <button className="btn text-white rounded-pill px-3 fw-bold btn-sm flex-shrink-0" style={{ backgroundColor: '#8C533C' }}>
            Get Started ›
          </button>
        </div>
      )}

      {/* 3. POSTS LOOP - ONLY POST CARDS */}
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}