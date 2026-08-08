'use client';
import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, DollarSign, PlusCircle, Building } from 'lucide-react';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ title: '', company: '', location: '', type: 'Full-time', description: '', salary: '' });

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await fetch('/api/jobs');
    if (res.ok) {
      const data = await res.json();
      setJobs(data);
    }
  };

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return alert('Please sign in to post job opportunities.');

    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setShowPostModal(false);
      setFormData({ title: '', company: '', location: '', type: 'Full-time', description: '', salary: '' });
      fetchJobs();
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Fashion Jobs & Opportunities</h3>
          <p className="text-muted small mb-0">Discover career opportunities or hire top industry talent.</p>
        </div>
        {user && (
          <button onClick={() => setShowPostModal(true)} className="btn btn-primary rounded-pill fw-bold d-flex align-items-center gap-2">
            <PlusCircle size={18} /> Post Opportunity
          </button>
        )}
      </div>

      <div className="row g-3">
        {jobs.map((job) => (
          <div key={job._id} className="col-12 col-md-6">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white h-100">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h5 className="fw-bold text-dark mb-1">{job.title}</h5>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <span className="fw-semibold text-primary"><Building size={14} /> {job.company}</span>
                    <span>•</span>
                    <span><MapPin size={14} /> {job.location}</span>
                  </div>
                </div>
                <span className="badge bg-light text-primary border">{job.type}</span>
              </div>
              <p className="text-muted small my-2">{job.description}</p>
              <div className="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
                <span className="fw-bold text-dark small"><DollarSign size={14} /> {job.salary}</span>
                <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                  Posted by @{job.postedBy?.username || 'user'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Post Job Modal */}
      {showPostModal && (
        <div className="modal d-block bg-dark bg-opacity-50">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-4 p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Post a Job Opportunity</h5>
                <button className="btn-close" onClick={() => setShowPostModal(false)}></button>
              </div>
              <form onSubmit={handleJobSubmit}>
                <input className="form-control mb-2" placeholder="Job Title (e.g., Senior Stylist)" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
                <input className="form-control mb-2" placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} required />
                <input className="form-control mb-2" placeholder="Location (e.g., Paris, Remote)" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} required />
                <input className="form-control mb-2" placeholder="Salary Range (e.g., $80,000 - $100,000)" value={formData.salary} onChange={(e) => setFormData({ ...formData, salary: e.target.value })} />
                <textarea className="form-control mb-3" rows={3} placeholder="Job description and requirements..." value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required></textarea>
                <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold">Publish Job</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}