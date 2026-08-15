'use client';
import React, { useState } from 'react';
import { 
  Search, MapPin, Briefcase, Star, CheckCircle, Clock, 
  Filter, Sparkles, MessageSquare, Send, Calendar, Bookmark, Eye 
} from 'lucide-react';

export default function HireTalentPage() {
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Mumbai');
  
  // Filter Checkboxes/Radios
  const [selectedProfessions, setSelectedProfessions] = useState(['Stylist']);
  const [selectedExperience, setSelectedExperience] = useState('All'); // All | Entry | Mid | Senior
  const [selectedAvailability, setSelectedAvailability] = useState([]); // Available now | Freelance | Full-time

  // Sample Talent Database
  const [talentList, setTalentList] = useState([
    {
      id: 'talent-1',
      name: 'Khanak Kasana',
      title: 'Lead Fashion Stylist & Creative Director',
      location: 'Mumbai, India',
      rating: 4.9,
      reviewsCount: 38,
      verified: true,
      experienceLevel: 'Senior',
      experienceYears: '6+ Years',
      dayRate: '$800 - $1,200',
      availability: ['Available now', 'Freelance', 'Full-time'],
      profession: 'Stylist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
      recentClients: ['Maison X', 'Vogue India', 'Studio Valentino'],
      featuredWork: [
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600',
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600'
      ],
      tags: ['Couture', 'Editorial', 'High Fashion', 'Sustainable Silk']
    },
    {
      id: 'talent-2',
      name: 'Alex Morgan',
      title: 'High-Fashion & Commercial Photographer',
      location: 'Mumbai, India',
      rating: 5.0,
      reviewsCount: 52,
      verified: true,
      experienceLevel: 'Senior',
      experienceYears: '8+ Years',
      dayRate: '$1,500',
      availability: ['Available now', 'Freelance'],
      profession: 'Photographer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
      recentClients: ['Elle Magazine', 'Aura Luxury', 'Guerlain'],
      featuredWork: [
        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600',
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=600'
      ],
      tags: ['Studio Lighting', 'Capture One', 'Runway', 'Campaigns']
    },
    {
      id: 'talent-3',
      name: 'Sarah Lee',
      title: 'Editorial & Backstage Makeup Lead',
      location: 'Delhi NCR, India',
      rating: 4.8,
      reviewsCount: 24,
      verified: false,
      experienceLevel: 'Mid',
      experienceYears: '4+ Years',
      dayRate: '$600',
      availability: ['Freelance'],
      profession: 'Makeup Artist',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
      recentClients: ['Lakmé Fashion Week', 'Nykaa Luxury'],
      featuredWork: [
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600'
      ],
      tags: ['SFX Makeup', 'Glow Skin', 'Runway Look', 'Bridal Couture']
    },
    {
      id: 'talent-4',
      name: 'Rohan Mehta',
      title: 'Minimalist Apparel & Runway Designer',
      location: 'Mumbai, India',
      rating: 4.7,
      reviewsCount: 19,
      verified: true,
      experienceLevel: 'Mid',
      experienceYears: '3+ Years',
      dayRate: '$900',
      availability: ['Full-time', 'Freelance'],
      profession: 'Designer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
      recentClients: ['FabIndia Luxe', 'Urban Atelier'],
      featuredWork: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600'
      ],
      tags: ['Pattern Making', 'Draping', 'Sustainable Fabrics']
    }
  ]);

  // Handle Profession Checkbox Toggle
  const toggleProfession = (prof) => {
    if (selectedProfessions.includes(prof)) {
      setSelectedProfessions(selectedProfessions.filter(p => p !== prof));
    } else {
      setSelectedProfessions([...selectedProfessions, prof]);
    }
  };

  // Handle Availability Checkbox Toggle
  const toggleAvailability = (avail) => {
    if (selectedAvailability.includes(avail)) {
      setSelectedAvailability(selectedAvailability.filter(a => a !== avail));
    } else {
      setSelectedAvailability([...selectedAvailability, avail]);
    }
  };

  // Filter Logic
  const filteredTalent = talentList.filter(talent => {
    const matchesSearch = talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          talent.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = !selectedLocation || talent.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    const matchesProfession = selectedProfessions.length === 0 || selectedProfessions.includes(talent.profession);
    
    const matchesExperience = selectedExperience === 'All' || talent.experienceLevel === selectedExperience;
    
    const matchesAvailability = selectedAvailability.length === 0 || 
      selectedAvailability.some(a => talent.availability.includes(a));

    return matchesSearch && matchesLocation && matchesProfession && matchesExperience && matchesAvailability;
  });

  return (
    <div className="min-vh-100 py-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container px-3 px-lg-5">
        
        {/* HEADER SECTION */}
        <div className="bg-white rounded-4 p-4 shadow-sm border mb-4">
          <div className="d-flex align-items-center gap-2 mb-2">
            <Sparkles size={20} style={{ color: '#8C533C' }} />
            <span className="badge rounded-pill bg-opacity-10 text-uppercase fw-bold px-3 py-1" style={{ backgroundColor: '#8C533C1A', color: '#8C533C' }}>
              StyleHive Recruiter Directory
            </span>
          </div>
          <h2 className="fw-bold text-dark mb-1">Find & Hire Creative Professionals</h2>
          <p className="text-muted small mb-3">Book top-tier stylists, photographers, creative directors, and designers for campaigns and projects.</p>

          {/* SEARCH BAR */}
          <div className="row g-2">
            <div className="col-md-6">
              <div className="input-group bg-light rounded-pill border overflow-hidden px-2 py-1">
                <span className="input-group-text bg-transparent border-0 text-muted ps-2"><Search size={18} /></span>
                <input 
                  type="text" 
                  className="form-control bg-transparent border-0 shadow-none" 
                  placeholder="e.g. Fashion Stylist, Editorial Photographer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="input-group bg-light rounded-pill border overflow-hidden px-2 py-1">
                <span className="input-group-text bg-transparent border-0 text-muted ps-2"><MapPin size={18} /></span>
                <input 
                  type="text" 
                  className="form-control bg-transparent border-0 shadow-none" 
                  placeholder="Location (e.g. Mumbai, Delhi, Paris)"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-2">
              <button className="btn text-white rounded-pill w-100 h-100 fw-bold shadow-sm" style={{ backgroundColor: '#8C533C' }}>
                Search Talent
              </button>
            </div>
          </div>
        </div>

        {/* MAIN MARKETPLACE CONTENT */}
        <div className="row g-4">
          
          {/* LEFT SIDEBAR FILTERS */}
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white sticky-top" style={{ top: '20px' }}>
              <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                <h6 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                  <Filter size={16} /> Filters
                </h6>
                <button 
                  onClick={() => {
                    setSelectedProfessions([]);
                    setSelectedExperience('All');
                    setSelectedAvailability([]);
                    setSelectedLocation('');
                  }} 
                  className="btn btn-link btn-sm text-decoration-none p-0 extra-small fw-semibold text-muted"
                >
                  Reset
                </button>
              </div>

              {/* FILTER 1: PROFESSION */}
              <div className="mb-4">
                <label className="fw-bold text-dark small d-block mb-2">Profession</label>
                {['Stylist', 'Photographer', 'Designer', 'Makeup Artist'].map(prof => (
                  <div key={prof} className="form-check mb-2">
                    <input 
                      type="checkbox" 
                      className="form-check-input shadow-none" 
                      id={`prof-${prof}`}
                      checked={selectedProfessions.includes(prof)}
                      onChange={() => toggleProfession(prof)}
                    />
                    <label className="form-check-label small text-secondary" htmlFor={`prof-${prof}`}>
                      {prof}
                    </label>
                  </div>
                ))}
              </div>

              {/* FILTER 2: EXPERIENCE */}
              <div className="mb-4">
                <label className="fw-bold text-dark small d-block mb-2">Experience</label>
                {['All', 'Entry', 'Mid', 'Senior'].map(exp => (
                  <div key={exp} className="form-check mb-2">
                    <input 
                      type="radio" 
                      name="experienceRadio"
                      className="form-check-input shadow-none" 
                      id={`exp-${exp}`}
                      checked={selectedExperience === exp}
                      onChange={() => setSelectedExperience(exp)}
                    />
                    <label className="form-check-label small text-secondary" htmlFor={`exp-${exp}`}>
                      {exp === 'All' ? 'Any Experience' : `${exp} Level`}
                    </label>
                  </div>
                ))}
              </div>

              {/* FILTER 3: AVAILABILITY */}
              <div>
                <label className="fw-bold text-dark small d-block mb-2">Availability</label>
                {['Available now', 'Freelance', 'Full-time'].map(avail => (
                  <div key={avail} className="form-check mb-2">
                    <input 
                      type="checkbox" 
                      className="form-check-input shadow-none" 
                      id={`avail-${avail}`}
                      checked={selectedAvailability.includes(avail)}
                      onChange={() => toggleAvailability(avail)}
                    />
                    <label className="form-check-label small text-secondary" htmlFor={`avail-${avail}`}>
                      {avail}
                    </label>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT TALENT CARDS LIST */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted small">Showing <strong>{filteredTalent.length}</strong> verified professionals</span>
            </div>

            <div className="d-flex flex-column gap-4">
              {filteredTalent.length === 0 ? (
                <div className="card border-0 shadow-sm rounded-4 p-5 text-center bg-white">
                  <p className="text-muted mb-0">No talent matches your selected criteria. Try adjusting your filters.</p>
                </div>
              ) : (
                filteredTalent.map((talent) => (
                  <div key={talent.id} className="card border-0 shadow-sm rounded-4 p-4 bg-white hover-lift transition">
                    <div className="row g-4">
                      
                      {/* Left: Avatar & Profile Info */}
                      <div className="col-md-7">
                        <div className="d-flex gap-3">
                          <img 
                            src={talent.avatar} 
                            alt={talent.name} 
                            className="rounded-4 object-fit-cover shadow-sm"
                            style={{ width: '80px', height: '80px' }}
                          />
                          <div>
                            <div className="d-flex align-items-center gap-2">
                              <h5 className="fw-bold text-dark mb-0">{talent.name}</h5>
                              {talent.verified && (
                                <CheckCircle size={16} className="text-primary" fill="currentColor" />
                              )}
                            </div>

                            <p className="text-muted small mb-1">{talent.title}</p>

                            <div className="d-flex align-items-center gap-3 text-muted extra-small flex-wrap">
                              <span className="d-flex align-items-center gap-1"><MapPin size={12} /> {talent.location}</span>
                              <span>•</span>
                              <span className="d-flex align-items-center gap-1 text-warning fw-bold">
                                <Star size={12} fill="currentColor" /> {talent.rating} ({talent.reviewsCount})
                              </span>
                              <span>•</span>
                              <span className="fw-semibold text-dark">{talent.experienceYears}</span>
                            </div>
                          </div>
                        </div>

                        {/* Recent Clients */}
                        <div className="mt-3">
                          <span className="text-muted extra-small d-block fw-bold text-uppercase mb-1">Worked With</span>
                          <div className="d-flex gap-2 flex-wrap">
                            {talent.recentClients.map(client => (
                              <span key={client} className="badge bg-light text-dark border fw-normal rounded-pill" style={{ fontSize: '0.75rem' }}>
                                {client}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Skill Tags & Rate */}
                        <div className="mt-3 pt-3 border-top d-flex justify-content-between align-items-center flex-wrap gap-2">
                          <div className="d-flex gap-1 flex-wrap">
                            {talent.availability.map(avail => (
                              <span key={avail} className={`badge rounded-pill ${avail === 'Available now' ? 'bg-success bg-opacity-10 text-success' : 'bg-secondary bg-opacity-10 text-secondary'}`} style={{ fontSize: '0.7rem' }}>
                                ● {avail}
                              </span>
                            ))}
                          </div>

                          <div className="text-end">
                            <span className="text-muted extra-small d-block">Day Rate</span>
                            <span className="fw-bold text-dark small">{talent.dayRate}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Portfolio Preview & Actions */}
                      <div className="col-md-5 d-flex flex-column justify-content-between border-start-md ps-md-4">
                        <div>
                          <span className="text-muted extra-small d-block fw-bold text-uppercase mb-2">Featured Visuals</span>
                          <div className="row g-2">
                            {talent.featuredWork.map((img, i) => (
                              <div key={i} className="col-6">
                                <img 
                                  src={img} 
                                  alt="Portfolio preview" 
                                  className="w-100 rounded-3 object-fit-cover shadow-sm"
                                  style={{ height: '110px' }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="d-flex gap-2 mt-3">
                          <button className="btn text-white rounded-pill flex-grow-1 fw-bold py-2 btn-sm shadow-sm d-flex align-items-center justify-content-center gap-1" style={{ backgroundColor: '#8C533C' }}>
                            <MessageSquare size={14} /> Hire / Contact
                          </button>
                          <button className="btn btn-outline-dark rounded-pill px-3 py-2 btn-sm fw-bold">
                            View Portfolio
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                ))
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}