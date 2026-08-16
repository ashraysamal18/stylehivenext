'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MapPin, Users, Eye, Bookmark, Briefcase, ChevronRight, Image as ImageIcon, UserCheck } from 'lucide-react';

export default function SidebarLeft() {
  const router = useRouter();
  const [user, setUser] = useState({
    id: 'guest',
    name: 'Guest User',
    category: 'Welcome to StyleHive',
    initial: 'G',
    connections: 0,
    portfolioViews: 0,
    location: 'Paris, France'
  });

  const formatNumber = (num) => {
    if (!num || isNaN(num)) return '0';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
  };

  const loadUserData = useCallback(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser({
          id: parsedUser.id || 'member',
          name: parsedUser.name || 'Member User',
          category: parsedUser.category || 'Fashion Professional',
          initial: (parsedUser.name || 'M').charAt(0).toUpperCase(),
          connections: parsedUser.connections ?? 412,
          portfolioViews: parsedUser.portfolioViews ?? 1240,
          location: parsedUser.location || 'Paris, France'
        });
      } catch (err) {
        console.error('Error parsing stored user:', err);
      }
    } else {
      setUser({
        id: 'guest',
        name: 'Guest User',
        category: 'Welcome to StyleHive',
        initial: 'G',
        connections: 0,
        portfolioViews: 0,
        location: 'Paris, France'
      });
    }
  }, []);

  useEffect(() => {
    loadUserData();
    window.addEventListener('auth-change', loadUserData);
    window.addEventListener('storage', loadUserData);

    return () => {
      window.removeEventListener('auth-change', loadUserData);
      window.removeEventListener('storage', loadUserData);
    };
  }, [loadUserData]);

  return (
    <div className="d-none d-lg-block">
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white mb-3">
        <div style={{ height: '65px', backgroundColor: '#8C533C' }}></div>
        <div className="p-3 pt-0 text-center position-relative">
          <button 
            onClick={() => router.push(`/profile/${user.id}`)}
            className="btn p-0 border-0 rounded-circle mx-auto d-flex align-items-center justify-content-center text-white fw-bold shadow-sm"
            style={{ 
              width: '64px', 
              height: '64px', 
              backgroundColor: '#8C533C', 
              marginTop: '-32px', 
              border: '3px solid white', 
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            {user.initial}
          </button>

          <h6 
            className="fw-bold text-dark mt-2 mb-0" 
            style={{ cursor: 'pointer' }}
            onClick={() => router.push(`/profile/${user.id}`)}
          >
            {user.name}
          </h6>
          <small className="text-muted d-block mb-1">{user.category}</small>
          
          <small className="text-secondary d-flex align-items-center justify-content-center gap-1 mb-3" style={{ fontSize: '0.75rem' }}>
            <MapPin size={12} /> {user.location}
          </small>
          
          <div className="border-top pt-2 text-start">
            <button 
              onClick={() => router.push('/network')} 
              className="btn w-100 d-flex justify-content-between align-items-center py-1 px-2 border-0 bg-transparent text-start rounded hover-bg-light"
            >
              <span className="text-muted small d-flex align-items-center gap-2">
                <Users size={14} className="text-secondary" /> Connections
              </span>
              <strong className="text-dark small">{formatNumber(user.connections)}</strong>
            </button>

            <button 
              onClick={() => router.push(`/profile/${user.id}`)} 
              className="btn w-100 d-flex justify-content-between align-items-center py-1 px-2 border-0 bg-transparent text-start rounded hover-bg-light"
            >
              <span className="text-muted small d-flex align-items-center gap-2">
                <Eye size={14} className="text-secondary" /> Portfolio Views
              </span>
              <strong className="text-dark small">{formatNumber(user.portfolioViews)}</strong>
            </button>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm rounded-4 p-3 bg-white mb-3">
        <h6 className="fw-bold text-dark mb-2 small text-uppercase tracking-wider">Manage Network</h6>
        <div className="d-flex flex-column gap-1">
          <Link href={`/profile/${user.id}`} className="text-decoration-none text-dark d-flex align-items-center justify-content-between p-2 rounded-3 hover-bg-light small">
            <span className="d-flex align-items-center gap-2">
              <ImageIcon size={16} style={{ color: '#8C533C' }} /> My Portfolio
            </span>
            <ChevronRight size={14} className="text-muted" />
          </Link>

          <Link href="/saved" className="text-decoration-none text-dark d-flex align-items-center justify-content-between p-2 rounded-3 hover-bg-light small">
            <span className="d-flex align-items-center gap-2">
              <Bookmark size={16} style={{ color: '#8C533C' }} /> Saved Items
            </span>
            <ChevronRight size={14} className="text-muted" />
          </Link>

          <Link href="/jobs" className="text-decoration-none text-dark d-flex align-items-center justify-content-between p-2 rounded-3 hover-bg-light small">
            <span className="d-flex align-items-center gap-2">
              <Briefcase size={16} style={{ color: '#8C533C' }} /> Applied Jobs
            </span>
            <ChevronRight size={14} className="text-muted" />
          </Link>

          <Link href="/network" className="text-decoration-none text-dark d-flex align-items-center justify-content-between p-2 rounded-3 hover-bg-light small">
            <span className="d-flex align-items-center gap-2">
              <UserCheck size={16} style={{ color: '#8C533C' }} /> My Network
            </span>
            <ChevronRight size={14} className="text-muted" />
          </Link>
        </div>
      </div>
    </div>
  );
}