'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'Stylist' });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        onClose();
        window.location.reload();
      } else {
        alert(data.msg || 'Authentication failed');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 border-0 p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0">{isLogin ? 'Sign In to StyleHive' : 'Join StyleHive'}</h5>
            <button className="btn btn-link text-dark p-0" onClick={onClose}><X size={20} /></button>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="mb-3">
                  <label className="form-label small fw-semibold">Full Name</label>
                  <input type="text" className="form-control" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-semibold">Role</label>
                  <select className="form-select" value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })}>
                    <option value="Stylist">Stylist</option>
                    <option value="Designer">Designer</option>
                    <option value="Model">Model</option>
                    <option value="Photographer">Photographer</option>
                  </select>
                </div>
              </>
            )}

            <div className="mb-3">
              <label className="form-label small fw-semibold">Email address</label>
              <input type="email" className="form-control" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold">Password</label>
              <input type="password" className="form-control" required value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} />
            </div>

            <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold py-2 mt-2">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="text-center mt-3">
            <button className="btn btn-link btn-sm text-decoration-none" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}