'use client';
import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import Hero from './Hero';
import { Image, Send } from 'lucide-react';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/posts');
      if (res.ok) setPosts(await res.json());
    } catch (err) {
      console.error(err);
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
      <Hero />

      {/* Create Post Input */}
      {user && (
        <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
          <form onSubmit={handlePostSubmit}>
            <textarea
              className="form-control border-0 bg-light rounded-3 p-3 mb-2"
              rows={3}
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
              <button type="submit" className="btn btn-primary rounded-pill px-4 fw-bold btn-sm d-flex align-items-center gap-1">
                <Send size={14} /> Post
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Feed List */}
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}