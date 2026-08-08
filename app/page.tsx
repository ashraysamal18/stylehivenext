'use client';
import React from 'react';
import SidebarLeft from '@/components/SidebarLeft';
import Feed from '@/components/Feed';
import SidebarRight from '@/components/SidebarRight';

export default function HomePage() {
  return (
    <div className="container-fluid px-3 px-md-5 py-4">
      <div className="row g-4">
        {/* Left Column */}
        <div className="col-12 col-md-3">
          <SidebarLeft />
        </div>

        {/* Center Column - Single Feed Component */}
        <div className="col-12 col-md-6">
          <Feed />
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-3">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}