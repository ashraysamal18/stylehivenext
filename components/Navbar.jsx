'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm py-2" style={{ zIndex: 1050 }}>
      <div className="container-fluid px-3 px-md-4 px-xl-5">
        
        {/* Brand Logo & Search Input */}
        <div className="d-flex align-items-center gap-3">
          <Link href="/" className="navbar-brand fw-bold text-dark fs-4 m-0 d-flex align-items-center gap-1">
            <span style={{ color: '#8C533C' }}>Style</span>Hive
          </Link>

          {/* Desktop Search Bar */}
          <div className="position-relative d-none d-sm-block" style={{ width: '220px' }}>
            <svg 
              className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" 
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              className="form-control form-control-sm rounded-pill ps-5 bg-light border-0" 
              placeholder="Search talent, jobs..." 
              style={{ fontSize: '0.85rem' }}
            />
          </div>
        </div>

        {/* Right Action Icons & Mobile Toggle */}
        <div className="d-flex align-items-center gap-2 order-lg-last">
          {/* Messages */}
          <button className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center text-secondary border-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          
          {/* Notifications */}
          <button className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center text-secondary border-0 position-relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle" />
          </button>

          {/* Avatar */}
          <div 
            className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold ms-1"
            style={{ width: '36px', height: '36px', backgroundColor: '#8C533C', cursor: 'pointer' }}
          >
            A
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="btn btn-light d-lg-none rounded-circle p-2 ms-1 border-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Collapsible Mobile Menu */}
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show mt-3 border-top pt-3' : ''}`}>
          {/* Mobile Search Input */}
          <div className="position-relative d-block d-sm-none mb-3">
            <svg 
              className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" 
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              className="form-control form-control-sm rounded-pill ps-5 bg-light border-0" 
              placeholder="Search talent, jobs..." 
            />
          </div>

          <ul className="navbar-nav mx-auto gap-1 gap-lg-3 text-secondary extra-small fw-semibold">
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark d-flex align-items-center gap-2 py-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span>Feed</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard" className="nav-link text-secondary d-flex align-items-center gap-2 py-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/jobs" className="nav-link text-secondary d-flex align-items-center gap-2 py-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <span>Jobs</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/events" className="nav-link text-secondary d-flex align-items-center gap-2 py-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>Events</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/journal" className="nav-link text-secondary d-flex align-items-center gap-2 py-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <span>Journal</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}