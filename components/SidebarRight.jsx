'use client';
import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar } from 'lucide-react';

export default function RightSidebar() {
  return (
    <div className="d-none d-lg-block">
      {/* Fashion News */}
      <div className="card border-0 shadow-sm rounded-4 p-3 bg-white mb-3">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h6 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
            <Sparkles size={16} style={{ color: '#8C533C' }} /> Fashion News
          </h6>
        </div>
        <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
          <li className="hover-bg-light p-1 rounded">
            <Link href="#" className="text-decoration-none">
              <span className="fw-bold text-dark d-block small mb-0">• Paris Fashion Week Dates Set</span>
              <small className="text-muted" style={{ fontSize: '0.72rem' }}>2h ago • 1,420 readers</small>
            </Link>
          </li>
          <li className="hover-bg-light p-1 rounded">
            <Link href="#" className="text-decoration-none">
              <span className="fw-bold text-dark d-block small mb-0">• Sustainable Textiles Rising Demand</span>
              <small className="text-muted" style={{ fontSize: '0.72rem' }}>5h ago • 890 readers</small>
            </Link>
          </li>
        </ul>
      </div>

      {/* Suggested Designers */}
      <div className="card border-0 shadow-sm rounded-4 p-3 bg-white mb-3">
        <h6 className="fw-bold text-dark mb-3 small text-uppercase tracking-wider">Suggested Designers</h6>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <div className="rounded-circle bg-dark text-white fw-bold d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', fontSize: '0.85rem' }}>M</div>
              <div>
                <span className="fw-bold text-dark d-block small leading-tight">Marcello V.</span>
                <small className="text-muted" style={{ fontSize: '0.72rem' }}>Creative Director</small>
              </div>
            </div>
            <button className="btn btn-sm btn-outline-dark rounded-pill px-2 py-1" style={{ fontSize: '0.75rem' }}>+ Follow</button>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
        <div className="d-flex align-items-center gap-2 mb-2">
          <Calendar size={16} style={{ color: '#8C533C' }} />
          <h6 className="fw-bold text-dark mb-0 small">Upcoming Events</h6>
        </div>
        <div className="p-2 bg-light rounded-3 mb-2">
          <strong className="d-block small text-dark">Milan Couture Summit</strong>
          <small className="text-muted d-block" style={{ fontSize: '0.72rem' }}>Sep 14 • Milan, Italy</small>
        </div>
      </div>
    </div>
  );
}