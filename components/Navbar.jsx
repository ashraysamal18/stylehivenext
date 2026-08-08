'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Home, Compass, Briefcase, Bell, MessageSquare, User, LogOut } from 'lucide-react';
import UserSearch from './UserSearch';

// Inside your Navbar JSX layout:
<div className="d-flex align-items-center gap-3">
  <Link href="/" className="navbar-brand fw-bold text-primary fs-4 mb-0">StyleHive</Link>
  <UserSearch />
</div>
const AuthModal = dynamic(() => import('./AuthModal'), { ssr: false });

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Sync user state on initial load and handle auth updates
  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    checkUser();

    // Listen for custom login/logout events across components
    window.addEventListener('storage', checkUser);
    window.addEventListener('auth-change', checkUser);

    return () => {
      window.removeEventListener('storage', checkUser);
      window.removeEventListener('auth-change', checkUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.dispatchEvent(new Event('auth-change'));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-2 px-lg-5">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand fw-bold text-primary fs-4">StyleHive</Link>
          
          <div className="d-flex align-items-center gap-4">
            <Link href="/" className="text-secondary text-decoration-none d-flex align-items-center gap-1"><Home size={20} /> <span className="d-none d-md-inline">Feed</span></Link>
            <Link href="/explore" className="text-secondary text-decoration-none d-flex align-items-center gap-1"><Compass size={20} /> <span className="d-none d-md-inline">Explore</span></Link>
            <Link href="/jobs" className="text-secondary text-decoration-none d-flex align-items-center gap-1"><Briefcase size={20} /> <span className="d-none d-md-inline">Jobs</span></Link>
            <Link href="/notifications" className="text-secondary text-decoration-none d-flex align-items-center gap-1"><Bell size={20} /> <span className="d-none d-md-inline">Notifications</span></Link>
            <Link href="/messages" className="text-secondary text-decoration-none d-flex align-items-center gap-1"><MessageSquare size={20} /> <span className="d-none d-md-inline">Messages</span></Link>

            {user ? (
              <div className="d-flex align-items-center gap-3">
                <Link href="/profile" className="text-dark fw-bold text-decoration-none d-flex align-items-center gap-1">
                  <User size={18} /> {user.name}
                </Link>
                <button onClick={handleLogout} className="btn btn-outline-danger btn-sm rounded-pill d-flex align-items-center gap-1">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <button onClick={() => setShowAuthModal(true)} className="btn btn-primary rounded-pill px-4 fw-semibold btn-sm">
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {showAuthModal && <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />}
    </>
  );
}