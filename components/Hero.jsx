'use client';
import React from 'react';

export default function Hero() {
  return (
    <div 
      className="card border-0 rounded-4 overflow-hidden position-relative text-white p-4 p-md-5 d-flex justify-content-center"
      style={{
        minHeight: '260px',
        background: 'linear-gradient(90deg, #2A1A14 0%, #5E392B 45%, transparent 100%), url("https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'right center'
      }}
    >
      <div style={{ maxWidth: '440px' }} className="z-1">
        <span className="small text-uppercase tracking-wider opacity-75 d-flex align-items-center gap-1 mb-2" style={{ fontSize: '0.8rem' }}>
          ✨ Welcome to
        </span>
        <h1 className="fw-serif display-5 fw-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          StyleHive
        </h1>
        <p className="small opacity-85 mb-4" style={{ lineHeight: '1.6' }}>
          The ultimate professional network for fashion designers, stylists, models, and industry leaders.
        </p>
        <div className="d-flex gap-2">
          <button className="btn rounded-pill px-4 py-2 text-white fw-semibold btn-sm" style={{ backgroundColor: '#8C533C' }}>
            Join the Community
          </button>
          <button className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold btn-sm">
            Explore Network
          </button>
        </div>
      </div>
    </div>
  );
}