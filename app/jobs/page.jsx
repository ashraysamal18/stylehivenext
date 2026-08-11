'use client';
import React, { useState, useEffect } from 'react';
import { 
  Search, MapPin, DollarSign, PlusCircle, Building, Plane, 
  Users, Image as ImageIcon, CheckCircle, FileText 
} from 'lucide-react';

const DUMMY_JOBS = [
  {
    _id: 'job1',
    title: 'Lead Runway Stylist',
    company: 'Maison Laurent',
    location: 'Paris, France',
    gigType: 'Runway Prep',
    rateType: 'Per Show',
    budget: '€4,500',
    travelCovered: true,
    category: 'Styling',
    deliverables: 'Complete curation and fitting for 28 runway looks + backstage direction.',
    taggedCrew: ['Sophia Laurent (Creative Director)', 'Marcello V. (Casting)'],
    description: 'Seeking an experienced lead stylist for our upcoming FW Paris presentation. Must provide digital lookbook references.'
  },
  {
    _id: 'job2',
    title: 'Fashion Editorial Photographer',
    company: 'Vogue Studio Media',
    location: 'Milan, Italy',
    gigType: 'Single-Day Shoot',
    rateType: 'Day Rate',
    budget: '€900 / day',
    travelCovered: false,
    category: 'Photography',
    deliverables: '20 high-res retouched editorial shots within 5 business days.',
    taggedCrew: ['Aisha Khan (Lead Designer)'],
    description: 'Looking for a high-fashion editorial photographer for an outdoor sunset shoot in Lake Como.'
  }
];

