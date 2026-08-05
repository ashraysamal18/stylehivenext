'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, Bookmark, Briefcase, Eye, Users, ShieldCheck } from 'lucide-react';

export default function SidebarLeft() {
  const [user, setUser] = useState(null);

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

    // Listen for sign-in / sign-out events from Navbar & AuthModal
    window.addEventListener('storage', checkUser);
    window.addEventListener('auth-change', checkUser);

    return () => {
      window.removeEventListener('storage', checkUser);
      window.removeEventListener('auth-change', checkUser);
    };
  }, []);

  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
      {/* Cover Header Banner */}
      <div 
        className="bg-primary opacity-75" 
        style={{ height: '64px', background: 'linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)' }}
      ></div>

      <div className="card-body pt-0 text-center position-relative">
        {/* Avatar */}
        <div 
          className="rounded-circle bg-white shadow-sm d-flex align-items-center justify-content-center mx-auto"
          style={{ width: '72px', height: '72px', marginTop: '-36px', border: '3px solid white' }}
        >
          {user ? (
            <div className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center w-100 h-100 fs-4">
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
          ) : (
            <User size={36} className="text-secondary" />
          )}
        </div>

        {/* User Details */}
        {user ? (
          <div className="mt-2">
            <h6 className="fw-bold mb-0 text-dark d-flex align-items-center justify-content-center gap-1">
              {user.name}
              <ShieldCheck size={16} className="text-primary" />
            </h6>
            <span className="text-muted small d-block mb-2">
              {user.role || 'Fashion Professional'}
            </span>
            <span className="badge bg-light text-dark border fw-normal mb-3">
              {user.email}
            </span>
          </div>
        ) : (
          <div className="mt-2 mb-3">
            <h6 className="fw-bold mb-0 text-dark">Guest User</h6>
            <span className="text-muted small d-block">Fashion Community Member</span>
          </div>
        )}

        <hr className="my-2 text-muted opacity-25" />

        {/* Stats Row */}
        <div className="d-flex justify-content-between align-items-center py-1 text-start small">
          <span className="text-muted d-flex align-items-center gap-1">
            <Eye size={14} /> Profile Views
          </span>
          <span className="fw-bold text-primary">{user ? '1,284' : '128'}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center py-1 text-start small">
          <span className="text-muted d-flex align-items-center gap-1">
            <Users size={14} /> Connections
          </span>
          <span className="fw-bold text-primary">{user ? '852' : '412'}</span>
        </div>

        <hr className="my-2 text-muted opacity-25" />

        {/* Quick Links */}
        <div className="d-flex flex-column gap-2 text-start small mt-2">
          <Link href={user ? "/saved" : "#"} className="text-decoration-none text-secondary d-flex align-items-center gap-2 hover-primary">
            <Bookmark size={15} /> Saved Items
          </Link>
          <Link href={user ? "/my-jobs" : "#"} className="text-decoration-none text-secondary d-flex align-items-center gap-2 hover-primary">
            <Briefcase size={15} /> My Job Applications
          </Link>
        </div>
      </div>
    </div>
  );
}