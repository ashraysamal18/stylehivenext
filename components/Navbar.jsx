'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        
        {/* 1. LEFT: LOGO & SEARCH */}
        <div style={styles.leftSection}>
          <Link href="/" style={styles.logo}>
            StyleHive
          </Link>

          <div style={styles.searchBox}>
            <svg style={styles.searchIcon} viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search talent, jobs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>

        {/* 2. CENTER: CORE NAVIGATION TABS */}
        <div style={styles.centerSection}>
          <Link href="/" style={styles.navLink}>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Feed</span>
          </Link>

          <Link href="/dashboard" style={styles.navLink}>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>Dashboard</span>
          </Link>

          <Link href="/jobs" style={styles.navLink}>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>Jobs</span>
          </Link>

          <Link href="/events" style={styles.navLink}>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Events</span>
          </Link>

          <Link href="/journal" style={styles.navLink}>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            <span>Journal</span>
          </Link>
        </div>

        {/* 3. RIGHT: NOTIFICATIONS & PROFILE */}
        <div style={styles.rightSection}>
          <Link href="/messages" style={styles.iconButton} title="Messages">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </Link>

          <Link href="/notifications" style={styles.iconButton} title="Notifications">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span style={styles.badge} />
          </Link>

          <Link href="/profile" style={styles.avatar}>
            A
          </Link>
        </div>

      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    padding: '10px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  container: {
    maxHeight: '40px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#8C533C',
    textDecoration: 'none'
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    border: '1px solid #e5e7eb',
    borderRadius: '20px',
    padding: '6px 12px',
    gap: '8px'
  },
  searchIcon: {
    color: '#6b7280'
  },
  searchInput: {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    fontSize: '13px',
    width: '140px',
    color: '#111827'
  },
  centerSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#374151',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '600'
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  iconButton: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    color: '#374151',
    textDecoration: 'none'
  },
  badge: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    width: '8px',
    height: '8px',
    backgroundColor: '#ef4444',
    borderRadius: '50%',
    border: '1.5px solid #ffffff'
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#8C533C',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '14px',
    textDecoration: 'none'
  }
};