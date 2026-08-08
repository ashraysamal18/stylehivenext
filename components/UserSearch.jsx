'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, User, ShieldCheck } from 'lucide-react';

export default function UserSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fetch search results on input change
  useEffect(() => {
    const fetchResults = async () => {
      if (!query.trim()) {
        setResults([]);
        setIsOpen(false);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`/api/users/search?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          const data = await res.json();
          setResults(data);
          setIsOpen(true);
        }
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchResults, 300); // 300ms debounce
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="position-relative w-100" style={{ maxWidth: '300px' }} ref={dropdownRef}>
      <div className="input-group">
        <span className="input-group-text bg-light border-0 ps-3 text-muted">
          <Search size={16} />
        </span>
        <input
          type="text"
          className="form-control bg-light border-0 pe-3 rounded-end-pill py-2 text-sm"
          placeholder="Search creators, designers..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
        />
      </div>

      {/* Results Dropdown */}
      {isOpen && (
        <div className="card border-0 shadow-lg position-absolute start-0 end-0 mt-2 rounded-4 overflow-hidden z-3 bg-white">
          <div className="list-group list-group-flush">
            {loading ? (
              <div className="p-3 text-center text-muted small">Searching...</div>
            ) : results.length > 0 ? (
              results.map((user) => (
                <Link
                  key={user._id}
                  href={`/profile/${user.username}`}
                  onClick={() => setIsOpen(false)}
                  className="list-group-item list-group-item-action d-flex align-items-center gap-3 p-3 border-0 hover-bg-light"
                >
                  <div
                    className="rounded-circle bg-primary text-white fw-bold d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: '40px', height: '40px' }}
                  >
                    {user.name ? user.name.charAt(0).toUpperCase() : <User size={18} />}
                  </div>
                  <div className="overflow-hidden">
                    <h6 className="fw-bold text-dark mb-0 text-truncate d-flex align-items-center gap-1 small">
                      {user.name}
                      <ShieldCheck size={14} className="text-primary flex-shrink-0" />
                    </h6>
                    <small className="text-muted d-block text-truncate" style={{ fontSize: '0.75rem' }}>
                      @{user.username} • {user.role}
                    </small>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-3 text-center text-muted small">No profiles found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}