export default function ArtistJobBoard() {
  const [jobs, setJobs] = useState(DUMMY_JOBS);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Modals state
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedJobForApply, setSelectedJobForApply] = useState(null);
  
  // Application Form State
  const [applyPortfolio, setApplyPortfolio] = useState('');
  const [applyNote, setApplyNote] = useState('');
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  // New Job Post Form State
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    gigType: 'Editorial Campaign',
    rateType: 'Day Rate',
    budget: '',
    travelCovered: false,
    category: 'Styling',
    deliverables: '',
    taggedCrew: '',
    description: ''
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/jobs');
      if (res.ok) {
        const data = await res.json();
        if (data.length > 0) setJobs(data);
      }
    } catch (err) {
      console.log('Using fallback dummy data');
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      taggedCrew: formData.taggedCrew ? formData.taggedCrew.split(',').map(s => s.trim()) : []
    };

    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setShowPostModal(false);
        fetchJobs();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setSelectedJobForApply(null);
      setApplyPortfolio('');
      setApplyNote('');
    }, 2000);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
                          job.company.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container-fluid px-3 px-md-5 py-4">
      
      {/* Header Banner */}
      <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 text-white" style={{ backgroundColor: '#8C533C' }}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <h3 className="fw-bold mb-1">Creative Gig & Project Board</h3>
            <p className="mb-0 text-white-50 small">
              Transparent budgets, direct portfolio applications, and crew networking built specifically for fashion artists.
            </p>
          </div>
          <button
            onClick={() => setShowPostModal(true)}
            className="btn btn-light rounded-pill px-4 fw-bold text-dark d-flex align-items-center gap-2 align-self-start align-self-md-auto"
          >
            <PlusCircle size={18} /> Post Project Gig
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-8">
          <div className="input-group">
            <span className="input-group-text bg-white border-0 shadow-sm ps-3">
              <Search size={18} className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control bg-white border-0 shadow-sm py-2"
              placeholder="Search gigs, brands, or creative roles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <select
            className="form-select bg-white border-0 shadow-sm py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Disciplines</option>
            <option value="Styling">Styling</option>
            <option value="Photography">Photography</option>
            <option value="Design">Design & Pattern Drafting</option>
            <option value="Modeling">Runway & Editorial Model</option>
          </select>
        </div>
      </div>

      {/* Gigs & Jobs Cards */}
      <div className="row g-3">
        {filteredJobs.map((job) => (
          <div key={job._id} className="col-12 col-md-6">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white d-flex flex-column justify-content-between">
              <div>
                {/* Badges */}
                <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">
                  <span className="badge rounded-pill text-white px-3 py-1" style={{ backgroundColor: '#8C533C' }}>
                    {job.category}
                  </span>
                  <span className="badge bg-light text-dark border">{job.gigType}</span>
                  {job.travelCovered && (
                    <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 d-flex align-items-center gap-1">
                      <Plane size={12} /> Travel/Lodging Covered
                    </span>
                  )}
                </div>

                {/* Title & Brand */}
                <h5 className="fw-bold text-dark mb-1">{job.title}</h5>
                <p className="text-muted small fw-medium mb-3 d-flex align-items-center gap-1">
                  <Building size={14} /> {job.company} • <MapPin size={14} /> {job.location}
                </p>

                {/* Budget Box */}
                <div className="p-3 rounded-3 mb-3 d-flex align-items-center justify-content-between" style={{ backgroundColor: '#FAF8F5', border: '1px solid #EFECE6' }}>
                  <span className="text-muted small">Upfront Budget ({job.rateType}):</span>
                  <span className="fw-bold text-dark d-flex align-items-center gap-1" style={{ color: '#8C533C' }}>
                    <DollarSign size={16} /> {job.budget}
                  </span>
                </div>

                <p className="text-muted small mb-3">{job.description}</p>

                {/* Deliverables */}
                {job.deliverables && (
                  <div className="mb-3">
                    <small className="fw-bold text-dark d-block mb-1">Expected Deliverables:</small>
                    <p className="text-muted small mb-0 p-2 bg-light rounded-2 border-start border-3" style={{ borderColor: '#8C533C' }}>
                      {job.deliverables}
                    </p>
                  </div>
                )}

                {/* Tagged Crew Members */}
                {job.taggedCrew && job.taggedCrew.length > 0 && (
                  <div className="mb-3">
                    <small className="text-muted d-flex align-items-center gap-1 mb-1">
                      <Users size={12} /> Confirmed Project Crew:
                    </small>
                    <div className="d-flex flex-wrap gap-1">
                      {job.taggedCrew.map((crew, idx) => (
                        <span key={idx} className="badge bg-light text-secondary border fw-normal" style={{ fontSize: '0.7rem' }}>
                          {crew}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="border-top pt-3 mt-2">
                <button
                  onClick={() => setSelectedJobForApply(job)}
                  className="btn text-white w-100 rounded-pill fw-bold btn-sm d-flex align-items-center justify-content-center gap-2"
                  style={{ backgroundColor: '#8C533C' }}
                >
                  <ImageIcon size={16} /> Submit Visual Portfolio
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Application Modal */}
      {selectedJobForApply && (
        <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 border-0 p-3">
              <div className="modal-header border-0">
                <div>
                  <h5 className="modal-title fw-bold">Submit Visual Application</h5>
                  <small className="text-muted">Applying for {selectedJobForApply.title} at {selectedJobForApply.company}</small>
                </div>
                <button type="button" className="btn-close" onClick={() => setSelectedJobForApply(null)}></button>
              </div>

              {appliedSuccess ? (
                <div className="modal-body text-center py-4">
                  <CheckCircle size={48} className="text-success mb-3" />
                  <h5 className="fw-bold">Portfolio Submitted!</h5>
                  <p className="text-muted small mb-0">The hiring team has received your visual lookbook and note.</p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit}>
                  <div className="modal-body d-flex flex-column gap-3">
                    <div>
                      <label className="form-label fw-bold small">StyleHive Lookbook or Portfolio Link *</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light"><ImageIcon size={16} /></span>
                        <input
                          type="url"
                          className="form-control"
                          placeholder="https://stylehive.com/profile/yourname or Instagram/Behance"
                          required
                          value={applyPortfolio}
                          onChange={(e) => setApplyPortfolio(e.target.value)}
                        />
                      </div>
                      <small className="text-muted" style={{ fontSize: '0.7rem' }}>
                        Post your recent mood boards, editorial shots, or sketches.
                      </small>
                    </div>

                    <div>
                      <label className="form-label fw-bold small">Pitch / Availability Note</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Mention your availability for the shoot dates, day rate confirmation, or equipment list..."
                        value={applyNote}
                        onChange={(e) => setApplyNote(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="modal-footer border-0">
                    <button type="button" className="btn btn-light rounded-pill" onClick={() => setSelectedJobForApply(null)}>Cancel</button>
                    <button type="submit" className="btn text-white rounded-pill px-4 fw-bold" style={{ backgroundColor: '#8C533C' }}>
                      Send Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Post Project Gig Modal */}
      {showPostModal && (
        <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 border-0 p-3">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">Post a Creative Project or Gig</h5>
                <button type="button" className="btn-close" onClick={() => setShowPostModal(false)}></button>
              </div>
              <form onSubmit={handlePostSubmit}>
                <div className="modal-body d-flex flex-column gap-3">
                  <div className="row g-2">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Gig Title (e.g. FW Campaign Photographer)"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Brand / Atelier Name"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="row g-2">
                    <div className="col-4">
                      <select
                        className="form-select"
                        value={formData.gigType}
                        onChange={(e) => setFormData({ ...formData, gigType: e.target.value })}
                      >
                        <option value="Editorial Campaign">Editorial Campaign</option>
                        <option value="Runway Prep">Runway Prep</option>
                        <option value="Single-Day Shoot">Single-Day Shoot</option>
                        <option value="Lookbook">Lookbook</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <select
                        className="form-select"
                        value={formData.rateType}
                        onChange={(e) => setFormData({ ...formData, rateType: e.target.value })}
                      >
                        <option value="Day Rate">Day Rate</option>
                        <option value="Per Show">Per Show</option>
                        <option value="Per Look">Per Look</option>
                        <option value="Full Project">Full Project</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Budget (e.g. €1,200)"
                        required
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-check form-switch ms-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="travelCheck"
                      checked={formData.travelCovered}
                      onChange={(e) => setFormData({ ...formData, travelCovered: e.target.checked })}
                    />
                    <label className="form-check-label small text-muted" htmlFor="travelCheck">
                      Travel & Accommodation Expenses Covered
                    </label>
                  </div>

                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="Expected Deliverables (e.g. 15 High-res edited retouched shots)"
                    value={formData.deliverables}
                    onChange={(e) => setFormData({ ...formData, deliverables: e.target.value })}
                  ></textarea>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tag Confirmed Crew (comma separated, e.g. Sophia L. (Stylist), Marco B. (Photo))"
                    value={formData.taggedCrew}
                    onChange={(e) => setFormData({ ...formData, taggedCrew: e.target.value })}
                  />

                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Project Brief & Details..."
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  ></textarea>
                </div>
                <div className="modal-footer border-0">
                  <button type="button" className="btn btn-light rounded-pill" onClick={() => setShowPostModal(false)}>Cancel</button>
                  <button type="submit" className="btn text-white rounded-pill px-4" style={{ backgroundColor: '#8C533C' }}>
                    Publish Gig
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}