import React from 'react';
import { TrendingUp, UserPlus } from 'lucide-react';

// Static constants declared OUTSIDE component logic to avoid garbage collection churn
const TRENDING_TOPICS = [
  { tag: '#ParisFashionWeek2026', count: '14.2k posts' },
  { tag: '#SustainableStyling', count: '8.9k posts' }
];

export default function SidebarRight() {
  return (
    <div className="d-flex flex-column gap-3">
      <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
        <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
          <TrendingUp size={18} className="text-primary" /> Trending Fashion Topics
        </h6>
        <div className="d-flex flex-column gap-2 small">
          {TRENDING_TOPICS.map((item, i) => (
            <div key={i}>
              <div className="fw-bold text-dark">{item.tag}</div>
              <span className="text-muted" style={{ fontSize: '0.75rem' }}>{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
        <h6 className="fw-bold mb-3">Suggested Connections</h6>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div className="fw-bold text-dark small">Elena Rostova</div>
            <span className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Senior Runway Stylist</span>
          </div>
          <button className="btn btn-outline-primary btn-sm rounded-circle p-1 d-flex align-items-center justify-content-center">
            <UserPlus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}