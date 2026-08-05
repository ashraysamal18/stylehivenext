import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="card border-0 bg-primary text-white shadow-sm rounded-4 p-4 text-center">
      <div className="d-inline-flex align-items-center justify-content-center gap-2 mb-2">
        <Sparkles size={24} />
        <h4 className="fw-bold mb-0">Welcome to StyleHive</h4>
      </div>
      <p className="mb-0 opacity-90 small">
        The ultimate professional network for fashion designers, stylists, models, and industry leaders.
      </p>
    </div>
  );
}