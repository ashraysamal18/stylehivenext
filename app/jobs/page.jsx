'use client';
import React, { useState } from 'react';
import { 
  Briefcase, Search, MapPin, DollarSign, Clock, Filter, 
  Bookmark, CheckCircle, PlusCircle, Users, MessageSquare, 
  Send, Eye, Sparkles, ChevronRight, X, Calendar, UserCheck, UserX
} from 'lucide-react';

export default function JobMarketplacePage() {
  // Toggle between Seeker ('professional') and Recruiter ('company') view
  const [viewMode, setViewMode] = useState('professional'); 
  const [activeTab, setActiveTab] = useState('explore'); // explore | applied | saved (for professionals)

  // Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedJobType, setSelectedJobType] = useState('All');

  // Modal States
  const [selectedJobForApply, setSelectedJobForApply] = useState(null);
  const [selectedJobApplicants, setSelectedJobApplicants] = useState(null);
  const [showPostJobModal, setShowPostJobModal] = useState(false);

  // Sample Jobs Database
  const [jobs, setJobs] = useState([
    {
      id: 'job-1',
      title: 'Lead Fashion Stylist — AW26 Campaign',
      company: 'Maison Lumière',
      logo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100',
      location: 'Mumbai, India (On-site)',
      type: 'Project / Contract',
      category: 'Stylist',
      rate: '$800 - $1,200 / Day',
      experienceRequired: '5+ Years',
      postedAgo: '2 hours ago',
      deadline: 'Aug 28, 2026',
      description: 'Seeking an experienced lead fashion stylist to spearhead visual direction for our upcoming Autumn/Winter campaign. Must have prior luxury editorial experience.',
      requirements: ['5+ years high-fashion styling', 'Relationships with major modeling agencies', 'Strong moodboard curation skills'],
      saved: false,
      applied: false,
      applicantsCount: 14,
      applicantsList: [
        { id: 'app-1', name: 'Khanak Kasana', role: 'Fashion Stylist & Creative Director', experience: '6 Years', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100', status: 'Pending' },
        { id: 'app-2', name: 'Rohan Mehta', role: 'Editorial Stylist', experience: '4 Years', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100', status: 'Shortlisted' }
      ]
    },
    {
      id: 'job-2',
      title: 'Senior Fashion Photographer',
      company: 'Vogue Motion Studio',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100',
      location: 'Delhi NCR, India',
      type: 'Full-Time',
      category: 'Photographer',
      rate: '$60k - $80k / Year',
      experienceRequired: '4+ Years',
      postedAgo: '1 day ago',
      deadline: 'Sep 05, 2026',
      description: 'Looking for a studio fashion photographer skilled in Capture One, high-end lighting setups, and post-production workflows for magazine spreads.',
      requirements: ['Expertise in Capture One & Photoshop', 'Studio lighting mastery', 'Portfolio proof of editorial work'],
      saved: true,
      applied: true,
      applicantsCount: 28,
      applicantsList: []
    },
    {
      id: 'job-3',
      title: 'Runway Creative Director',
      company: 'Lakmé Couture Week',
      logo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
      location: 'Mumbai, India',
      type: 'Contract',
      category: 'Creative Director',
      rate: '$2,500 / Project',
      experienceRequired: '7+ Years',
      postedAgo: '3 days ago',
      deadline: 'Aug 25, 2026',
      description: 'Oversee music, stage layout, lighting choreography, and collection sequencing for a 3-day fashion week runway show.',
      requirements: ['Runway direction history', 'Team management', 'Live show execution'],
      saved: false,
      applied: false,
      applicantsCount: 9,
      applicantsList: []
    }
  ]);

  // Categories & Filters
  const roles = ['All', 'Stylist', 'Photographer', 'Creative Director', 'Makeup Artist', 'Model', 'Fashion Designer'];
  const jobTypes = ['All', 'Full-Time', 'Project / Contract', 'Freelance', 'Part-Time'];

  // Toggle Save Job
  const toggleSaveJob = (jobId) => {
    setJobs(jobs.map(j => j.id === jobId ? { ...j, saved: !j.saved } : j));
  };

  // Submit Application
  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!selectedJobForApply) return;

    setJobs(jobs.map(j => {
      if (j.id === selectedJobForApply.id) {
        return {
          ...j,
          applied: true,
          applicantsCount: j.applicantsCount + 1,
          applicantsList: [
            ...j.applicantsList,
            {
              id: `app-${Date.now()}`,
              name: 'Khanak Kasana',
              role: 'Fashion Stylist & Creative Director',
              experience: '6 Years',
              avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100',
              status: 'Pending'
            }
          ]
        };
      }
      return j;
    }));

    alert('Application submitted successfully!');
    setSelectedJobForApply(null);
  };

  // Update Applicant Status (Shortlist/Reject)
  const updateApplicantStatus = (jobId, applicantId, newStatus) => {
    setJobs(jobs.map(j => {
      if (j.id === jobId) {
        return {
          ...j,
          applicantsList: j.applicantsList.map(a => a.id === applicantId ? { ...a, status: newStatus } : a)
        };
      }
      return j;
    }));
  };

  // Filter Jobs
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'All' || job.category === selectedRole;
    const matchesType = selectedJobType === 'All' || job.type === selectedJobType;

    if (viewMode === 'professional') {
      if (activeTab === 'saved') return job.saved && matchesSearch && matchesRole && matchesType;
      if (activeTab === 'applied') return job.applied && matchesSearch && matchesRole && matchesType;
    }

    return matchesSearch && matchesRole && matchesType;
  });

  return (
    <div className="min-vh-100 py-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container px-3 px-lg-5">
        
        {/* TOP TOOLBAR: VIEW TOGGLE (PROFESSIONAL vs COMPANY) */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 p-3 bg-white rounded-4 shadow-sm border">
          <div>
            <h4 className="fw-bold text-dark mb-1 d-flex align-items-center gap-2">
              <Briefcase size={22} style={{ color: '#8C533C' }} /> StyleHive Creative Opportunities
            </h4>
            <p className="text-muted small mb-0">The premier career marketplace for fashion, editorial, and commercial creators.</p>
          </div>

          <div className="mt-3 mt-md-0 d-flex gap-2 bg-light p-1 rounded-pill border">
            <button
              onClick={() => setViewMode('professional')}
              className={`btn btn-sm rounded-pill px-4 fw-bold transition ${viewMode === 'professional' ? 'text-white' : 'btn-light text-muted border-0'}`}
              style={viewMode === 'professional' ? { backgroundColor: '#8C533C' } : {}}
            >
              For Professionals
            </button>
            <button
              onClick={() => setViewMode('company')}
              className={`btn btn-sm rounded-pill px-4 fw-bold transition ${viewMode === 'company' ? 'text-white' : 'btn-light text-muted border-0'}`}
              style={viewMode === 'company' ? { backgroundColor: '#8C533C' } : {}}
            >
              For Companies / Hiring
            </button>
          </div>
        </div>

        {/* 1. PROFESSIONAL SIDE */}
        {viewMode === 'professional' && (
          <div>
            {/* Search & Secondary Nav */}
            <div className="row g-3 mb-4">
              <div className="col-md-7">
                <div className="input-group bg-white rounded-4 shadow-sm border overflow-hidden p-1">
                  <span className="input-group-text bg-white border-0 text-muted ps-3"><Search size={18} /></span>
                  <input
                    type="text"
                    className="form-control border-0 shadow-none ps-2"
                    placeholder="Search titles, skills, companies, or cities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-5 d-flex gap-2">
                <button 
                  onClick={() => setActiveTab('explore')}
                  className={`btn rounded-pill px-3 py-2 fw-bold text-capitalize flex-grow-1 ${activeTab === 'explore' ? 'text-white' : 'btn-white bg-white border text-dark'}`}
                  style={activeTab === 'explore' ? { backgroundColor: '#8C533C' } : {}}
                >
                  Explore Jobs
                </button>
                <button 
                  onClick={() => setActiveTab('applied')}
                  className={`btn rounded-pill px-3 py-2 fw-bold text-capitalize flex-grow-1 ${activeTab === 'applied' ? 'text-white' : 'btn-white bg-white border text-dark'}`}
                  style={activeTab === 'applied' ? { backgroundColor: '#8C533C' } : {}}
                >
                  Applications ({jobs.filter(j => j.applied).length})
                </button>
                <button 
                  onClick={() => setActiveTab('saved')}
                  className={`btn rounded-pill px-3 py-2 fw-bold text-capitalize flex-grow-1 ${activeTab === 'saved' ? 'text-white' : 'btn-white bg-white border text-dark'}`}
                  style={activeTab === 'saved' ? { backgroundColor: '#8C533C' } : {}}
                >
                  Saved ({jobs.filter(j => j.saved).length})
                </button>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="d-flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
              <span className="small text-muted fw-bold align-self-center me-2">Role:</span>
              {roles.map(role => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`btn btn-sm rounded-pill px-3 py-1 text-nowrap fw-medium ${selectedRole === role ? 'btn-dark' : 'btn-white bg-white border text-secondary'}`}
                >
                  {role}
                </button>
              ))}
            </div>

            {/* Jobs List */}
            <div className="row g-4">
              {filteredJobs.length === 0 ? (
                <div className="col-12 text-center py-5">
                  <p className="text-muted mb-0">No jobs found matching your criteria.</p>
                </div>
              ) : (
                filteredJobs.map(job => (
                  <div key={job.id} className="col-12">
                    <div className="card border-0 shadow-sm rounded-4 p-4 bg-white position-relative hover-lift transition">
                      <div className="row g-3 align-items-center">
                        
                        {/* Company Logo */}
                        <div className="col-auto">
                          <img src={job.logo} alt={job.company} className="rounded-3 object-fit-cover border" style={{ width: '65px', height: '65px' }} />
                        </div>

                        {/* Job Details */}
                        <div className="col">
                          <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                            <h5 className="fw-bold text-dark mb-0">{job.title}</h5>
                            <span className="badge rounded-pill bg-light text-dark border px-3 py-1 small">{job.type}</span>
                          </div>

                          <div className="d-flex align-items-center gap-3 text-muted small flex-wrap mb-2">
                            <span className="fw-semibold text-dark">{job.company}</span>
                            <span>•</span>
                            <span className="d-flex align-items-center gap-1"><MapPin size={14} /> {job.location}</span>
                            <span>•</span>
                            <span className="d-flex align-items-center gap-1 text-success fw-bold"><DollarSign size={14} /> {job.rate}</span>
                          </div>

                          <p className="text-secondary small mb-2 line-clamp-2">{job.description}</p>

                          <div className="d-flex gap-2 flex-wrap">
                            {job.requirements.map((req, i) => (
                              <span key={i} className="badge bg-light text-secondary fw-normal border rounded-pill" style={{ fontSize: '0.75rem' }}>
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="col-lg-auto d-flex flex-column gap-2 text-end">
                          <span className="text-muted small d-block">{job.postedAgo}</span>
                          
                          <div className="d-flex gap-2 align-items-center">
                            <button 
                              onClick={() => toggleSaveJob(job.id)}
                              className={`btn btn-sm rounded-circle p-2 ${job.saved ? 'btn-danger text-white' : 'btn-outline-secondary'}`}
                              title="Save Job"
                            >
                              <Bookmark size={18} fill={job.saved ? 'currentColor' : 'none'} />
                            </button>

                            {job.applied ? (
                              <button className="btn btn-success btn-sm rounded-pill fw-bold px-4 py-2 d-flex align-items-center gap-1" disabled>
                                <CheckCircle size={16} /> Applied
                              </button>
                            ) : (
                              <button 
                                onClick={() => setSelectedJobForApply(job)}
                                className="btn text-white btn-sm rounded-pill fw-bold px-4 py-2 shadow-sm" 
                                style={{ backgroundColor: '#8C533C' }}
                              >
                                Easy Apply
                              </button>
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* 2. COMPANY / HIRING SIDE */}
        {viewMode === 'company' && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h5 className="fw-bold text-dark mb-0">Active Job Listings & Hiring Workspace</h5>
                <p className="text-muted small mb-0">Manage applicants, schedule interviews, and post open mandates.</p>
              </div>

              <button 
                onClick={() => setShowPostJobModal(true)}
                className="btn text-white rounded-pill px-4 py-2 fw-bold shadow-sm d-flex align-items-center gap-2"
                style={{ backgroundColor: '#8C533C' }}
              >
                <PlusCircle size={18} /> Post a New Job
              </button>
            </div>

            {/* Recruiter Job Management Cards */}
            <div className="row g-4">
              {jobs.map(job => (
                <div key={job.id} className="col-12">
                  <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                      <div>
                        <span className="badge bg-light text-dark border rounded-pill px-3 py-1 small mb-2">{job.category}</span>
                        <h5 className="fw-bold text-dark mb-1">{job.title}</h5>
                        <p className="text-muted small mb-0">{job.location} • Posted: {job.postedAgo} • Budget: <strong>{job.rate}</strong></p>
                      </div>

                      <div className="d-flex align-items-center gap-3">
                        <div className="text-end">
                          <span className="h4 fw-bold text-dark mb-0 d-block">{job.applicantsCount}</span>
                          <span className="text-muted small">Total Applicants</span>
                        </div>

                        <button 
                          onClick={() => setSelectedJobApplicants(job)}
                          className="btn btn-outline-dark rounded-pill fw-bold px-4 py-2 d-flex align-items-center gap-2"
                        >
                          <Users size={16} /> Review Applicants
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* MODAL 1: EASY APPLY FOR PROFESSIONALS */}
      {selectedJobForApply && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1060 }}>
          <div className="bg-white rounded-4 shadow-lg p-4 w-100" style={{ maxWidth: '500px' }}>
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
              <h5 className="fw-bold text-dark mb-0">Apply for {selectedJobForApply.title}</h5>
              <button className="btn-close shadow-none" onClick={() => setSelectedJobForApply(null)}></button>
            </div>

            <form onSubmit={handleApplySubmit}>
              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Cover Note / Pitch</label>
                <textarea className="form-control rounded-3" rows={3} placeholder="Introduce yourself and share why you are a great fit..." required></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Portfolio Link</label>
                <input type="url" className="form-control rounded-3" defaultValue="https://stylehive.com/profile/khanak" required />
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold text-secondary">Expected Rate / Compensation</label>
                <input type="text" className="form-control rounded-3" defaultValue={selectedJobForApply.rate} required />
              </div>

              <button type="submit" className="btn text-white rounded-pill w-100 fw-bold py-2 shadow-sm" style={{ backgroundColor: '#8C533C' }}>
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: REVIEW APPLICANTS (RECRUITER VIEW) */}
      {selectedJobApplicants && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1060 }}>
          <div className="bg-white rounded-4 shadow-lg p-4 w-100 h-100" style={{ maxWidth: '750px', maxHeight: '85vh' }}>
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
              <div>
                <h5 className="fw-bold text-dark mb-0">Applicants for {selectedJobApplicants.title}</h5>
                <span className="text-muted small">{selectedJobApplicants.applicantsList.length} Total Applicants</span>
              </div>
              <button className="btn-close shadow-none" onClick={() => setSelectedJobApplicants(null)}></button>
            </div>

            <div className="overflow-y-auto" style={{ maxHeight: 'calc(85vh - 120px)' }}>
              {selectedJobApplicants.applicantsList.length === 0 ? (
                <p className="text-muted text-center py-5">No applicants yet for this listing.</p>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {selectedJobApplicants.applicantsList.map(applicant => (
                    <div key={applicant.id} className="card border p-3 rounded-4 bg-light">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center gap-3">
                          <img src={applicant.avatar} alt={applicant.name} className="rounded-circle object-fit-cover" style={{ width: '50px', height: '50px' }} />
                          <div>
                            <h6 className="fw-bold text-dark mb-0">{applicant.name}</h6>
                            <span className="text-muted small">{applicant.role} • {applicant.experience} Exp</span>
                          </div>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                          <span className={`badge rounded-pill px-3 py-2 ${applicant.status === 'Shortlisted' ? 'bg-success' : applicant.status === 'Rejected' ? 'bg-danger' : 'bg-warning text-dark'}`}>
                            {applicant.status}
                          </span>

                          <button 
                            onClick={() => updateApplicantStatus(selectedJobApplicants.id, applicant.id, 'Shortlisted')}
                            className="btn btn-sm btn-outline-success rounded-circle p-2"
                            title="Shortlist Applicant"
                          >
                            <UserCheck size={16} />
                          </button>

                          <button 
                            onClick={() => updateApplicantStatus(selectedJobApplicants.id, applicant.id, 'Rejected')}
                            className="btn btn-sm btn-outline-danger rounded-circle p-2"
                            title="Reject Applicant"
                          >
                            <UserX size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: POST A NEW JOB */}
      {showPostJobModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1060 }}>
          <div className="bg-white rounded-4 shadow-lg p-4 w-100" style={{ maxWidth: '550px' }}>
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
              <h5 className="fw-bold text-dark mb-0">Post a Creative Mandate</h5>
              <button className="btn-close shadow-none" onClick={() => setShowPostJobModal(false)}></button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Job posted successfully!'); setShowPostJobModal(false); }}>
              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Job Title</label>
                <input type="text" className="form-control rounded-3" placeholder="e.g. Lead Fashion Stylist - Cover Campaign" required />
              </div>

              <div className="row g-2 mb-3">
                <div className="col-6">
                  <label className="form-label small fw-bold text-secondary">Role Category</label>
                  <select className="form-select rounded-3">
                    <option>Stylist</option>
                    <option>Photographer</option>
                    <option>Creative Director</option>
                    <option>Makeup Artist</option>
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label small fw-bold text-secondary">Job Type</label>
                  <select className="form-select rounded-3">
                    <option>Project / Contract</option>
                    <option>Full-Time</option>
                    <option>Freelance</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Offered Rate / Salary</label>
                <input type="text" className="form-control rounded-3" placeholder="e.g. $800 / Day or $70,000 / Year" required />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Job Description</label>
                <textarea className="form-control rounded-3" rows={3} placeholder="Describe project scope and responsibilities..." required></textarea>
              </div>

              <button type="submit" className="btn text-white rounded-pill w-100 fw-bold py-2 shadow-sm" style={{ backgroundColor: '#8C533C' }}>
                Publish Job Listing
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}