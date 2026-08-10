'use client';
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, DollarSign, PlusCircle, Building } from 'lucide-react';

const DUMMY_JOBS = [
  {
    _id: 'job1',
    title: 'Lead Runway Stylist',
    company: 'Maison Laurent',
    location: 'Paris, France (On-site)',
    type: 'Contract',
    salary: '€4,500 / show',
    category: 'Styling',
    description: 'Looking for an experienced lead stylist to curate looks for our upcoming Fall/Winter Paris Fashion Week presentation.'
  },
  {
    _id: 'job2',
    title: 'Senior Fashion Editorial Photographer',
    company: 'Vogue Studio Media',
    location: 'Milan, Italy',
    type: 'Freelance',
    salary: '€800 / day',
    category: 'Photography',
    description: 'Seeking a creative photographer with a strong high-fashion portfolio for a 3-day outdoor shoot in Lake Como.'
  },
  {
    _id: 'job3',
    title: 'Garment Pattern Maker',
    company: 'Atelier Atelier',
    location: 'London, UK (Hybrid)',
    type: 'Full-time',
    salary: '£48,000 / year',
    category: 'Design',
    description: 'Join our sustainable couture atelier. Must have 4+ years of precision pattern drafting and draping experience.'
  }
];

export default function JobsPage() {
  const [jobs, setJobs] = useState(DUMMY_JOBS);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Contract',
    salary: '',
    category: 'Styling',
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
      console.log('Using dummy data fallback');
    }
  };

  const handleCreateJob = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setShowModal(false);
        setFormData({ title: '', company: '', location: '', type: 'Contract', salary: '', category: 'Styling', description: '' });
        fetchJobs();
      }
    } catch (err) {
      console.error(err);
    }
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
            <h3 className="fw-bold mb-1">Fashion Industry Job Board</h3>
            <p className="mb-0 text-white-50 small">Discover high-fashion roles, freelance gigs, and creative opportunities worldwide.</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-light rounded-pill px-4 fw-bold text-dark d-flex align-items-center gap-2 align-self-start align-self-md-auto"
          >
            <PlusCircle size={18} /> Post Opportunity
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
              placeholder="Search by job title or brand..."
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
            <option value="All">All Categories</option>
            <option value="Styling">Styling</option>
            <option value="Photography">Photography</option>
            <option value="Design">Design</option>
            <option value="Modeling">Modeling</option>
          </select>
        </div>
      </div>

      {/* Jobs Listing Grid */}
      <div className="row g-3">
        {filteredJobs.map((job) => (
          <div key={job._id} className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className="badge rounded-pill text-white px-3 py-1" style={{ backgroundColor: '#8C533C' }}>
                    {job.category}
                  </span>
                  <span className="badge bg-light text-dark border">{job.type}</span>
                </div>
                <h5 className="fw-bold text-dark mb-1">{job.title}</h5>
                <p className="text-muted small fw-medium mb-3 d-flex align-items-center gap-1">
                  <Building size={14} /> {job.company}
                </p>
                <p className="text-muted small mb-3">{job.description}</p>
              </div>

              <div className="border-top pt-3 mt-2">
                <div className="d-flex justify-content-between align-items-center text-muted small mb-3">
                  <span className="d-flex align-items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  <span className="d-flex align-items-center gap-1 fw-bold text-dark"><DollarSign size={14} /> {job.salary}</span>
                </div>
                <button className="btn text-white w-100 rounded-pill fw-bold btn-sm" style={{ backgroundColor: '#8C533C' }}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Post Job Modal */}
      {showModal && (
        <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 border-0 p-3">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">Post a Job Opening</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <form onSubmit={handleCreateJob}>
                <div className="modal-body d-flex flex-column gap-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Job Title"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company / Fashion House"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location (e.g., Paris, Remote)"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                  <div className="row g-2">
                    <div className="col-6">
                      <select
                        className="form-select"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      >
                        <option value="Contract">Contract</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <select
                        className="form-select"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      >
                        <option value="Styling">Styling</option>
                        <option value="Photography">Photography</option>
                        <option value="Design">Design</option>
                        <option value="Modeling">Modeling</option>
                      </select>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Compensation (e.g., €500 / day)"
                    value={formData.salary}
                    onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  />
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Job Description..."
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  ></textarea>
                </div>
                <div className="modal-footer border-0">
                  <button type="button" className="btn btn-light rounded-pill" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="submit" className="btn text-white rounded-pill px-4" style={{ backgroundColor: '#8C533C' }}>Publish Job</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}