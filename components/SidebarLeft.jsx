'use client';
import React, { useState, useEffect } from 'react';
import { User, Bookmark, Briefcase } from 'lucide-react';

export default function SidebarLeft() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('user');
      if (stored) {
        try {
          setUser(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse user from localStorage", e);
        }
      }
    }
  }, []);

  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
      <div className="bg-primary p-4 text-center text-white">
        <div 
          className="bg-white text-primary rounded-circle mx-auto d-flex align-items-center justify-content-center fw-bold fs-4 mb-2 shadow" 
          style={{ width: 64, height: 64 }}
        >
          {user?.name ? user.name.charAt(0).toUpperCase() : <User size={28} />}
        </div>
        <h6 className="fw-bold mb-0">{user?.name || 'Guest User'}</h6>
        <small className="opacity-75">{user?.role || 'Fashion Community Member'}</small>
      </div>

      <div className="p-3 d-flex flex-column gap-2 small">
        <div className="d-flex justify-content-between text-muted border-bottom pb-2">
          <span>Profile Views</span>
          <span className="fw-bold text-dark">128</span>
        </div>
        <div className="d-flex justify-content-between text-muted border-bottom pb-2">
          <span>Connections</span>
          <span className="fw-bold text-dark">412</span>
        </div>
        <div className="d-flex align-items-center gap-2 text-secondary pt-1">
          <Bookmark size={16} /> Saved Items
        </div>
        <div className="d-flex align-items-center gap-2 text-secondary">
          <Briefcase size={16} /> My Job Applications
        </div>
      </div>
    </div>
  );
}