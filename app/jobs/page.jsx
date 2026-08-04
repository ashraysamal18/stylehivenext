'use client';
import React, { useState, useEffect } from 'react';
import { MapPin, PlusCircle, Building, DollarSign, X } from 'lucide-react';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', company: '', location: '', roleCategory: 'Stylist', type: 'Full-time', salary: '', description: '' });

  useEffect(() => { fetchJobs(); }, []);

  const fetchJobs = async () => {
    const res = await fetch('/api/jobs');
    if (res.ok) setJobs(await res.json());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return alert('Log in to publish opportunities.');

    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-auth-token': token },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setShowModal(false);
      setFormData({ title: '', company: '', location: '', roleCategory: 'Stylist', type: 'Full-time', salary: '', description: '' });
      fetchJobs();
    }
  };

  return (
    <div className="container py-2">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Fashion Jobs & Projects</h3>
          <p className="text-muted mb-0">Apply or hire talent across top fashion roles.</p>
        </div>
        <button onClick={() => setShowModal(true)} className="btn btn-primary rounded-pill px-4 fw-semibold d-flex align-items-center gap-2">
          <PlusCircle size={18} /> Publish Opportunity
        </button>
      </div>

      <div className="d-flex flex-column gap-3">
        {jobs.map((job) => (
          <div key={job._id} className="card border-0 shadow-sm rounded-4 p-4">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <span className="badge bg-light text-primary border mb-2">{job.roleCategory}</span>
                <h5 className="fw-bold mb-1">{job.title}</h5>
                <div className="d-flex gap-3 text-muted small my-2">
                  <span className="d-flex align-items-center gap-1"><Building size={14} /> {job.company}</span>
                  <span className="d-flex align-items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  {job.salary && <span className="d-flex align-items-center gap-1"><DollarSign size={14} /> {job.salary}</span>}
                </div>
              </div>
              <button className="btn btn-outline-primary btn-sm rounded-pill px-3">Apply Now</button>
            </div>
            <p className="text-secondary mt-2 mb-0">{job.description}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 border-0 p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Publish an Opportunity</h5>
                <button className="btn btn-link text-dark p-0" onClick={() => setShowModal(false)}><X size={20} /></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6"><label className="form-label fw-semibold">Job Title</label><input type="text" className="form-control" required value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} /></div>
                  <div className="col-md-6"><label className="form-label fw-semibold">Company</label><input type="text" className="form-control" required value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} /></div>
                  <div className="col-md-6"><label className="form-label fw-semibold">Location</label><input type="text" className="form-control" required value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} /></div>
                  <div className="col-md-6"><label className="form-label fw-semibold">Salary</label><input type="text" className="form-control" value={formData.salary} onChange={e => setFormData({ ...formData, salary: e.target.value })} /></div>
                  <div className="col-12"><label className="form-label fw-semibold">Description</label><textarea className="form-control" rows="3" required value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })}></textarea></div>
                </div>
                <div className="d-flex justify-content-end gap-2 mt-4">
                  <button type="button" className="btn btn-light rounded-pill px-4" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary rounded-pill px-4 fw-bold">Publish Job</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}