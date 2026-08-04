'use client';
import React from 'react';
import { TrendingUp, UserPlus } from 'lucide-react';

export default function SidebarRight() {
  return (
    <div className="d-flex flex-column gap-3">
      {/* Trending Topics */}
      <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
        <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
          <TrendingUp size={18} className="text-primary" /> Trending Fashion Topics
        </h6>
        <div className="d-flex flex-column gap-2 small">
          <div>
            <div className="fw-bold text-dark">#ParisFashionWeek2026</div>
            <span className="text-muted" style={{ fontSize: '0.75rem' }}>14.2k posts</span>
          </div>
          <div>
            <div className="fw-bold text-dark">#SustainableStyling</div>
            <span className="text-muted" style={{ fontSize: '0.75rem' }}>8.9k posts</span>
          </div>
          <div>
            <div className="fw-bold text-dark">#RunwayTrends</div>
            <span className="text-muted" style={{ fontSize: '0.75rem' }}>5.1k posts</span>
          </div>
        </div>
      </div>

      {/* Recommended Network */}
      <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
        <h6 className="fw-bold mb-3">Suggested Connections</h6>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="fw-bold text-dark small">Elena Rostova</div>
              <span className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Senior Runway Stylist</span>
            </div>
            <button className="btn btn-outline-primary btn-sm rounded-circle p-1 d-flex align-items-center justify-content-center">
              <UserPlus size={16} />
            </button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="fw-bold text-dark small">Marcus Vance</div>
              <span className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Creative Director</span>
            </div>
            <button className="btn btn-outline-primary btn-sm rounded-circle p-1 d-flex align-items-center justify-content-center">
              <UserPlus size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}