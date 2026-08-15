'use client';
import React, { useState } from 'react';
import { 
  Sparkles, Eye, Heart, Share2, Tag, Calendar, Briefcase, 
  User, ExternalLink, X, ChevronRight, Layers, Film, Camera 
} from 'lucide-react';

export default function PortfolioShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    'All',
    'Editorial',
    'Runway',
    'Campaigns',
    'Photoshoots',
    'Branding',
    'Fashion Films',
    'Personal Projects'
  ];

  const portfolioProjects = [
    {
      id: 'paris-fw-aw26',
      title: 'Paris FW — AW26 Editorial',
      category: 'Editorial',
      coverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop'
      ],
      client: 'Maison X',
      role: 'Lead Stylist',
      date: 'Autumn/Winter 2026',
      description: 'An avant-garde exploration of structured silhouettes and sustainable silk draping, photographed on location in Le Marais, Paris.',
      team: [
        { role: 'Photographer', name: 'Alex Morgan' },
        { role: 'Makeup Artist', name: 'Sarah Lee' },
        { role: 'Model', name: 'Elena Rostova' },
        { role: 'Creative Director', name: 'Khanak Kasana' }
      ],
      tags: ['Couture', 'Paris Fashion Week', 'High Fashion', 'Silk Draping'],
      likes: 840,
      views: '5.2k'
    },
    {
      id: 'resort-2026-campaign',
      title: 'Aura — Resort 2026 Campaign',
      category: 'Campaigns',
      coverImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop'
      ],
      client: 'Aura Luxury Apparel',
      role: 'Creative Director',
      date: 'Summer 2026',
      description: 'Global campaign shoot for Aura Luxury’s Resort collection, celebrating minimalist resortwear against a Mediterranean coastal backdrop.',
      team: [
        { role: 'Lead Director', name: 'Khanak Kasana' },
        { role: 'Videographer', name: 'Daniel Craig' },
        { role: 'Stylist', name: 'Marcello V.' }
      ],
      tags: ['Resortwear', 'Luxury', 'Summer Campaign', 'Coastal'],
      likes: 1210,
      views: '9.4k'
    },
    {
      id: 'milan-runway-ss26',
      title: 'Backstage Curation — Milan Runway SS26',
      category: 'Runway',
      coverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop'
      ],
      client: 'Studio Valentino',
      role: 'Runway Stylist',
      date: 'Spring 2026',
      description: 'Backstage styling and quick-change runway management for 42 models during Milan Fashion Week.',
      team: [
        { role: 'Head Stylist', name: 'Khanak Kasana' },
        { role: 'Casting Director', name: 'Chloe Dupuis' }
      ],
      tags: ['Milan Fashion Week', 'Runway', 'Backstage', 'Couture'],
      likes: 620,
      views: '3.8k'
    },
    {
      id: 'velvet-monochrome-film',
      title: 'Velvet Shadows — Short Fashion Film',
      category: 'Fashion Films',
      coverImage: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1200&auto=format&fit=crop'
      ],
      client: 'Vogue Motion',
      role: 'Visual Director & Stylist',
      date: 'Early 2026',
      description: 'A cinematic fashion short film capturing movement and velvet textures under dramatic monochrome lighting.',
      team: [
        { role: 'Director', name: 'Khanak Kasana' },
        { role: 'Director of Photography', name: 'Julian Vance' },
        { role: 'Colorist', name: 'Studio Hue' }
      ],
      tags: ['Fashion Film', 'Monochrome', 'Cinematic', 'Motion'],
      likes: 1490,
      views: '12.1k'
    }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-vh-100 py-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container px-3 px-lg-5">
        
        {/* HEADER SECTION */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 pb-3 border-bottom">
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <Sparkles size={20} style={{ color: '#8C533C' }} />
              <span className="badge rounded-pill bg-opacity-10 text-uppercase fw-bold px-3 py-2" style={{ backgroundColor: '#8C533C1A', color: '#8C533C' }}>
                Creative Archives
              </span>
            </div>
            <h2 className="fw-bold text-dark mb-0">Portfolio Showcase</h2>
            <p className="text-muted small mb-0">Explore curated editorial, runway, and campaign direction by fashion leaders.</p>
          </div>

          <div className="mt-3 mt-md-0">
            <button className="btn text-white rounded-pill px-4 py-2 fw-bold shadow-sm d-flex align-items-center gap-2" style={{ backgroundColor: '#8C533C' }}>
              + Upload Project
            </button>
          </div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="d-flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn btn-sm rounded-pill px-3 py-2 fw-bold text-nowrap transition ${
                selectedCategory === cat 
                  ? 'text-white shadow-sm' 
                  : 'btn-white bg-white text-dark border'
              }`}
              style={selectedCategory === cat ? { backgroundColor: '#8C533C' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PORTFOLIO GRID */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div 
                onClick={() => setActiveProject(project)}
                className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white h-100 position-relative"
                style={{ cursor: 'pointer' }}
              >
                <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
                  <img 
                    src={project.coverImage} 
                    alt={project.title} 
                    className="w-100 h-100 object-fit-cover"
                  />
                  <span className="position-absolute top-0 start-0 m-3 badge bg-dark bg-opacity-75 rounded-pill px-3 py-1">
                    {project.category}
                  </span>
                  
                  <div className="position-absolute bottom-0 start-0 end-0 p-3 text-white d-flex justify-content-between align-items-center" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                    <span className="small fw-medium d-flex align-items-center gap-1"><Eye size={14} /> {project.views}</span>
                    <span className="small fw-medium d-flex align-items-center gap-1"><Heart size={14} className="text-danger" fill="currentColor" /> {project.likes}</span>
                  </div>
                </div>

                <div className="p-3">
                  <span className="text-muted small d-block mb-1">{project.role} • {project.client}</span>
                  <h6 className="fw-bold text-dark mb-2 text-truncate">{project.title}</h6>
                  
                  <div className="d-flex flex-wrap gap-1 mt-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="badge bg-light text-secondary border fw-normal rounded-pill" style={{ fontSize: '0.7rem' }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* DETAILED PROJECT MODAL */}
      {activeProject && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-2 p-md-4" style={{ backgroundColor: 'rgba(0,0,0,0.75)', zIndex: 1060 }}>
          <div className="bg-white rounded-4 shadow-lg w-100 h-100 overflow-hidden d-flex flex-column position-relative" style={{ maxWidth: '1000px', maxHeight: '90vh' }}>
            
            <div className="p-3 border-bottom d-flex align-items-center justify-content-between bg-white z-2">
              <div>
                <span className="badge rounded-pill bg-opacity-10 text-uppercase fw-bold px-3 py-1 me-2" style={{ backgroundColor: '#8C533C1A', color: '#8C533C' }}>
                  {activeProject.category}
                </span>
                <span className="text-muted small">{activeProject.date}</span>
              </div>
              
              <button onClick={() => setActiveProject(null)} className="btn btn-light btn-sm rounded-circle p-2">
                <X size={20} />
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-grow-1">
              <div className="row g-4">
                
                <div className="col-lg-7">
                  <div className="d-flex flex-column gap-3">
                    {activeProject.gallery.map((imgUrl, idx) => (
                      <img 
                        key={idx} 
                        src={imgUrl} 
                        alt={`${activeProject.title} frame ${idx + 1}`} 
                        className="w-100 rounded-4 object-fit-cover shadow-sm"
                        style={{ maxHeight: '500px' }}
                      />
                    ))}
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="sticky-top" style={{ top: '10px' }}>
                    <h3 className="fw-bold text-dark mb-2">{activeProject.title}</h3>
                    
                    <div className="card bg-light border-0 rounded-4 p-3 mb-3">
                      <div className="row g-2 text-dark small">
                        <div className="col-6">
                          <span className="text-muted d-block">Role</span>
                          <strong className="fw-bold">{activeProject.role}</strong>
                        </div>
                        <div className="col-6">
                          <span className="text-muted d-block">Client / Brand</span>
                          <strong className="fw-bold">{activeProject.client}</strong>
                        </div>
                      </div>
                    </div>

                    <h6 className="fw-bold text-dark mb-2">Project Brief</h6>
                    <p className="text-secondary small leading-relaxed mb-4">{activeProject.description}</p>

                    <h6 className="fw-bold text-dark mb-2 d-flex align-items-center gap-2">
                      <User size={16} style={{ color: '#8C533C' }} /> Creative Credits
                    </h6>
                    <ul className="list-group list-group-flush mb-4 small">
                      {activeProject.team.map((member, idx) => (
                        <li key={idx} className="list-group-item bg-transparent px-0 py-2 d-flex justify-content-between border-light">
                          <span className="text-muted">{member.role}</span>
                          <strong className="text-dark">{member.name}</strong>
                        </li>
                      ))}
                    </ul>

                    <h6 className="fw-bold text-dark mb-2">Tags</h6>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {activeProject.tags.map(tag => (
                        <span key={tag} className="badge bg-white text-dark border px-3 py-2 rounded-pill small">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-2">
                      <button className="btn text-white rounded-pill flex-grow-1 fw-bold py-2 shadow-sm d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#8C533C' }}>
                        <Heart size={16} /> Applaud Project ({activeProject.likes})
                      </button>
                      <button className="btn btn-outline-secondary rounded-circle p-2">
                        <Share2 size={18} />
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}