'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="row g-4 sticky-row">
      
      {/* 1. LEFT SIDEBAR (FIXED) */}
      <div className="col-12 col-lg-3 fixed-sidebar">
        <div className="d-flex flex-column gap-3">
          
          {/* User Profile Card */}
          <div className="card border-0 shadow-sm overflow-hidden">
            <div style={{ height: '60px', backgroundColor: '#8C533C' }} />
            <div className="card-body text-center pt-0 position-relative">
              <div 
                className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold mx-auto border border-3 border-white shadow-sm"
                style={{ width: '64px', height: '64px', backgroundColor: '#8C533C', marginTop: '-32px' }}
              >
                A
              </div>
              <h6 className="fw-bold mb-0 mt-2">ashrayas709</h6>
              <p className="text-muted extra-small mb-1">Fashion Professional</p>
              <p className="text-muted extra-small mb-3">📍 Paris, France</p>
              
              <hr className="my-2" />
              
              <div className="d-flex justify-content-between align-items-center extra-small py-1">
                <span className="text-muted">Connections</span>
                <span className="fw-bold text-dark">412</span>
              </div>
              <div className="d-flex justify-content-between align-items-center extra-small py-1">
                <span className="text-muted">Portfolio Views</span>
                <span className="fw-bold text-dark">1.2k</span>
              </div>
            </div>
          </div>

          {/* Manage Network Navigation Card */}
          <div className="card border-0 shadow-sm p-3">
            <h6 className="fw-bold extra-small text-uppercase text-muted mb-3">Manage Network</h6>
            <div className="d-flex flex-column gap-2 extra-small fw-semibold">
              <Link href="/portfolio" className="text-dark d-flex align-items-center justify-content-between py-1">
                <span>📁 My Portfolio</span>
                <span className="text-muted">›</span>
              </Link>
              <Link href="/saved" className="text-dark d-flex align-items-center justify-content-between py-1">
                <span>🔖 Saved Items</span>
                <span className="text-muted">›</span>
              </Link>
              <Link href="/applied-jobs" className="text-dark d-flex align-items-center justify-content-between py-1">
                <span>💼 Applied Jobs</span>
                <span className="text-muted">›</span>
              </Link>
              <Link href="/network" className="text-dark d-flex align-items-center justify-content-between py-1">
                <span>👥 My Network</span>
                <span className="text-muted">›</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* 2. CENTER FEED (MAIN SCROLLABLE CONTENT) */}
      <div className="col-12 col-lg-6">
        <div className="d-flex flex-column gap-4">
          
          {/* Post Card 1 */}
          <div className="card border-0 shadow-sm p-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div 
                className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold"
                style={{ width: '40px', height: '40px', backgroundColor: '#8C533C' }}
              >
                E
              </div>
              <div>
                <h6 className="fw-bold mb-0 fs-6">Elena Rostova</h6>
                <p className="text-muted extra-small mb-0">Senior Runway Stylist • 2 hours ago</p>
              </div>
            </div>

            <p className="card-text small mb-3">
              Backstage preview from our Fall/Winter collection prep in Paris! Curation is almost complete for the 28 runway looks.
            </p>

            <div className="rounded overflow-hidden mb-3">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80" 
                alt="Runway Look" 
                className="img-fluid w-100"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </div>

            <div className="d-flex justify-content-between border-top pt-2 extra-small text-muted fw-semibold">
              <button className="btn btn-link text-muted text-decoration-none p-0 extra-small">❤️ Like</button>
              <button className="btn btn-link text-muted text-decoration-none p-0 extra-small">💬 Comment</button>
              <button className="btn btn-link text-muted text-decoration-none p-0 extra-small">🔁 Share</button>
            </div>
          </div>

          {/* Post Card 2 */}
          <div className="card border-0 shadow-sm p-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div 
                className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold"
                style={{ width: '40px', height: '40px', backgroundColor: '#333' }}
              >
                M
              </div>
              <div>
                <h6 className="fw-bold mb-0 fs-6">Marcello V.</h6>
                <p className="text-muted extra-small mb-0">Creative Director • 5 hours ago</p>
              </div>
            </div>

            <p className="card-text small mb-3">
              Exploring sustainable textile options for our upcoming spring campaign. Pure organic silk blends are showing great potential.
            </p>

            <div className="d-flex justify-content-between border-top pt-2 extra-small text-muted fw-semibold">
              <button className="btn btn-link text-muted text-decoration-none p-0 extra-small">❤️ Like</button>
              <button className="btn btn-link text-muted text-decoration-none p-0 extra-small">💬 Comment</button>
              <button className="btn btn-link text-muted text-decoration-none p-0 extra-small">🔁 Share</button>
            </div>
          </div>

        </div>
      </div>

      {/* 3. RIGHT SIDEBAR (FIXED) */}
      <div className="col-12 col-lg-3 fixed-sidebar">
        <div className="d-flex flex-column gap-3">
          
          {/* Fashion News Card */}
          <div className="card border-0 shadow-sm p-3">
            <h6 className="fw-bold extra-small text-uppercase text-muted mb-2">✨ Fashion News</h6>
            <ul className="list-unstyled mb-0 extra-small">
              <li className="mb-2">
                <a href="#" className="fw-bold text-dark d-block text-truncate">Paris Fashion Week Dates Set</a>
                <span className="text-muted extra-small">2h ago • 1,420 readers</span>
              </li>
              <li>
                <a href="#" className="fw-bold text-dark d-block text-truncate">Sustainable Textiles Rising Demand</a>
                <span className="text-muted extra-small">5h ago • 890 readers</span>
              </li>
            </ul>
          </div>

          {/* Suggested Designers Card */}
          <div className="card border-0 shadow-sm p-3">
            <h6 className="fw-bold extra-small text-uppercase text-muted mb-2">Suggested Designers</h6>
            <div className="d-flex align-items-center justify-content-between py-1">
              <div className="d-flex align-items-center gap-2">
                <div 
                  className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold"
                  style={{ width: '32px', height: '32px', backgroundColor: '#333' }}
                >
                  M
                </div>
                <div>
                  <p className="fw-bold mb-0 extra-small">Marcello V.</p>
                  <p className="text-muted extra-small mb-0">Creative Director</p>
                </div>
              </div>
              <button className="btn btn-outline-dark btn-sm rounded-pill extra-small px-2 py-0">+ Follow</button>
            </div>
          </div>

          {/* Upcoming Events Card */}
          <div className="card border-0 shadow-sm p-3">
            <h6 className="fw-bold extra-small text-uppercase text-muted mb-2">📅 Upcoming Events</h6>
            <div className="bg-light p-2 rounded">
              <p className="fw-bold extra-small mb-0 text-dark">Milan Couture Summit</p>
              <p className="text-muted extra-small mb-0">Sep 14 • Milan, Italy</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}