'use client';
import React from 'react';
import Link from 'next/link';
import { Flame, UserPlus, Calendar } from 'lucide-react';

export default function SidebarRight() {
  const topics = [
    { tag: '#ParisFashionWeek2026', posts: '14.2k posts', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=100&q=80' },
    { tag: '#SustainableStyling', posts: '8.9k posts', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=100&q=80' },
  ];

  const suggestions = [
    { name: 'Elena Rostova', role: 'Senior Runway Stylist', location: 'Milan, Italy', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
    { name: 'Marco Bianchi', role: 'Fashion Photographer', location: 'Paris, France', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
  ];

  return (
    <div className="d-flex flex-column gap-3">
      {/* Trending Topics */}
      <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold mb-0 d-flex align-items-center gap-2" style={{ color: '#2C221E' }}>
            <Flame size={18} className="text-danger" /> Trending Fashion Topics
          </h6>
          <Link href="/topics" className="text-decoration-none small text-muted">View all</Link>
        </div>
        <div className="d-flex flex-column gap-3">
          {topics.map((t, idx) => (
            <div key={idx} className="d-flex align-items-center gap-3">
              <img src={t.img} alt={t.tag} className="rounded-3 object-fit-cover" style={{ width: '44px', height: '44px' }} />
              <div>
                <h6 className="fw-bold mb-0 text-dark small">{t.tag}</h6>
                <span className="text-muted" style={{ fontSize: '0.75rem' }}>{t.posts}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="btn rounded-pill border w-100 mt-3 small fw-semibold text-muted py-2" style={{ backgroundColor: '#FAF8F5' }}>
          Explore All Topics
        </button>
      </div>

      {/* Suggested Connections */}
      <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold mb-0" style={{ color: '#2C221E' }}>Suggested Connections</h6>
          <Link href="/network" className="text-decoration-none small text-muted">View all</Link>
        </div>
        <div className="d-flex flex-column gap-3">
          {suggestions.map((s, idx) => (
            <div key={idx} className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <img src={s.img} alt={s.name} className="rounded-circle object-fit-cover" style={{ width: '40px', height: '40px' }} />
                <div>
                  <h6 className="fw-bold mb-0 text-dark small">{s.name}</h6>
                  <span className="text-muted d-block" style={{ fontSize: '0.7rem' }}>{s.role}</span>
                  <span className="text-muted" style={{ fontSize: '0.65rem' }}>📍 {s.location}</span>
                </div>
              </div>
              <button className="btn rounded-circle p-2 border-0 bg-light text-muted">
                <UserPlus size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold mb-0" style={{ color: '#2C221E' }}>Upcoming Events</h6>
          <Link href="/events" className="text-decoration-none small text-muted">View all</Link>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <div className="p-2 rounded-3 text-center text-white fw-bold" style={{ backgroundColor: '#FAF8F5', color: '#8C533C', width: '50px' }}>
            <span className="d-block text-uppercase small text-muted">JUN</span>
            <span className="fs-5" style={{ color: '#8C533C' }}>25</span>
          </div>
          <div>
            <h6 className="fw-bold text-dark small mb-0">Global Fashion Summit 2026</h6>
            <span className="text-muted d-block" style={{ fontSize: '0.7rem' }}>June 25–27, 2026 • New York, USA</span>
          </div>
        </div>
        <button className="btn text-white w-100 rounded-3 mt-3 fw-bold btn-sm py-2" style={{ backgroundColor: '#8C533C' }}>
          Register Now
        </button>
      </div>
    </div>
  );
}