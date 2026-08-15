'use client';
import React, { useState } from 'react';
import { 
  Briefcase, Calendar, ChevronRight, Clock, CheckCircle2, 
  XCircle, MessageSquare, ExternalLink, MapPin, Building2, Eye, Sparkles
} from 'lucide-react';

export default function ApplicationTracker() {
  // Application pipeline status stages
  const STAGES = ['Applied', 'Under Review', 'Shortlisted', 'Interview', 'Offer'];

  // Sample Applications Data with full status history
  const [applications, setApplications] = useState([
    {
      id: 'app-101',
      title: 'Lead Fashion Stylist',
      company: 'Vogue Studios',
      logo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100',
      location: 'Mumbai, India',
      appliedDate: 'Aug 12, 2026',
      status: 'Under Review',
      stageIndex: 1, // 0: Applied, 1: Under Review, 2: Shortlisted, 3: Interview, 4: Offer
      nextStep: 'Portfolio evaluation by Senior Art Director',
      lastUpdated: 'Yesterday',
      payRate: '$1,200 / Day',
      notes: 'Submitted portfolio featuring AW26 Paris Editorial.'
    },
    {
      id: 'app-102',
      title: 'Creative Runway Director',
      company: 'Lakmé Couture Week',
      logo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
      location: 'Delhi, India',
      appliedDate: 'Aug 05, 2026',
      status: 'Interview',
      stageIndex: 3,
      nextStep: 'Technical Interview scheduled for Aug 18 at 3:00 PM IST',
      lastUpdated: '2 hours ago',
      payRate: '$2,500 / Project',
      notes: 'Initial screening passed. Met with Head of Casting.'
    },
    {
      id: 'app-103',
      title: 'Senior Fashion Photographer',
      company: 'Maison Lumière',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100',
      location: 'Remote / Paris',
      appliedDate: 'Jul 28, 2026',
      status: 'Offer',
      stageIndex: 4,
      nextStep: 'Review contract and offer letter before Aug 20',
      lastUpdated: 'Aug 10',
      payRate: '$80,000 / Year',
      notes: 'Offer letter received via email.'
    },
    {
      id: 'app-104',
      title: 'Backstage Makeup Lead',
      company: 'Studio Valentino',
      logo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100',
      location: 'Milan, Italy',
      appliedDate: 'Jul 15, 2026',
      status: 'Applied',
      stageIndex: 0,
      nextStep: 'Awaiting recruiter review',
      lastUpdated: 'Jul 15',
      payRate: '$600 / Day',
      notes: 'Applied with bridal & high-fashion portfolio.'
    }
  ]);

  const [selectedFilter, setSelectedFilter] = useState('All');

  // Badge Color Mapping
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Applied': return 'bg-secondary text-white';
      case 'Under Review': return 'bg-info text-dark';
      case 'Shortlisted': return 'bg-primary text-white';
      case 'Interview': return 'bg-warning text-dark';
      case 'Offer': return 'bg-success text-white';
      default: return 'bg-light text-dark';
    }
  };

  const filteredApplications = selectedFilter === 'All'
    ? applications
    : applications.filter(app => app.status === selectedFilter);

  return (
    <div className="container py-2">
      
      {/* HEADER & OVERVIEW CARDS */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div>
          <div className="d-flex align-items-center gap-2 mb-1">
            <Sparkles size={18} style={{ color: '#8C533C' }} />
            <span className="badge rounded-pill bg-opacity-10 text-uppercase fw-bold px-3 py-1" style={{ backgroundColor: '#8C533C1A', color: '#8C533C' }}>
              Career Hub
            </span>
          </div>
          <h3 className="fw-bold text-dark mb-0">Application Tracker</h3>
          <p className="text-muted small mb-0">Track real-time candidate progression across active creative applications.</p>
        </div>

        {/* PIPELINE SUMMARY STATS */}
        <div className="d-flex gap-2">
          <div className="bg-white border rounded-4 px-3 py-2 text-center shadow-sm">
            <span className="d-block text-muted extra-small fw-bold text-uppercase">Active</span>
            <span className="fw-bold text-dark h5 mb-0">{applications.filter(a => a.status !== 'Offer').length}</span>
          </div>
          <div className="bg-white border rounded-4 px-3 py-2 text-center shadow-sm">
            <span className="d-block text-muted extra-small fw-bold text-uppercase">Interviews</span>
            <span className="fw-bold text-warning h5 mb-0">{applications.filter(a => a.status === 'Interview').length}</span>
          </div>
          <div className="bg-white border rounded-4 px-3 py-2 text-center shadow-sm">
            <span className="d-block text-muted extra-small fw-bold text-uppercase">Offers</span>
            <span className="fw-bold text-success h5 mb-0">{applications.filter(a => a.status === 'Offer').length}</span>
          </div>
        </div>
      </div>

      {/* STAGE PIPELINE VISUALIZER (DESKTOP) */}
      <div className="card border-0 shadow-sm rounded-4 p-3 bg-white mb-4 d-none d-md-block">
        <span className="text-muted extra-small fw-bold text-uppercase mb-3 d-block">Career Pipeline Workflow</span>
        <div className="d-flex align-items-center justify-content-between position-relative px-2">
          
          {STAGES.map((stage, idx) => (
            <React.Fragment key={stage}>
              <div className="d-flex flex-column align-items-center z-1">
                <div 
                  className={`rounded-circle d-flex align-items-center justify-content-center fw-bold transition mb-2 ${
                    idx === 0 ? 'bg-dark text-white' : 'bg-light text-secondary border'
                  }`}
                  style={{ width: '38px', height: '38px', fontSize: '0.85rem' }}
                >
                  {idx + 1}
                </div>
                <span className="small fw-bold text-dark">{stage}</span>
              </div>

              {idx < STAGES.length - 1 && (
                <div className="flex-grow-1 border-top border-2 mx-2 mb-4" style={{ borderColor: '#E9ECEF' }}></div>
              )}
            </React.Fragment>
          ))}

        </div>
      </div>

      {/* FILTER TABS */}
      <div className="d-flex gap-2 overflow-x-auto pb-3 mb-3 scrollbar-none">
        {['All', ...STAGES].map(filter => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`btn btn-sm rounded-pill px-3 py-1 fw-bold text-nowrap transition ${
              selectedFilter === filter 
                ? 'text-white shadow-sm' 
                : 'btn-white bg-white text-dark border'
            }`}
            style={selectedFilter === filter ? { backgroundColor: '#8C533C' } : {}}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* APPLICATION CARDS LIST */}
      <div className="row g-3">
        {filteredApplications.length === 0 ? (
          <div className="col-12 text-center py-5 bg-white rounded-4 border">
            <p className="text-muted mb-0">No applications currently in this stage.</p>
          </div>
        ) : (
          filteredApplications.map((app) => (
            <div key={app.id} className="col-12">
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white hover-lift transition">
                <div className="row g-3 align-items-center">
                  
                  {/* Company Logo & Basic Details */}
                  <div className="col-md-4">
                    <div className="d-flex align-items-center gap-3">
                      <img 
                        src={app.logo} 
                        alt={app.company} 
                        className="rounded-3 object-fit-cover border" 
                        style={{ width: '56px', height: '56px' }} 
                      />
                      <div>
                        <h6 className="fw-bold text-dark mb-1">{app.title}</h6>
                        <div className="d-flex align-items-center gap-2 text-muted small">
                          <span className="fw-semibold text-dark">{app.company}</span>
                          <span>•</span>
                          <span className="d-flex align-items-center gap-1"><MapPin size={12} /> {app.location}</span>
                        </div>
                        <span className="text-muted extra-small d-block mt-1">Applied {app.appliedDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progressive Pipeline Status Bar */}
                  <div className="col-md-5">
                    <div className="mb-2 d-flex justify-content-between align-items-center">
                      <span className={`badge rounded-pill px-3 py-1 fw-bold ${getStatusBadgeClass(app.status)}`}>
                        ● {app.status}
                      </span>
                      <span className="text-muted extra-small">Updated {app.lastUpdated}</span>
                    </div>

                    {/* Stage Progress Bar */}
                    <div className="progress rounded-pill bg-light" style={{ height: '8px' }}>
                      <div 
                        className={`progress-bar rounded-pill ${app.status === 'Offer' ? 'bg-success' : 'bg-dark'}`}
                        role="progressbar" 
                        style={{ width: `${((app.stageIndex + 1) / STAGES.length) * 100}%` }}
                      ></div>
                    </div>

                    <div className="mt-2 bg-light p-2 rounded-3 border-0">
                      <span className="text-secondary extra-small d-block text-truncate">
                        <strong>Next Step:</strong> {app.nextStep}
                      </span>
                    </div>
                  </div>

                  {/* Action Controls */}
                  <div className="col-md-3 text-md-end d-flex flex-column gap-2 justify-content-center">
                    <span className="fw-bold text-dark small">{app.payRate}</span>
                    
                    <div className="d-flex gap-2 justify-md-content-end">
                      <button className="btn btn-outline-dark btn-sm rounded-pill px-3 py-1 fw-semibold d-flex align-items-center gap-1">
                        <MessageSquare size={14} /> Message
                      </button>
                      <button className="btn btn-light btn-sm rounded-pill p-1 border">
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}