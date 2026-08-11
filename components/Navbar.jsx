'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, Briefcase, Image as ImageIcon, MessageSquare, 
  Search, User, Bell, Settings, LogOut, ChevronDown, LogIn 
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const [user, setUser] = useState(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Fashion Designer');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    const userName = authMode === 'signup' && fullName.trim() 
      ? fullName 
      : (email.split('@')[0] || 'Member User');

    // Attach dynamic metrics for LeftSidebar to consume
    const newUser = { 
      id: userName.toLowerCase().replace(/\s+/g, '-'), 
      name: userName,
      category: authMode === 'signup' ? category : 'Fashion Professional',
      connections: authMode === 'signup' ? 12 : 412,
      portfolioViews: authMode === 'signup' ? 85 : 1240,
      location: 'Paris, France'
    };

    localStorage.setItem('token', 'sample-auth-token-123');
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    
    // Dispatch event so SidebarLeft immediately re-renders with new counts
    window.dispatchEvent(new Event('user-auth-change'));

    setShowAuthModal(false);
    setFullName('');
    setEmail('');
    setPassword('');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.dispatchEvent(new Event('user-auth-change'));
    setShowLogoutModal(false);
    setIsProfileDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Feed', href: '/', icon: Home },
    { name: 'Jobs', href: '/jobs', icon: Briefcase },
    { name: 'Portfolio', href: user ? `/profile/${user.id}` : '#', icon: ImageIcon },
    { name: 'Messages', href: '/messages', icon: MessageSquare },
  ];

  return (
    <>
      <nav className="navbar bg-white border-bottom sticky-top py-2 shadow-sm">
        <div className="container-fluid px-3 px-md-5 d-flex align-items-center justify-content-between">
          
          {/* Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center gap-2 fw-bold me-2">
            <div className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: '36px', height: '36px', backgroundColor: '#8C533C' }}>
              S
            </div>
            <span className="fs-5 tracking-tight text-dark d-none d-sm-inline">Style<span style={{ color: '#8C533C' }}>Hive</span></span>
          </Link>

          {/* Search Bar */}
          <div className="d-flex align-items-center me-2 flex-grow-1" style={{ maxWidth: '260px' }}>
            <div className="input-group">
              <span className="input-group-text bg-light border-0 ps-3"><Search size={16} className="text-muted" /></span>
              <input type="text" className="form-control bg-light border-0 py-2 small" placeholder="Search designers, jobs..." />
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="navbar-nav d-flex flex-row gap-1 gap-md-2 mb-0 mx-auto">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;
              return (
                <li key={link.name} className="nav-item">
                  <Link
                    href={link.href}
                    className={`nav-link px-2 px-md-3 py-2 rounded-pill fw-medium d-flex align-items-center gap-1 gap-md-2 ${active ? 'text-white' : 'text-secondary'}`}
                    style={active ? { backgroundColor: '#8C533C' } : { fontSize: '0.85rem' }}
                  >
                    <Icon size={18} />
                    <span className="d-none d-md-inline">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* User Auth Controls */}
          <div className="d-flex align-items-center gap-2">
            {user ? (
              <div className="position-relative">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="btn text-white rounded-pill px-3 py-2 fw-bold d-flex align-items-center gap-2 btn-sm border-0 shadow-sm"
                  style={{ backgroundColor: '#8C533C' }}
                >
                  <User size={16} />
                  <span className="d-none d-sm-inline">{user.name}</span>
                  <ChevronDown size={14} />
                </button>

                {isProfileDropdownOpen && (
                  <div className="position-absolute end-0 mt-2 bg-white rounded-4 shadow-lg border p-2 z-3" style={{ width: '210px' }}>
                    <Link href={`/profile/${user.id}`} onClick={() => setIsProfileDropdownOpen(false)} className="dropdown-item p-2 rounded-3 text-dark small fw-medium d-flex align-items-center gap-2">
                      <User size={16} style={{ color: '#8C533C' }} /> View Profile
                    </Link>
                    <Link href="/settings" onClick={() => setIsProfileDropdownOpen(false)} className="dropdown-item p-2 rounded-3 text-dark small fw-medium d-flex align-items-center gap-2">
                      <Settings size={16} className="text-secondary" /> Settings
                    </Link>
                    <hr className="my-1 border-light" />
                    <button onClick={() => { setIsProfileDropdownOpen(false); setShowLogoutModal(true); }} className="dropdown-item p-2 rounded-3 text-danger small fw-bold d-flex align-items-center gap-2 w-100 text-start bg-transparent border-0">
                      <LogOut size={16} /> Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <button 
                  type="button"
                  onClick={() => { setAuthMode('login'); setShowAuthModal(true); }} 
                  className="btn btn-light text-dark rounded-pill px-3 py-2 fw-bold btn-sm border"
                >
                  <LogIn size={16} className="me-1 d-none d-sm-inline" /> Log In
                </button>
                <button 
                  type="button"
                  onClick={() => { setAuthMode('signup'); setShowAuthModal(true); }} 
                  className="btn text-white rounded-pill px-3 py-2 fw-bold btn-sm shadow-sm" 
                  style={{ backgroundColor: '#8C533C' }}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

        </div>
      </nav>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
          <div className="bg-white rounded-4 p-4 shadow-lg border" style={{ width: '360px' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold text-dark mb-0">{authMode === 'login' ? 'Welcome Back' : 'Create Account'}</h5>
              <button className="btn-close shadow-none" onClick={() => setShowAuthModal(false)}></button>
            </div>

            <form onSubmit={handleAuthSubmit}>
              {authMode === 'signup' && (
                <>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-secondary">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control rounded-3" 
                      placeholder="e.g. Ashray Samal" 
                      required 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-bold text-secondary">Professional Category</label>
                    <select 
                      className="form-select rounded-3"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="Fashion Designer">Fashion Designer</option>
                      <option value="Runway Stylist">Runway Stylist</option>
                      <option value="Fashion Photographer">Fashion Photographer</option>
                      <option value="Model / Brand Ambassador">Model / Brand Ambassador</option>
                      <option value="Creative Director">Creative Director</option>
                      <option value="Fashion Enthusiast">Fashion Enthusiast</option>
                    </select>
                  </div>
                </>
              )}

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Email Address</label>
                <input 
                  type="email" 
                  className="form-control rounded-3" 
                  placeholder="designer@stylehive.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Password</label>
                <input 
                  type="password" 
                  className="form-control rounded-3" 
                  placeholder="••••••••" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button 
                type="submit" 
                className="btn text-white rounded-pill w-100 fw-bold py-2 shadow-sm mb-3" 
                style={{ backgroundColor: '#8C533C' }}
              >
                {authMode === 'login' ? 'Log In' : 'Create Account & Sign In'}
              </button>
            </form>

            <div className="text-center">
              {authMode === 'login' ? (
                <small className="text-muted">
                  Don't have an account?{' '}
                  <button type="button" onClick={() => setAuthMode('signup')} className="btn btn-link p-0 text-decoration-none fw-bold small" style={{ color: '#8C533C' }}>
                    Sign Up
                  </button>
                </small>
              ) : (
                <small className="text-muted">
                  Already have an account?{' '}
                  <button type="button" onClick={() => setAuthMode('login')} className="btn btn-link p-0 text-decoration-none fw-bold small" style={{ color: '#8C533C' }}>
                    Log In
                  </button>
                </small>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
          <div className="bg-white rounded-4 p-4 shadow-lg border text-center" style={{ width: '340px' }}>
            <div className="rounded-circle mx-auto d-flex align-items-center justify-content-center text-danger mb-3 bg-danger bg-opacity-10" style={{ width: '56px', height: '56px' }}>
              <LogOut size={26} />
            </div>
            <h5 className="fw-bold text-dark mb-1">Log Out of StyleHive?</h5>
            <p className="text-muted small mb-4">You will need to sign back in to access your portfolio.</p>
            <div className="d-flex gap-2">
              <button onClick={() => setShowLogoutModal(false)} className="btn btn-light rounded-pill flex-grow-1 fw-bold text-secondary border btn-sm py-2">Cancel</button>
              <button onClick={handleLogout} className="btn btn-danger rounded-pill flex-grow-1 fw-bold btn-sm py-2 shadow-sm">Yes, Log Out</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}