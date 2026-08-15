'use client';
import React, { useState } from 'react';
import { 
  Bookmark, Briefcase, Users, FolderPlus, MessageSquare, FileText, 
  Tag, Search, Trash2, ExternalLink, MapPin, IndianRupee, Sparkles, Heart, Eye
} from 'lucide-react';

export default function SavedItemsPage() {
  const [selectedFolder, setSelectedFolder] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample Saved Items Database
  const [savedItems, setSavedItems] = useState([
    {
      id: 'save-1',
      type: 'Jobs',
      title: 'Lead Fashion Stylist',
      subtitle: 'Vogue Studios • Mumbai, India',
      meta: 'Applied Aug 12 • $1,200 / Day',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
      link: '/jobs/app-101'
    },
    {
      id: 'save-2',
      type: 'Creatives',
      title: 'Alex Morgan',
      subtitle: 'Campaign Photographer • Senior Level',
      meta: 'Delhi, India • ★ 5.0 (52 reviews)',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      link: '/hire'
    },
    {
      id: 'save-3',
      type: 'Portfolio Projects',
      title: 'Monochrome Silk & Shadows',
      subtitle: 'By Elena Rostova',
      meta: '2.4k Likes • 18k Views',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600',
      link: '/discover'
    },
    {
      id: 'save-4',
      type: 'Posts',
      title: 'Behind the scenes from Paris Fashion Week',
      subtitle: 'Elena Rostova • Senior Runway Stylist',
      meta: 'Posted 2h ago • 248 Likes',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600',
      link: '/feed'
    },
    {
      id: 'save-5',
      type: 'Articles',
      title: 'The Evolution of High-Couture Draping in Modern Runway',
      subtitle: 'Published by StyleHive Insights',
      meta: '6 min read • Aug 10, 2026',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600',
      link: '#'
    },
    {
      id: 'save-6',
      type: 'Services',
      title: 'Editorial & Magazine Styling',
      subtitle: 'Offered by Khanak Kasana',
      meta: '₹15,000 – ₹30,000 per shoot day',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600',
      link: '/services'
    }
  ]);

  // Folder Categories Configuration with Icons & Colors
  const FOLDERS = [
    { name: 'All', icon: Bookmark, color: '#8C533C' },
    { name: 'Jobs', icon: Briefcase, color: '#3B82F6' },
    { name: 'Creatives', icon: Users, color: '#10B981' },
    { name: 'Portfolio Projects', icon: FolderPlus, color: '#8B5CF6' },
    { name: 'Posts', icon: MessageSquare, color: '#EC4899' },
    { name: 'Articles', icon: FileText, color: '#F59E0B' },
    { name: 'Services', icon: Tag, color: '#14B8A6' }
  ];

  // Remove Item Handler
  const handleRemoveItem = (id) => {
    setSavedItems(savedItems.filter(item => item.id !== id));
  };

  // Filter Logic
  const filteredItems = savedItems.filter(item => {
    const matchesFolder = selectedFolder === 'All' || item.type === selectedFolder;
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFolder && matchesQuery;
  });

  return (
    <div className="min-vh-100 py-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container px-3 px-lg-5">
        
        {/* HEADER SECTION */}
        <div className="bg-white rounded-4 p-4 shadow-sm border mb-4">
          <div className="d-flex align-items-center gap-2 mb-1">
            <Sparkles size={18} style={{ color: '#8C533C' }} />
            <span className="badge rounded-pill bg-opacity-10 text-uppercase fw-bold px-3 py-1" style={{ backgroundColor: '#8C533C1A', color: '#8C533C' }}>
              Personal Hub
            </span>
          </div>
          <h3 className="fw-bold text-dark mb-1">Saved Items</h3>
          <p className="text-muted small mb-3">Access and manage your bookmarked jobs, creative profiles, portfolio projects, and services.</p>

          {/* SEARCH IN SAVED */}
          <div className="input-group bg-light rounded-pill border overflow-hidden p-1 max-w-lg">
            <span className="input-group-text bg-transparent border-0 text-muted ps-3"><Search size={18} /></span>
            <input 
              type="text" 
              className="form-control bg-transparent border-0 shadow-none ps-2" 
              placeholder="Search in saved items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="row g-4">
          
          {/* LEFT FOLDER TREE / SIDEBAR */}
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white sticky-top" style={{ top: '20px' }}>
              <span className="text-muted extra-small fw-bold text-uppercase px-2 mb-2 d-block">Saved Collections</span>

              <div className="d-flex flex-column gap-1">
                {FOLDERS.map(folder => {
                  const Icon = folder.icon;
                  const count = folder.name === 'All' 
                    ? savedItems.length 
                    : savedItems.filter(i => i.type === folder.name).length;

                  const isSelected = selectedFolder === folder.name;

                  return (
                    <button
                      key={folder.name}
                      onClick={() => setSelectedFolder(folder.name)}
                      className={`btn text-start rounded-3 px-3 py-2 d-flex align-items-center justify-content-between transition ${
                        isSelected ? 'bg-dark text-white fw-bold shadow-sm' : 'btn-light bg-transparent text-secondary'
                      }`}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <Icon size={16} style={{ color: isSelected ? '#FFF' : folder.color }} />
                        <span className="small">{folder.name}</span>
                      </div>
                      <span className={`badge rounded-pill extra-small ${isSelected ? 'bg-white text-dark' : 'bg-light text-muted border'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SAVED CARDS GRID */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-3 px-1">
              <span className="text-muted small">Showing <strong>{filteredItems.length}</strong> saved items</span>
            </div>

            {filteredItems.length === 0 ? (
              <div className="card border-0 shadow-sm rounded-4 p-5 text-center bg-white">
                <p className="text-muted mb-0">No saved items found in <strong>{selectedFolder}</strong>.</p>
              </div>
            ) : (
              <div className="row g-3">
                {filteredItems.map((item) => (
                  <div key={item.id} className="col-12 col-md-6">
                    <div className="card border-0 shadow-sm rounded-4 p-3 bg-white hover-lift transition h-100 d-flex flex-column">
                      <div className="d-flex gap-3 align-items-start mb-3">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="rounded-3 object-fit-cover shadow-sm" 
                          style={{ width: '64px', height: '64px' }}
                        />
                        <div className="flex-grow-1 min-w-0">
                          <span className="badge bg-light text-dark border rounded-pill extra-small fw-semibold mb-1">
                            {item.type}
                          </span>
                          <h6 className="fw-bold text-dark mb-0 text-truncate">{item.title}</h6>
                          <p className="text-muted extra-small mb-0 text-truncate">{item.subtitle}</p>
                        </div>

                        {/* Un-save Trash Button */}
                        <button 
                          onClick={() => handleRemoveItem(item.id)}
                          className="btn btn-light btn-sm rounded-circle p-2 text-muted hover-danger border-0"
                          title="Remove from saved"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="mt-auto pt-2 border-top d-flex justify-content-between align-items-center">
                        <span className="text-muted extra-small">{item.meta}</span>
                        <a 
                          href={item.link} 
                          className="btn btn-outline-dark btn-sm rounded-pill px-3 py-1 extra-small fw-bold d-flex align-items-center gap-1"
                        >
                          View <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}