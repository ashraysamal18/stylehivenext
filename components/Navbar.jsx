'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import UserSearch from './UserSearch';
import AuthModal from './AuthModal';
import { Home, Compass, Briefcase, Bell, MessageSquare, LogOut, User } from 'lucide-react';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const checkUser = () => {
      const stored = localStorage.getItem('user');
      setUser(stored ? JSON.parse(stored) : null);
    };
    checkUser();
    window.addEventListener('auth-change', checkUser);
    return () => window.removeEventListener('auth-change', checkUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('auth-change'));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-white border-bottom py-2 px-3 px-md-5" style={{ borderColor: '#EFECE6' }}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          
          {/* Logo & Search */}
          <div className="d-flex align-items-center gap-3">
            <Link href="/" className="navbar-brand d-flex align-items-center gap-2 text-decoration-none">
              <span className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-6" style={{ width: '36px', height: '36px', backgroundColor: '#8C533C' }}>
                SH
              </span>
              <span className="fw-serif fs-4 fw-bold" style={{ color: '#2C221E', fontFamily: 'Georgia, serif' }}>
                StyleHive
              </span>
            </Link>
            <UserSearch />
          </div>

          {/* Navigation Items */}
          <div className="d-flex align-items-center gap-4">
            <Link href="/" className="d-flex align-items-center gap-1 text-decoration-none fw-semibold border-bottom border-2 pb-1" style={{ color: '#8C533C', borderColor: '#8C533C' }}>
              <Home size={18} /> <span className="d-none d-md-inline small">Feed</span>
            </Link>
            <Link href="/explore" className="d-flex align-items-center gap-1 text-decoration-none text-muted small">
              <Compass size={18} /> <span className="d-none d-md-inline">Explore</span>
            </Link>
            <Link href="/jobs" className="d-flex align-items-center gap-1 text-decoration-none text-muted small">
              <Briefcase size={18} /> <span className="d-none d-md-inline">Jobs</span>
            </Link>
            <Link href="/notifications" className="d-flex align-items-center gap-1 text-decoration-none text-muted small position-relative">
              <Bell size={18} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger" style={{ fontSize: '0.6rem' }}>3</span>
              <span className="d-none d-md-inline ms-1">Notifications</span>
            </Link>
            <Link href="/messages" className="d-flex align-items-center gap-1 text-decoration-none text-muted small position-relative">
              <MessageSquare size={18} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle" style={{ backgroundColor: '#8C533C', fontSize: '0.6rem' }}>2</span>
              <span className="d-none d-md-inline ms-1">Messages</span>
            </Link>

            {/* Auth Action */}
            {user ? (
              <button onClick={handleLogout} className="btn btn-outline-secondary rounded-pill btn-sm d-flex align-items-center gap-1 ms-2">
                <LogOut size={14} /> Logout
              </button>
            ) : (
              <button onClick={() => setIsAuthOpen(true)} className="btn text-white rounded-pill btn-sm px-3 fw-semibold ms-2" style={{ backgroundColor: '#8C533C' }}>
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}