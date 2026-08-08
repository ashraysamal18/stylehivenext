'use client';
import React from 'react';
import Link from 'next/link';
import { Send, Globe, Share2, MessageCircle, Tv } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-top mt-5 pt-4" style={{ borderColor: '#EFECE6' }}>
      {/* Main Footer Content */}
      <div className="container-fluid px-4 px-md-5 pb-4">
        <div className="row g-4 justify-content-between align-items-start">
          
          {/* Brand & Description */}
          <div className="col-12 col-md-3">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span 
                className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" 
                style={{ width: '32px', height: '32px', backgroundColor: '#8C533C', fontSize: '0.85rem' }}
              >
                SH
              </span>
              <span className="fs-5 fw-bold" style={{ color: '#2C221E', fontFamily: 'Georgia, serif' }}>
                StyleHive
              </span>
            </div>
            <p className="text-muted small mb-0" style={{ fontSize: '0.8rem', lineHeight: '1.5', maxWidth: '240px' }}>
              The premier professional network for the global fashion community.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="col-12 col-md-5">
            <div className="row g-3">
              {/* Platform */}
              <div className="col-4">
                <h6 className="fw-bold mb-2 text-dark" style={{ fontSize: '0.85rem' }}>Platform</h6>
                <div className="d-flex flex-column gap-1" style={{ fontSize: '0.8rem' }}>
                  <Link href="/about" className="text-decoration-none text-muted">About Us</Link>
                  <Link href="/careers" className="text-decoration-none text-muted">Careers</Link>
                  <Link href="/press" className="text-decoration-none text-muted">Press</Link>
                </div>
              </div>

              {/* Resources */}
              <div className="col-4">
                <h6 className="fw-bold mb-2 text-dark" style={{ fontSize: '0.85rem' }}>Resources</h6>
                <div className="d-flex flex-column gap-1" style={{ fontSize: '0.8rem' }}>
                  <Link href="/help" className="text-decoration-none text-muted">Help Center</Link>
                  <Link href="/guidelines" className="text-decoration-none text-muted">Community Guidelines</Link>
                  <Link href="/safety" className="text-decoration-none text-muted">Safety Center</Link>
                </div>
              </div>

              {/* Legal */}
              <div className="col-4">
                <h6 className="fw-bold mb-2 text-dark" style={{ fontSize: '0.85rem' }}>Legal</h6>
                <div className="d-flex flex-column gap-1" style={{ fontSize: '0.8rem' }}>
                  <Link href="/privacy" className="text-decoration-none text-muted">Privacy Policy</Link>
                  <Link href="/terms" className="text-decoration-none text-muted">Terms of Service</Link>
                  <Link href="/cookies" className="text-decoration-none text-muted">Cookie Policy</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Newsletter */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
              
              {/* Stay Connected */}
              <div>
                <h6 className="fw-bold mb-2 text-dark" style={{ fontSize: '0.85rem' }}>Stay Connected</h6>
                <div className="d-flex align-items-center gap-1">
                  <a href="#" className="btn btn-sm rounded-circle p-1 text-white d-flex align-items-center justify-content-center" style={{ backgroundColor: '#8C533C', width: '28px', height: '28px' }}>
                    <Globe size={14} />
                  </a>
                  <a href="#" className="btn btn-sm rounded-circle p-1 text-white d-flex align-items-center justify-content-center" style={{ backgroundColor: '#8C533C', width: '28px', height: '28px' }}>
                    <Share2 size={14} />
                  </a>
                  <a href="#" className="btn btn-sm rounded-circle p-1 text-white d-flex align-items-center justify-content-center" style={{ backgroundColor: '#8C533C', width: '28px', height: '28px' }}>
                    <MessageCircle size={14} />
                  </a>
                  <a href="#" className="btn btn-sm rounded-circle p-1 text-white d-flex align-items-center justify-content-center" style={{ backgroundColor: '#8C533C', width: '28px', height: '28px' }}>
                    <Tv size={14} />
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="flex-grow-1" style={{ maxWidth: '260px' }}>
                <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '0.85rem' }}>Subscribe to our newsletter</h6>
                <p className="text-muted mb-2" style={{ fontSize: '0.75rem' }}>Get the latest fashion insights & updates</p>
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control rounded-start-pill border-0 bg-light px-3" 
                    placeholder="Enter your email" 
                    style={{ fontSize: '0.75rem', height: '36px' }}
                  />
                  <button 
                    className="btn text-white rounded-end-pill px-3 d-flex align-items-center justify-content-center" 
                    style={{ backgroundColor: '#8C533C', height: '36px' }}
                  >
                    <Send size={14} />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="py-2 px-4 px-md-5 text-white d-flex justify-content-between align-items-center flex-wrap" 
        style={{ backgroundColor: '#42281D', fontSize: '0.75rem' }}
      >
        <span>© 2026 StyleHive Inc. All rights reserved.</span>
        <span>Made with ♡ for designers & creators</span>
      </div>
    </footer>
  );
}