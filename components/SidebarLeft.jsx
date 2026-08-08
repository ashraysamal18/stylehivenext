'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Eye, Users, Bookmark, Briefcase, MessageSquare, Settings, Sparkles } from 'lucide-react';

export default function SidebarLeft() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem('user');
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };
    checkUser();
    window.addEventListener('storage', checkUser);
    window.addEventListener('auth-change', checkUser);
    return () => {
      window.removeEventListener('storage', checkUser);
      window.removeEventListener('auth-change', checkUser);
    };
  }, []);

  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
      {/* Warm Pattern Header */}
      <div 
        style={{ 
          height: '100px', 
          background: 'linear-gradient(135deg, #8C533C 0%, #B8826D 100%)',
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)'
        }} 
      />

      <div className="card-body pt-0 text-center position-relative px-4">
        {/* Avatar */}
        <div 
          className="rounded-circle bg-white shadow-sm mx-auto d-flex align-items-center justify-content-center"
          style={{ width: '84px', height: '84px', marginTop: '-42px', border: '4px solid white' }}
        >
          {user ? (
            <div className="rounded-circle fw-bold d-flex align-items-center justify-content-center w-100 h-100 fs-3 text-white" style={{ background: '#8C533C' }}>
              {user.name?.charAt(0).toUpperCase()}
            </div>
          ) : (
            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center w-100 h-100 text-secondary fs-3">
              👤
            </div>
          )}
        </div>

        {/* User Info */}
        <h5 className="fw-bold mb-0 mt-3" style={{ color: '#2C221E' }}>{user ? user.name : 'Guest User'}</h5>
        <p className="text-muted small mb-2">{user ? user.role : 'Fashion Community Member'}</p>
        
        <span className="badge rounded-pill px-3 py-1 mb-3" style={{ backgroundColor: '#F7EFEA', color: '#8C533C', fontSize: '0.75rem' }}>
          ♦ {user ? `@${user.username}` : 'New Member'}
        </span>

        {/* Stats */}
        <div className="d-flex justify-content-between text-start small mb-2">
          <span className="text-muted d-flex align-items-center gap-2"><Eye size={16} /> Profile Views</span>
          <span className="fw-bold" style={{ color: '#8C533C' }}>128</span>
        </div>
        <div className="d-flex justify-content-between text-start small mb-3">
          <span className="text-muted d-flex align-items-center gap-2"><Users size={16} /> Connections</span>
          <span className="fw-bold" style={{ color: '#8C533C' }}>412</span>
        </div>

        <hr style={{ borderColor: '#EFECE6' }} />

        {/* Navigation */}
        <div className="d-flex flex-column gap-2 text-start small my-3">
          <Link href="/saved" className="text-decoration-none d-flex align-items-center gap-2 text-secondary py-1"><Bookmark size={16} /> Saved Items</Link>
          <Link href="/my-jobs" className="text-decoration-none d-flex align-items-center gap-2 text-secondary py-1"><Briefcase size={16} /> My Job Applications</Link>
          <Link href="/messages" className="text-decoration-none d-flex align-items-center gap-2 text-secondary py-1"><MessageSquare size={16} /> Message Center</Link>
          <Link href="/settings" className="text-decoration-none d-flex align-items-center gap-2 text-secondary py-1"><Settings size={16} /> Settings</Link>
        </div>

        {/* Profile Completion Card */}
        <div className="p-3 rounded-3 text-start" style={{ backgroundColor: '#FAF8F5' }}>
          <button className="btn w-100 text-white rounded-3 fw-bold py-2 mb-2" style={{ backgroundColor: '#8C533C' }}>
            Complete Your Profile
          </button>
          <div className="d-flex justify-content-between align-items-center text-muted" style={{ fontSize: '0.75rem' }}>
            <span>80% completed</span>
          </div>
          <div className="progress mt-1" style={{ height: '6px', backgroundColor: '#EFECE6' }}>
            <div className="progress-bar rounded-pill" style={{ width: '80%', backgroundColor: '#8C533C' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}