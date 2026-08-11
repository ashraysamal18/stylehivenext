'use client';
import React from 'react';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';

export default function FeedPage() {
  return (
    <div className="min-vh-100" style={{ backgroundColor: '#F4F5F7' }}>
      <div className="container-fluid px-3 px-lg-5 py-4">
        <div className="row g-4">
          
          {/* Left Navigation & Profile Card */}
          <div className="col-lg-3">
            <SidebarLeft />
          </div>

          {/* Main Feed Content */}
          <div className="col-12 col-lg-6">
            <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden mb-4 p-3">
              <div className="d-flex align-items-center gap-3">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-sm" 
                  style={{ width: '45px', height: '45px', backgroundColor: '#8C533C' }}
                >
                  E
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-0">Elena Rostova</h6>
                  <small className="text-muted">Senior Runway Stylist • 2 hours ago</small>
                </div>
              </div>
              <p className="text-dark mt-3 mb-2">
                Backstage preview from our Fall/Winter collection prep in Paris! Curation is almost complete for the 28 runway looks.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" 
                alt="Post Preview" 
                className="w-100 rounded-3 mt-2 object-fit-cover" 
                style={{ maxHeight: '480px' }} 
              />
            </div>
          </div>

          {/* Right Trending & Events Sidebar */}
          <div className="col-lg-3">
            <SidebarRight />
          </div>

        </div>
      </div>
    </div>
  );
}