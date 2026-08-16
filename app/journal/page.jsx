'use client';
import React, { useState } from 'react';
import { 
  BookOpen, Sparkles, Clock, User, ArrowUpRight, 
  Bookmark, Search, Share2, TrendingUp, Mail 
} from 'lucide-react';

export default function StyleHiveJournalPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All', 'Fashion', 'Careers', 'Trends', 
    'Sustainability', 'Photography', 'Styling', 'Industry News'
  ];

  // Featured Hero Story
  const featuredArticle = {
    id: 'art-hero',
    title: 'The Evolution of High-Fashion Editorial Photography in 2026',
    excerpt: 'From hyper-realistic digital tethering to analog film revivals, top art directors share how fashion visuals are transforming across global campaigns.',
    category: 'Photography',
    author: 'Elena Vance',
    authorRole: 'Senior Fashion Editor',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    date: 'Aug 14, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200'
  };

  // Journal Articles Database
  const articles = [
    {
      id: 'art-1',
      title: 'How Freelance Fashion Stylists Land Studio Clients',
      excerpt: 'Actionable breakdown on pitching creative briefs, negotiating day rates, and structuring professional styling decks.',
      category: 'Careers',
      author: 'Priya Sharma',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
      date: 'Aug 12, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600'
    },
    {
      id: 'art-2',
      title: 'Monochrome & Minimalist Drapery: Autumn Trends',
      excerpt: 'A deep dive into structural silhouettes, raw silk textures, and neutral color palettes dominating the upcoming season.',
      category: 'Trends',
      author: 'Marcello V.',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      date: 'Aug 10, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600'
    },
    {
      id: 'art-3',
      title: 'Zero-Waste Pattern Making & Sustainable Couture',
      excerpt: 'How leading ateliers are eliminating textile waste while pushing the boundaries of high-end runway design.',
      category: 'Sustainability',
      author: 'Aria Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200',
      date: 'Aug 08, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600'
    },
    {
      id: 'art-4',
      title: 'Essential Camera & Lens Rigs for Runway Shoots',
      excerpt: 'A technical breakdown of autofocus tracking, fast prime lenses, and low-light exposure settings for live runway shows.',
      category: 'Photography',
      author: 'David Ross',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
      date: 'Aug 05, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600'
    },
    {
      id: 'art-5',
      title: 'Building Moodboards That Convince High-Budget Clients',
      excerpt: 'Learn how top creative directors structure color palettes, reference images, and narrative arcs in creative proposals.',
      category: 'Styling',
      author: 'Ashray S.',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      date: 'Aug 03, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600'
    },
    {
      id: 'art-6',
      title: 'Global Luxury Mergers & What They Mean for Creatives',
      excerpt: 'An industry overview of recent fashion house acquisitions and emerging opportunities for freelance talent.',
      category: 'Industry News',
      author: 'Condé Nast Desk',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
      date: 'Aug 01, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600'
    }
  ];

  // Filter Logic
  const filteredArticles = articles.filter(art => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const matchesQuery = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         art.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-vh-100 py-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container px-3 px-lg-5">
        
        {/* HEADER */}
        <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm border mb-4 text-center position-relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <div className="d-inline-flex align-items-center gap-2 mb-2 px-3 py-1 rounded-pill bg-opacity-10" style={{ backgroundColor: '#8C533C1A', color: '#8C533C' }}>
              <BookOpen size={16} />
              <span className="extra-small fw-bold text-uppercase">Editorial & News</span>
            </div>

            <h1 className="fw-bold text-dark mb-2 display-6">StyleHive Journal</h1>
            <p className="text-muted small mb-4">Insights, career guides, trend reports, and industry analysis for fashion professionals.</p>

            {/* SEARCH BAR */}
            <div className="input-group bg-light rounded-pill border overflow-hidden p-1 shadow-sm max-w-lg mx-auto">
              <span className="input-group-text bg-transparent border-0 text-muted ps-3"><Search size={18} /></span>
              <input 
                type="text" 
                className="form-control bg-transparent border-0 shadow-none ps-2 extra-small" 
                placeholder="Search articles, trends, career tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* CATEGORY TABS */}
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

        {/* FEATURED STORY HERO (Only shown when category is 'All' and no search query) */}
        {activeCategory === 'All' && !searchQuery && (
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white mb-5 hover-lift transition">
            <div className="row g-0 align-items-center">
              <div className="col-lg-7 position-relative" style={{ minHeight: '340px' }}>
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" 
                />
              </div>
              <div className="col-lg-5 p-4 p-md-5 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge bg-dark rounded-pill extra-small">{featuredArticle.category}</span>
                    <span className="text-muted extra-small"><Clock size={12} /> {featuredArticle.readTime}</span>
                  </div>
                  
                  <h3 className="fw-bold text-dark mb-3">{featuredArticle.title}</h3>
                  <p className="text-secondary small mb-4">{featuredArticle.excerpt}</p>
                </div>

                <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                  <div className="d-flex align-items-center gap-2">
                    <img src={featuredArticle.authorAvatar} alt={featuredArticle.author} className="rounded-circle" style={{ width: '36px', height: '36px' }} />
                    <div>
                      <strong className="d-block text-dark extra-small">{featuredArticle.author}</strong>
                      <span className="text-muted extra-small">{featuredArticle.authorRole}</span>
                    </div>
                  </div>

                  <a href="#" className="btn btn-outline-dark btn-sm rounded-pill px-3 py-1 extra-small fw-bold d-flex align-items-center gap-1">
                    Read Story <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ARTICLES GRID */}
        <div className="row g-4 mb-5">
          {filteredArticles.map((art) => (
            <div key={art.id} className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white hover-lift transition h-100 d-flex flex-column">
                
                {/* Article Image & Category */}
                <div className="position-relative" style={{ height: '220px' }}>
                  <img src={art.image} alt={art.title} className="w-100 h-100 object-fit-cover" />
                  <span className="badge bg-dark bg-opacity-75 rounded-pill position-absolute top-0 start-0 m-3 extra-small">
                    {art.category}
                  </span>
                  <button className="btn btn-light btn-sm rounded-circle position-absolute top-0 end-0 m-3 p-2 shadow-sm border">
                    <Bookmark size={15} />
                  </button>
                </div>

                {/* Article Info */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex align-items-center gap-2 text-muted extra-small mb-2">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span><Clock size={12} /> {art.readTime}</span>
                  </div>

                  <h5 className="fw-bold text-dark mb-2">{art.title}</h5>
                  <p className="text-secondary small mb-4 flex-grow-1 line-clamp-2">{art.excerpt}</p>

                  <div className="pt-3 border-top d-flex justify-content-between align-items-center mt-auto">
                    <div className="d-flex align-items-center gap-2">
                      <img src={art.authorAvatar} alt={art.author} className="rounded-circle" style={{ width: '28px', height: '28px' }} />
                      <span className="text-dark extra-small fw-bold">{art.author}</span>
                    </div>

                    <a href="#" className="text-decoration-none extra-small fw-bold d-flex align-items-center gap-1" style={{ color: '#8C533C' }}>
                      Read <ArrowUpRight size={14} />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* NEWSLETTER SUBSCRIPTION CARD */}
        <div className="rounded-4 p-4 p-md-5 text-white position-relative overflow-hidden shadow-sm" style={{ backgroundColor: '#8C533C' }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-2 mb-2">
                <Mail size={20} />
                <span className="extra-small fw-bold text-uppercase">Weekly Briefing</span>
              </div>
              <h3 className="fw-bold mb-2">Get StyleHive Journal in your inbox</h3>
              <p className="mb-0 text-white-50 small">Every Sunday: Top job openings, high-fashion editorial breakdowns, and industry news summaries.</p>
            </div>

            <div className="col-lg-5">
              <div className="input-group bg-white rounded-pill p-1 shadow-sm">
                <input 
                  type="email" 
                  className="form-control bg-transparent border-0 shadow-none ps-3 extra-small text-dark" 
                  placeholder="Enter your email address..." 
                />
                <button className="btn btn-dark rounded-pill px-4 fw-bold extra-small">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}