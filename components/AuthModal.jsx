'use client';
import React, { useState } from 'react';

export default function AuthModal({ isOpen, onClose, defaultMode = 'login' }) {
  const [isLogin, setIsLogin] = useState(defaultMode !== 'signup');

  // Keep the form mode in sync if the parent re-opens the modal in a different mode
  React.useEffect(() => {
    if (isOpen) setIsLogin(defaultMode !== 'signup');
  }, [isOpen, defaultMode]);
  const [formData, setFormData] = useState({ name: '', username: '', email: '', password: '', role: 'Fashion Designer' });
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.msg || data.error || 'Authentication failed');
      return;
    }

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    window.dispatchEvent(new Event('auth-change'));
    setError('');
    onClose();
  };

  return (
    <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg rounded-4 p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0">{isLogin ? 'Sign In to StyleHive' : 'Create StyleHive Identity'}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          {error && <div className="alert alert-danger py-2 small">{error}</div>}

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="mb-2">
                  <label className="form-label small fw-semibold">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sophia Laurent"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label small fw-semibold">Personal ID / Handle</label>
                  <div className="input-group">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="sophialaurent"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value.toLowerCase().replace(/\s+/g, '') })}
                      required
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="form-label small fw-semibold">Role</label>
                  <select
                    className="form-select"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value="Fashion Designer">Fashion Designer</option>
                    <option value="Runway Stylist">Runway Stylist</option>
                    <option value="Fashion Model">Fashion Model</option>
                    <option value="Photographer">Photographer</option>
                    <option value="Brand Manager">Brand Manager</option>
                  </select>
                </div>
              </>
            )}

            <div className="mb-2">
              <label className="form-label small fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold py-2">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="text-center mt-3 small text-muted">
            {isLogin ? "New to StyleHive? " : "Already registered? "}
            <button className="btn btn-link p-0 small fw-bold text-decoration-none" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Join now' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}