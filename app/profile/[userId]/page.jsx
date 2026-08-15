'use client';
import React, { useState } from 'react';
import { 
  MapPin, CheckCircle, Briefcase, Calendar, Award, Star, 
  ExternalLink, Mail, MessageSquare, Plus, Globe, 
  Sparkles, Clock, DollarSign, Download, Share2 
} from 'lucide-react';

export default function CreativeProfilePage() {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [showHireModal, setShowHireModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  // Sample Creative Profile Data
  const profile = {
    name: 'Khanak Kasana',
    verified: true,
    profession: 'Fashion Stylist & Creative Director',
    category: 'Stylist',
    location: 'Mumbai, India',
    bio: 'Passionate Creative Director & Runway Stylist with over 6 years of experience shaping visual narratives for global luxury houses and high-fashion editorial publications. Specialized in avant-garde draping and sustainable couture concepts.',
    availability: 'Available for Projects',
    expectedRate: '$850 / Day',
    experienceYears: '6+ Years',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
    
    skills: ['Editorial Styling', 'Runway Direction', 'Brand Campaign Strategy', 'Avant-Garde Draping', 'Visual Merchandising', 'Casting Direction'],
    tools: ['Adobe Photoshop', 'Capture One', 'CLO 3D', 'Figma', 'Procreate', 'Lightroom'],
    
    socials: {
      website: 'https://khanakkasana.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    },

    brands: [
      { name: 'Vogue India' },
      { name: 'Sabyasachi' },
      { name: 'Harper\'s Bazaar' },
      { name: 'Lakmé Fashion Week' },
      { name: 'ELLE' }
    ],

    portfolio: [
      {
        id: 1,
        title: 'Monochrome Echoes - Fall Couture',
        category: 'Editorial',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
        likes: 342,
        views: '2.4k'
      },
      {
        id: 2,
        title: 'Resort Campaign',
        category: 'Campaign',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop',
        likes: 512,
        views: '4.1k'
      },
      {
        id: 3,
        title: 'Backstage Paris Fashion Week',
        category: 'Runway',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
        likes: 219,
        views: '1.8k'
      },
      {
        id: 4,
        title: 'Minimalist Silk Concepts',
        category: 'Editorial',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
        likes: 420,
        views: '3.0k'
      }
    ],

    experiences: [
      {
        role: 'Senior Creative Director',
        company: 'Studio Kasana Visuals',
        period: '2023 - Present',
        description: 'Leading creative direction and visual concept development for luxury e-commerce and runway shows.'
      },
      {
        role: 'Lead Fashion Stylist',
        company: 'Vogue India (Freelance)',
        period: '2021 - 2023',
        description: 'Curated over 18 print cover stories and celebrity editorial spreads.'
      }
    ],

    education: [
      {
        degree: 'Bachelor of Design in Fashion Communication',
        institution: 'National Institute of Fashion Technology (NIFT)',
        year: '2016 - 2020'
      }
    ],

    testimonials: [
      {
        quote: 'Khanak’s editorial vision elevated our entire Autumn collection. Her attention to silhouette and texture is unparalleled.',
        author: 'Marcello V.',
        title: 'Creative Director, Milan',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop'
      },
      {
        quote: 'Extremely efficient, collaborative, and brings unmatched energy backstage on high-stress runway shows.',
        author: 'Elena Rostova',
        title: 'Senior Stylist',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop'
      }
    ]
  };

  const categories = ['All', 'Editorial', 'Campaign', 'Runway'];

  const filteredPortfolio = activeFilter === 'All' 
    ? profile.portfolio 
    : profile.portfolio.filter(item => item.category === activeFilter);

  return (
    <div className="min-vh-100 pb-5" style={{ backgroundColor: '#F8F9FA' }}>
      
      {/* 1. COVER IMAGE & PROFILE HEADER */}
      <div className="position-relative bg-dark" style={{ height: '280px' }}>
        <img 
          src={profile.coverImage} 
          alt="Cover" 
          className="w-100 h-100 object-fit-cover opacity-75"
        />
        <div className="position-absolute top-0 end-0 p-3 d-flex gap-2">
          <button className="btn btn-light btn-sm rounded-circle shadow-sm"><Share2 size={16} /></button>
          <button className="btn btn-light btn-sm rounded-circle shadow-sm"><Download size={16} /></button>
        </div>
      </div>

      <div className="container px-3 px-lg-5" style={{ marginTop: '-70px' }}>
        <div className="card border-0 shadow-sm rounded-4 bg-white p-4 mb-4">
          <div className="row g-4 align-items-center">
            
            {/* Avatar */}
            <div className="col-auto">
              <div className="position-relative">
                <img 
                  src={profile.avatar} 
                  alt={profile.name} 
                  className="rounded-circle border border-4 border-white shadow-sm object-fit-cover" 
                  style={{ width: '130px', height: '130px' }}
                />
                <span className="position-absolute bottom-0 end-0 bg-success border border-2 border-white rounded-circle p-2" title="Available for projects"></span>
              </div>
            </div>

            {/* Profile Core Info */}
            <div className="col">
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <h3 className="fw-bold text-dark mb-0">{profile.name}</h3>
                {profile.verified && <CheckCircle size={20} className="text-primary" fill="#0d6efd" color="#ffffff" />}
                <span className="badge rounded-pill bg-opacity-10 px-3 py-2 text-capitalize fw-bold" style={{ backgroundColor: '#8C533C1A', color: '#8C533C' }}>
                  {profile.profession}
                </span>
              </div>

              <div className="d-flex align-items-center gap-3 text-secondary small mt-2 flex-wrap">
                <span className="d-flex align-items-center gap-1"><MapPin size={15} /> {profile.location}</span>
                <span className="d-flex align-items-center gap-1"><Clock size={15} /> {profile.experienceYears} Experience</span>
                <span className="d-flex align-items-center gap-1"><DollarSign size={15} /> {profile.expectedRate}</span>
                <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-2 py-1 small fw-medium">
                  {profile.availability}
                </span>
              </div>

              <p className="text-dark small mt-3 mb-0" style={{ maxWidth: '750px', lineHeight: '1.6' }}>
                {profile.bio}
              </p>
            </div>

            {/* Action Buttons & Social Links */}
            <div className="col-lg-auto d-flex flex-column gap-2">
              <button 
                onClick={() => setShowHireModal(true)}
                className="btn text-white rounded-pill fw-bold px-4 py-2 shadow-sm d-flex align-items-center justify-content-center gap-2"
                style={{ backgroundColor: '#8C533C' }}
              >
                <Mail size={18} /> Hire / Contact
              </button>
              
              <div className="d-flex gap-2 justify-content-center">
                <a href={profile.socials.website} target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm rounded-circle p-2" title="Website">
                  <Globe size={16} />
                </a>
                <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm rounded-circle p-2" title="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm rounded-circle p-2" title="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 2. NAVIGATION TABS */}
        <div className="d-flex border-bottom mb-4 bg-white px-3 rounded-4 shadow-sm">
          {['portfolio', 'experience', 'testimonials', 'about'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn border-0 py-3 px-4 fw-bold text-capitalize rounded-0 position-relative ${activeTab === tab ? 'text-dark' : 'text-muted'}`}
              style={activeTab === tab ? { borderBottom: '3px solid #8C533C', color: '#8C533C' } : {}}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3. TAB CONTENTS */}
        <div className="row g-4">
          
          {/* LEFT SIDEBAR (Skills, Software, Brands) */}
          <div className="col-lg-4">
            
            {/* Skills */}
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
              <h6 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                <Sparkles size={18} style={{ color: '#8C533C' }} /> Specialized Skills
              </h6>
              <div className="d-flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span key={skill} className="badge bg-light text-dark border fw-medium px-3 py-2 rounded-pill small">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Software & Tools */}
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
              <h6 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                <Briefcase size={18} style={{ color: '#8C533C' }} /> Software & Tools
              </h6>
              <div className="d-flex flex-wrap gap-2">
                {profile.tools.map((tool) => (
                  <span key={tool} className="badge rounded-pill px-3 py-2 small fw-normal border" style={{ backgroundColor: '#F4F5F7', color: '#333' }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Brands Worked With */}
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
              <h6 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                <Award size={18} style={{ color: '#8C533C' }} /> Brands Worked With
              </h6>
              <div className="d-flex flex-wrap gap-2">
                {profile.brands.map((brand) => (
                  <span key={brand.name} className="badge bg-white text-dark border px-3 py-2 rounded-3 fw-bold shadow-xs">
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* MAIN CONTENT AREA */}
          <div className="col-lg-8">
            
            {/* TAB: PORTFOLIO */}
            {activeTab === 'portfolio' && (
              <div>
                {/* Category Filters */}
                <div className="d-flex gap-2 mb-4">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`btn btn-sm rounded-pill px-3 py-2 fw-medium ${activeFilter === cat ? 'text-white' : 'btn-light border'}`}
                      style={activeFilter === cat ? { backgroundColor: '#8C533C' } : {}}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Portfolio Grid */}
                <div className="row g-3">
                  {filteredPortfolio.map((item) => (
                    <div key={item.id} className="col-md-6">
                      <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white h-100">
                        <div className="position-relative overflow-hidden" style={{ height: '260px' }}>
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-100 h-100 object-fit-cover"
                          />
                          <span className="position-absolute top-0 start-0 m-3 badge bg-dark bg-opacity-75 rounded-pill px-3 py-1">
                            {item.category}
                          </span>
                        </div>
                        <div className="p-3 d-flex justify-content-between align-items-center">
                          <h6 className="fw-bold text-dark mb-0 small">{item.title}</h6>
                          <small className="text-muted">{item.likes} Likes • {item.views}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: EXPERIENCE & EDUCATION */}
            {activeTab === 'experience' && (
              <div className="d-flex flex-column gap-4">
                {/* Work Experience */}
                <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                  <h5 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                    <Briefcase size={20} style={{ color: '#8C533C' }} /> Professional Work Experience
                  </h5>
                  <div className="d-flex flex-column gap-4">
                    {profile.experiences.map((exp, idx) => (
                      <div key={idx} className="border-start border-2 ps-3" style={{ borderColor: '#8C533C' }}>
                        <h6 className="fw-bold text-dark mb-1">{exp.role}</h6>
                        <span className="text-muted small d-block mb-2">{exp.company} • {exp.period}</span>
                        <p className="text-secondary small mb-0">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                  <h5 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                    <Calendar size={20} style={{ color: '#8C533C' }} /> Education & Qualifications
                  </h5>
                  {profile.education.map((edu, idx) => (
                    <div key={idx} className="border-start border-2 ps-3" style={{ borderColor: '#8C533C' }}>
                      <h6 className="fw-bold text-dark mb-1">{edu.degree}</h6>
                      <span className="text-muted small d-block">{edu.institution} • {edu.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: TESTIMONIALS */}
            {activeTab === 'testimonials' && (
              <div className="row g-3">
                {profile.testimonials.map((item, idx) => (
                  <div key={idx} className="col-12">
                    <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                      <div className="d-flex align-items-center gap-2 mb-3 text-warning">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                      </div>
                      <p className="fst-italic text-dark mb-4" style={{ fontSize: '0.95rem' }}>"{item.quote}"</p>
                      <div className="d-flex align-items-center gap-3">
                        <img src={item.avatar} alt={item.author} className="rounded-circle object-fit-cover" style={{ width: '45px', height: '45px' }} />
                        <div>
                          <h6 className="fw-bold text-dark mb-0 small">{item.author}</h6>
                          <small className="text-muted">{item.title}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB: ABOUT */}
            {activeTab === 'about' && (
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                <h5 className="fw-bold text-dark mb-3">About {profile.name}</h5>
                <p className="text-secondary leading-relaxed mb-4">{profile.bio}</p>
                
                <h6 className="fw-bold text-dark mb-2">Project Terms & Rates</h6>
                <ul className="text-secondary small mb-0 ps-3">
                  <li className="mb-1">Day rate starting at {profile.expectedRate}</li>
                  <li className="mb-1">Available for international travel with advance bookings</li>
                  <li>Open to creative editorial partnerships and brand campaigns</li>
                </ul>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* 4. HIRE / CONTACT MODAL */}
      {showHireModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
          <div className="bg-white rounded-4 p-4 shadow-lg border" style={{ width: '420px' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold text-dark mb-0">Book / Hire {profile.name}</h5>
              <button className="btn-close shadow-none" onClick={() => setShowHireModal(false)}></button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent successfully!'); setShowHireModal(false); }}>
              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Project Category</label>
                <select className="form-select rounded-3">
                  <option>Editorial Styling</option>
                  <option>Brand Campaign Direction</option>
                  <option>Runway Show Curation</option>
                  <option>Lookbook Consultation</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Estimated Date / Timeline</label>
                <input type="date" className="form-control rounded-3" required />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Project Brief / Message</label>
                <textarea className="form-control rounded-3" rows={3} placeholder="Describe project scope, location, budget..." required></textarea>
              </div>

              <button type="submit" className="btn text-white rounded-pill w-100 fw-bold py-2 shadow-sm" style={{ backgroundColor: '#8C533C' }}>
                Send Project Inquiry
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}