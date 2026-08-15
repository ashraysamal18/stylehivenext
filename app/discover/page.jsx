'use client';
import React, { useState } from 'react';
import { 
  Sparkles, Search, Compass, TrendingUp, Star, Eye, Heart, 
  ChevronRight, Bookmark, MapPin, CheckCircle, ArrowUpRight, Camera, Scissors, Building2
} from 'lucide-react';

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All', 'Trending Projects', 'Popular Editorials', 'New Designers', 
    'Rising Photographers', 'Featured Studios'
  ];

  // 1. Trending Creatives
  const trendingCreatives = [
    {
      name: 'Elena Rostova',
      role: 'Runway Stylist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
      location: 'Mumbai',
      badge: '🔥 Top 1%'
    },
    {
      name: 'Alex Morgan',
      role: 'Campaign Photographer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      location: 'Delhi',
      badge: '⭐ Trending'
    },
    {
      name: 'Sarah Lee',
      role: 'Editorial MUA',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
      location: 'Paris',
      badge: '✨ Rising'
    },
    {
      name: 'Rohan Mehta',
      role: 'Couture Designer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
      location: 'Milan',
      badge: '🔥 Popular'
    }
  ];

  // 2. Trending Projects / Visual Grid (Behance Style)
  const trendingProjects = [
    {
      id: 'proj-1',
      title: 'Monochrome Silk & Shadows',
      creator: 'Elena Rostova',
      type: 'Popular Editorial',
      likes: '2.4k',
      views: '18k',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600'
    },
    {
      id: 'proj-2',
      title: 'Aura Luxury Autumn Campaign',
      creator: 'Alex Morgan',
      type: 'Rising Photographer',
      likes: '4.1k',
      views: '32k',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600'
    },
    {
      id: 'proj-3',
      title: 'Glass Skin & Avant-Garde Liner',
      creator: 'Sarah Lee',
      type: 'Popular Editorial',
      likes: '1.8k',
      views: '12k',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600'
    },
    {
      id: 'proj-4',
      title: 'Minimalist Draped Outerwear',
      creator: 'Rohan Mehta',
      type: 'New Designer',
      likes: '3.1k',
      views: '24k',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600'
    }
  ];

  // 3. Featured Studios & Workspaces
  const featuredStudios = [
    {
      name: 'Lumière Daylight Studio',
      location: 'Mumbai, Lower Parel',
      rate: '₹12,000 / Day',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=500',
      specs: '2,500 sq ft • Cyclorama • Profoto Lighting'
    },
    {
      name: 'Atelier Noir Production Hub',
      location: 'Delhi, Okhla',
      rate: '₹18,000 / Day',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500',
      specs: '3,800 sq ft • Green Screen • Runway Set'
    }
  ];

  // 4. Trending Skills
  const trendingSkills = [
    { name: 'Couture Sourcing', count: '1.2k posts' },
    { name: 'Tethered Shooting', count: '890 posts' },
    { name: 'Glow Skin Editorial', count: '2.1k posts' },
    { name: 'Runway Choreography', count: '640 posts' },
    { name: 'Avant-Garde Draping', count: '1.5k posts' },
    { name: 'High-Fashion Retouching', count: '3.4k posts' }
  ];

  return (
    <div className="min-vh-100 py-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container px-3 px-lg-5">
        
        {/* DISCOVER HERO SEARCH */}
        <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm border mb-5 text-center position-relative overflow-hidden">
          <div className="max-w-2xl mx-auto position-relative z-1">
            <div className="d-inline-flex align-items-center gap-2 mb-2 px-3 py-1 rounded-pill bg-opacity-10" style={{ backgroundColor: '#8C533C1A', color: '#8C533C' }}>
              <Compass size={16} />
              <span className="extra-small fw-bold text-uppercase">Exploration Hub</span>
            </div>

            <h2 className="fw-bold text-dark mb-2 display-6">Discover Fashion Excellence</h2>
            <p className="text-muted small mb-4">Explore high-fashion editorials, trending portfolio drops, new designers, and top creative studios worldwide.</p>

            {/* SEARCH INPUT */}
            <div className="input-group bg-light rounded-pill border overflow-hidden p-1 shadow-sm">
              <span className="input-group-text bg-transparent border-0 text-muted ps-3"><Search size={20} /></span>
              <input 
                type="text" 
                className="form-control bg-transparent border-0 shadow-none ps-2" 
                placeholder="Search editorials, designers, photographers, or studios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn text-white rounded-pill px-4 fw-bold shadow-sm" style={{ backgroundColor: '#8C533C' }}>
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="d-flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm rounded-pill px-4 py-2 fw-bold text-nowrap transition ${
                activeCategory === cat 
                  ? 'text-white shadow-sm' 
                  : 'btn-white bg-white text-dark border'
              }`}
              style={activeCategory === cat ? { backgroundColor: '#8C533C' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SECTION 1: TRENDING CREATIVES */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                <TrendingUp size={18} style={{ color: '#8C533C' }} /> Trending Creatives
              </h5>
              <span className="text-muted extra-small">Top-performing talent across StyleHive this week</span>
            </div>
            <a href="/hire" className="text-decoration-none fw-bold small d-flex align-items-center gap-1" style={{ color: '#8C533C' }}>
              View All <ChevronRight size={16} />
            </a>
          </div>

          <div className="row g-3">
            {trendingCreatives.map((creative, idx) => (
              <div key={idx} className="col-6 col-md-3">
                <div className="card border-0 shadow-sm rounded-4 p-3 bg-white text-center hover-lift transition h-100">
                  <div className="position-relative mx-auto mb-2" style={{ width: '70px', height: '70px' }}>
                    <img 
                      src={creative.avatar} 
                      alt={creative.name} 
                      className="w-100 h-100 rounded-circle object-fit-cover border" 
                    />
                  </div>
                  <h6 className="fw-bold text-dark mb-0 small text-truncate">{creative.name}</h6>
                  <span className="text-muted extra-small d-block mb-2">{creative.role} • {creative.location}</span>
                  <span className="badge bg-light text-dark border rounded-pill extra-small fw-semibold py-1">
                    {creative.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: TRENDING PROJECTS & EDITORIALS (PINTEREST / BEHANCE GRID) */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                <Sparkles size={18} style={{ color: '#8C533C' }} /> Popular Projects & Editorials
              </h5>
              <span className="text-muted extra-small">Curated campaign collections and portfolio drops</span>
            </div>
          </div>

          <div className="row g-4">
            {trendingProjects.map((project) => (
              <div key={project.id} className="col-12 col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white hover-lift transition h-100">
                  <div className="position-relative" style={{ height: '280px' }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-100 h-100 object-fit-cover" 
                    />
                    <button className="btn btn-light btn-sm rounded-circle position-absolute top-0 end-0 m-3 p-2 shadow-sm border">
                      <Bookmark size={16} />
                    </button>
                    <span className="badge bg-dark bg-opacity-75 rounded-pill position-absolute bottom-0 start-0 m-3 extra-small fw-normal">
                      {project.type}
                    </span>
                  </div>

                  <div className="p-3">
                    <h6 className="fw-bold text-dark mb-1 text-truncate">{project.title}</h6>
                    <span className="text-muted extra-small d-block mb-3">By <strong>{project.creator}</strong></span>

                    <div className="d-flex justify-content-between align-items-center pt-2 border-top extra-small text-muted fw-bold">
                      <span className="d-flex align-items-center gap-1"><Heart size={14} className="text-danger" fill="currentColor" /> {project.likes}</span>
                      <span className="d-flex align-items-center gap-1"><Eye size={14} /> {project.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: FEATURED STUDIOS & TRENDING SKILLS */}
        <div className="row g-4">
          
          {/* FEATURED STUDIOS */}
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h5 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                  <Building2 size={18} style={{ color: '#8C533C' }} /> Featured Production Studios
                </h5>
                <span className="text-muted extra-small">Book verified studio spaces for campaign shoots</span>
              </div>
            </div>

            <div className="row g-3">
              {featuredStudios.map((studio, idx) => (
                <div key={idx} className="col-12 col-md-6">
                  <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white hover-lift transition h-100">
                    <img src={studio.image} alt={studio.name} className="w-100 object-fit-cover" style={{ height: '160px' }} />
                    <div className="p-3">
                      <h6 className="fw-bold text-dark mb-1">{studio.name}</h6>
                      <span className="text-muted extra-small d-block mb-2"><MapPin size={12} /> {studio.location}</span>
                      <p className="text-secondary extra-small mb-3">{studio.specs}</p>
                      <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                        <span className="fw-bold text-dark small">{studio.rate}</span>
                        <button className="btn btn-outline-dark btn-sm rounded-pill extra-small fw-bold px-3">
                          Book Studio
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TRENDING SKILLS & HASHTAGS */}
          <div className="col-lg-4">
            <h5 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
              <Sparkles size={18} style={{ color: '#8C533C' }} /> Trending Skills & Tags
            </h5>

            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
              <div className="d-flex flex-wrap gap-2">
                {trendingSkills.map((skill, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="btn btn-light border btn-sm rounded-3 text-start d-flex justify-content-between align-items-center w-100 p-2 hover-lift transition text-decoration-none"
                  >
                    <span className="fw-semibold text-dark small">#{skill.name}</span>
                    <span className="text-muted extra-small">{skill.count}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}