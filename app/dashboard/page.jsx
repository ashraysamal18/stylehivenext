'use client';
import React, { useState } from 'react';
import { 
  Sparkles, Eye, TrendingUp, Briefcase, Bookmark, Users, 
  Calendar, ArrowUpRight, CheckCircle2, ChevronRight, BarChart3, Clock, MapPin, IndianRupee
} from 'lucide-react';

export default function CreativeDashboardPage() {
  const [userName, setUserName] = useState('Ashray');

  // Overview Stats
  const profileStrength = 82; // percentage
  const stats = {
    portfolioViews: { count: '1,284', growth: '+18%' },
    profileVisits: { count: '342', growth: '+12%' },
    applications: 8,
    savedJobs: 14
  };

  // Recommended Jobs Data
  const recommendedJobs = [
    {
      id: 'job-1',
      title: 'Senior Fashion Stylist',
      company: 'Vogue Studios',
      location: 'Mumbai, India',
      rate: '₹1,20,000 / month',
      type: 'Full-time',
      postedAgo: '2h ago'
    },
    {
      id: 'job-2',
      title: 'Campaign Photographer',
      company: 'Aura Luxury',
      location: 'Delhi NCR',
      rate: '₹45,000 / day',
      type: 'Contract',
      postedAgo: '5h ago'
    }
  ];

  // Profile Visitors Data
  const profileVisitors = [
    {
      name: 'Marcello V.',
      role: 'Art Director at Maison Luxe',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      time: '1 hour ago'
    },
    {
      name: 'Priya Sharma',
      role: 'Lead Recruiter at Condé Nast',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
      time: '3 hours ago'
    },
    {
      name: 'Rohan Mehta',
      role: 'Couture Designer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
      time: 'Yesterday'
    }
  ];

  // Portfolio Performance Data
  const topProjects = [
    {
      title: 'Monochrome Silk & Shadows',
      views: '1,240',
      likes: '342',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400'
    },
    {
      title: 'Avant-Garde Glass Skin',
      views: '890',
      likes: '215',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400'
    }
  ];

  // Upcoming Events Schedule
  const upcomingEvents = [
    {
      title: 'Paris Fashion Week Haute Couture Shoot',
      date: 'Aug 28, 2026',
      time: '10:00 AM IST',
      type: 'Shoot Calltime',
      badgeColor: 'bg-primary'
    },
    {
      title: 'StyleHive Portfolio Review & Networking',
      date: 'Sep 02, 2026',
      time: '04:00 PM IST',
      type: 'Live Masterclass',
      badgeColor: 'bg-success'
    }
  ];

  return (
    <div className="min-vh-100 py-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container px-3 px-lg-5">
        
        {/* TOP WELCOME BAR & PROFILE STRENGTH */}
        <div className="bg-white rounded-4 p-4 shadow-sm border mb-4">
          <div className="row align-items-center g-3">
            
            {/* Greeting */}
            <div className="col-lg-6">
              <span className="text-muted extra-small fw-bold text-uppercase d-block mb-1">Creative Portal</span>
              <h2 className="fw-bold text-dark mb-1">Good morning, {userName} 👋</h2>
              <p className="text-muted small mb-0">Here is your daily creative activity and portfolio insights overview.</p>
            </div>

            {/* Profile Strength Progress Bar */}
            <div className="col-lg-6">
              <div className="card bg-light border-0 rounded-4 p-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-bold text-dark small d-flex align-items-center gap-1">
                    <Sparkles size={16} style={{ color: '#8C533C' }} /> Profile Strength
                  </span>
                  <span className="fw-bold text-dark small">{profileStrength}%</span>
                </div>
                
                {/* Visual Progress Track */}
                <div className="progress rounded-pill mb-2" style={{ height: '10px', backgroundColor: '#E9ECEF' }}>
                  <div 
                    className="progress-bar rounded-pill transition" 
                    role="progressbar" 
                    style={{ width: `${profileStrength}%`, backgroundColor: '#8C533C' }}
                    aria-valuenow={profileStrength} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>

                <div className="d-flex justify-content-between align-items-center extra-small text-muted">
                  <span>Add client reviews to reach 100%</span>
                  <a href="#" className="fw-bold text-decoration-none" style={{ color: '#8C533C' }}>Complete Profile →</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* METRICS COUNTER CARDS */}
        <div className="row g-3 mb-4">
          
          {/* Portfolio Views */}
          <div className="col-6 col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white hover-lift transition">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted extra-small fw-bold text-uppercase">Portfolio Views</span>
                <span className="badge bg-success bg-opacity-10 text-success extra-small fw-bold">{stats.portfolioViews.growth}</span>
              </div>
              <h3 className="fw-bold text-dark mb-0">{stats.portfolioViews.count}</h3>
            </div>
          </div>

          {/* Profile Visits */}
          <div className="col-6 col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white hover-lift transition">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted extra-small fw-bold text-uppercase">Profile Visits</span>
                <span className="badge bg-success bg-opacity-10 text-success extra-small fw-bold">{stats.profileVisits.growth}</span>
              </div>
              <h3 className="fw-bold text-dark mb-0">{stats.profileVisits.count}</h3>
            </div>
          </div>

          {/* Applications */}
          <div className="col-6 col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white hover-lift transition">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted extra-small fw-bold text-uppercase">Applications</span>
                <Briefcase size={16} className="text-muted" />
              </div>
              <h3 className="fw-bold text-dark mb-0">{stats.applications}</h3>
            </div>
          </div>

          {/* Saved Jobs */}
          <div className="col-6 col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white hover-lift transition">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted extra-small fw-bold text-uppercase">Saved Jobs</span>
                <Bookmark size={16} className="text-muted" />
              </div>
              <h3 className="fw-bold text-dark mb-0">{stats.savedJobs}</h3>
            </div>
          </div>

        </div>

        {/* DASHBOARD GRID CONTENT */}
        <div className="row g-4">
          
          {/* LEFT MAIN COLUMN */}
          <div className="col-lg-8">
            
            {/* 1. RECOMMENDED JOBS */}
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                  <Briefcase size={18} style={{ color: '#8C533C' }} /> Recommended Jobs
                </h5>
                <a href="/jobs" className="text-decoration-none extra-small fw-bold" style={{ color: '#8C533C' }}>Explore All Jobs →</a>
              </div>

              <div className="d-flex flex-column gap-3">
                {recommendedJobs.map((job) => (
                  <div key={job.id} className="p-3 bg-light rounded-4 d-flex justify-content-between align-items-center gap-2">
                    <div>
                      <h6 className="fw-bold text-dark mb-1">{job.title}</h6>
                      <div className="d-flex align-items-center gap-2 text-muted extra-small">
                        <span>{job.company}</span>
                        <span>•</span>
                        <span><MapPin size={12} /> {job.location}</span>
                        <span>•</span>
                        <span className="fw-bold text-dark">{job.rate}</span>
                      </div>
                    </div>
                    <a href="/jobs" className="btn text-white btn-sm rounded-pill fw-bold px-3 shadow-sm text-nowrap" style={{ backgroundColor: '#8C533C' }}>
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. PORTFOLIO PERFORMANCE */}
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                  <BarChart3 size={18} style={{ color: '#8C533C' }} /> Portfolio Performance
                </h5>
                <a href="/discover" className="text-decoration-none extra-small fw-bold" style={{ color: '#8C533C' }}>View Insights →</a>
              </div>

              <div className="row g-3">
                {topProjects.map((proj, idx) => (
                  <div key={idx} className="col-12 col-md-6">
                    <div className="d-flex gap-3 align-items-center p-2 rounded-3 border">
                      <img src={proj.image} alt={proj.title} className="rounded-3 object-fit-cover" style={{ width: '60px', height: '60px' }} />
                      <div className="min-w-0 flex-grow-1">
                        <h6 className="fw-bold text-dark mb-1 extra-small text-truncate">{proj.title}</h6>
                        <span className="text-muted extra-small d-block">{proj.views} Views • {proj.likes} Likes</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR COLUMN */}
          <div className="col-lg-4">
            
            {/* 3. PROFILE VISITORS */}
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                  <Users size={16} style={{ color: '#8C533C' }} /> Recent Profile Visitors
                </h6>
              </div>

              <div className="d-flex flex-column gap-3">
                {profileVisitors.map((visitor, idx) => (
                  <div key={idx} className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2 align-items-center min-w-0">
                      <img src={visitor.avatar} alt={visitor.name} className="rounded-circle object-fit-cover border" style={{ width: '36px', height: '36px' }} />
                      <div className="min-w-0">
                        <h6 className="fw-bold text-dark mb-0 extra-small text-truncate">{visitor.name}</h6>
                        <span className="text-muted extra-small d-block text-truncate">{visitor.role}</span>
                      </div>
                    </div>
                    <span className="text-muted extra-small text-nowrap ms-2">{visitor.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. UPCOMING EVENTS */}
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                  <Calendar size={16} style={{ color: '#8C533C' }} /> Upcoming Events
                </h6>
              </div>

              <div className="d-flex flex-column gap-3">
                {upcomingEvents.map((evt, idx) => (
                  <div key={idx} className="p-3 bg-light rounded-3 border-start border-4" style={{ borderColor: '#8C533C' }}>
                    <span className="badge bg-dark extra-small mb-1">{evt.type}</span>
                    <h6 className="fw-bold text-dark mb-1 extra-small">{evt.title}</h6>
                    <span className="text-muted extra-small d-block"><Clock size={12} /> {evt.date} • {evt.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}