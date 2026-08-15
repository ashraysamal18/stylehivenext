'use client';
import React, { useState } from 'react';
import { 
  Users, MapPin, Calendar, Briefcase, Palette, Sparkles, 
  Send, Plus, Search, Filter, MessageSquare, CheckCircle2, Bookmark, Share2
} from 'lucide-react';

export default function CollaborationsPage() {
  const [selectedRole, setSelectedRole] = useState('All');
  const [applyModalPost, setApplyModalPost] = useState(null);
  const [createModalOpen, setCreateModalOpen] = useState(null);

  // Sample Collaboration Posts
  const [collabPosts, setCollabPosts] = useState([
    {
      id: 'collab-1',
      author: 'Elena Rostova',
      roleTitle: 'Senior Runway Stylist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
      lookingFor: 'Photographer',
      title: 'Editorial Shoot: Heritage Couture in Old Fort',
      description: 'I am working on an upcoming high-fashion editorial shoot in Mumbai and looking for a fashion photographer with experience in natural light and studio lighting. We have 4 couture garments lined up with a verified MUA.',
      location: 'Mumbai, India',
      date: 'Aug 28, 2026',
      compType: 'Collaboration (TFP)', // Collaboration | Paid | Expense Split
      aesthetic: 'Editorial Fashion',
      applicantsCount: 12,
      postedAgo: '3 hours ago',
      moodboardImages: [
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600',
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600'
      ]
    },
    {
      id: 'collab-2',
      author: 'Alex Morgan',
      roleTitle: 'Fashion Photographer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      lookingFor: 'Makeup Artist',
      title: 'Monochrome Avant-Garde Studio Shoot',
      description: 'Seeking an editorial MUA skilled in graphic liner and glowing skin textures for a 3-look studio series. Portfolio will be submitted to photo magazines.',
      location: 'Delhi, India',
      date: 'Sep 05, 2026',
      compType: 'Paid',
      aesthetic: 'Avant-Garde / High Contrast',
      applicantsCount: 8,
      postedAgo: '1 day ago',
      moodboardImages: [
        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600'
      ]
    },
    {
      id: 'collab-3',
      author: 'Sarah Lee',
      roleTitle: 'Makeup Artist Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
      lookingFor: 'Stylist',
      title: 'Streetwear & Denim Lookbook Project',
      description: 'Looking for a wardrobe stylist with access to vintage denim or streetwear brands for a outdoor golden-hour shoot.',
      location: 'Bengaluru, India',
      date: 'Sep 02, 2026',
      compType: 'Expense Split',
      aesthetic: 'Urban Streetwear',
      applicantsCount: 5,
      postedAgo: '2 days ago',
      moodboardImages: [
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600'
      ]
    }
  ]);

  const rolesFilter = ['All', 'Photographer', 'Stylist', 'Makeup Artist', 'Model', 'Designer'];

  const filteredPosts = selectedRole === 'All'
    ? collabPosts
    : collabPosts.filter(post => post.lookingFor === selectedRole);

  return (
    <div className="min-vh-100 py-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container px-3 px-lg-5" style={{ maxWidth: '960px' }}>
        
        {/* HEADER SECTION */}
        <div className="bg-white rounded-4 p-4 shadow-sm border mb-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <Sparkles size={18} style={{ color: '#8C533C' }} />
                <span className="badge rounded-pill bg-opacity-10 text-uppercase fw-bold px-3 py-1" style={{ backgroundColor: '#8C533C1A', color: '#8C533C' }}>
                  Signature Feature
                </span>
              </div>
              <h3 className="fw-bold text-dark mb-1">Creative Collaborations</h3>
              <p className="text-muted small mb-0">Connect with fellow creatives, build your portfolio, and launch creative concepts together.</p>
            </div>

            <button 
              onClick={() => setCreateModalOpen(true)}
              className="btn text-white rounded-pill px-4 fw-bold shadow-sm d-flex align-items-center gap-2"
              style={{ backgroundColor: '#8C533C' }}
            >
              <Plus size={18} /> Post Collaboration
            </button>
          </div>
        </div>

        {/* ROLE FILTER CAPSULES */}
        <div className="d-flex gap-2 overflow-x-auto pb-3 mb-3 scrollbar-none">
          {rolesFilter.map(role => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`btn btn-sm rounded-pill px-3 py-2 fw-bold text-nowrap transition ${
                selectedRole === role 
                  ? 'text-white shadow-sm' 
                  : 'btn-white bg-white text-dark border'
              }`}
              style={selectedRole === role ? { backgroundColor: '#8C533C' } : {}}
            >
              {role === 'All' ? 'All Roles Needed' : `Looking for ${role}`}
            </button>
          ))}
        </div>

        {/* COLLABORATION POSTS CARDS */}
        <div className="d-flex flex-column gap-4">
          {filteredPosts.map((post) => (
            <div key={post.id} className="card border-0 shadow-sm rounded-4 p-4 bg-white hover-lift transition">
              
              {/* Author Info Header */}
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex gap-3 align-items-center">
                  <img 
                    src={post.avatar} 
                    alt={post.author} 
                    className="rounded-circle object-fit-cover border"
                    style={{ width: '46px', height: '46px' }}
                  />
                  <div>
                    <h6 className="fw-bold text-dark mb-0">{post.author}</h6>
                    <span className="text-muted extra-small">{post.roleTitle} • Posted {post.postedAgo}</span>
                  </div>
                </div>

                <span className="badge bg-danger bg-opacity-10 text-danger border border-danger-subtle rounded-pill px-3 py-1 fw-bold extra-small">
                  Looking for {post.lookingFor}
                </span>
              </div>

              {/* Title & Description */}
              <h5 className="fw-bold text-dark mb-2">{post.title}</h5>
              <p className="text-secondary small mb-3">{post.description}</p>

              {/* PROJECT TAGS GRID */}
              <div className="d-flex flex-wrap gap-3 p-3 bg-light rounded-3 mb-3 text-dark small">
                <div className="d-flex align-items-center gap-1">
                  <MapPin size={16} className="text-muted" />
                  <span className="fw-semibold">{post.location}</span>
                </div>

                <div className="d-flex align-items-center gap-1">
                  <Calendar size={16} className="text-muted" />
                  <span className="fw-semibold">{post.date}</span>
                </div>

                <div className="d-flex align-items-center gap-1">
                  <Briefcase size={16} className="text-muted" />
                  <span className="fw-semibold">{post.compType}</span>
                </div>

                <div className="d-flex align-items-center gap-1">
                  <Palette size={16} className="text-muted" />
                  <span className="fw-semibold">{post.aesthetic}</span>
                </div>
              </div>

              {/* MOODBOARD THUMBNAILS */}
              {post.moodboardImages.length > 0 && (
                <div className="mb-3">
                  <span className="text-muted extra-small fw-bold text-uppercase d-block mb-2">Concept Moodboard</span>
                  <div className="d-flex gap-2">
                    {post.moodboardImages.map((img, idx) => (
                      <img 
                        key={idx}
                        src={img} 
                        alt="Moodboard visual" 
                        className="rounded-3 object-fit-cover shadow-sm"
                        style={{ width: '120px', height: '80px' }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* FOOTER ACTIONS */}
              <div className="d-flex align-items-center justify-content-between pt-3 border-top mt-1">
                <span className="text-muted extra-small fw-semibold">
                  <Users size={14} className="me-1" /> {post.applicantsCount} creatives applied
                </span>

                <div className="d-flex gap-2">
                  <button className="btn btn-light btn-sm rounded-circle border">
                    <Bookmark size={16} />
                  </button>
                  
                  <button 
                    onClick={() => setApplyModalPost(post)}
                    className="btn text-white rounded-pill px-4 btn-sm fw-bold shadow-sm d-flex align-items-center gap-1"
                    style={{ backgroundColor: '#8C533C' }}
                  >
                    <Send size={14} /> Apply to Collaborate
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* APPLY MODAL */}
      {applyModalPost && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3" style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1060 }}>
          <div className="bg-white rounded-4 shadow-lg w-100 p-4" style={{ maxWidth: '520px' }}>
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
              <div>
                <h5 className="fw-bold text-dark mb-0">Apply to Collaborate</h5>
                <span className="text-muted small">Post by {applyModalPost.author}</span>
              </div>
              <button onClick={() => setApplyModalPost(null)} className="btn-close shadow-none"></button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert(`Your collaboration request was sent to ${applyModalPost.author}!`);
              setApplyModalPost(null);
            }}>
              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Your Portfolio / StyleHive Link</label>
                <input type="url" className="form-control rounded-3" defaultValue="https://stylehive.com/p/yourusername" required />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Message / Proposed Vision</label>
                <textarea className="form-control rounded-3" rows={3} placeholder="Introduce yourself and explain why you'd be a great fit for this shoot..." required></textarea>
              </div>

              <button type="submit" className="btn text-white rounded-pill w-100 fw-bold py-2 shadow-sm d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#8C533C' }}>
                <Send size={16} /> Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CREATE POST MODAL */}
      {createModalOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3" style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1060 }}>
          <div className="bg-white rounded-4 shadow-lg w-100 p-4" style={{ maxWidth: '550px' }}>
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
              <h5 className="fw-bold text-dark mb-0">Post Collaboration Callout</h5>
              <button onClick={() => setCreateModalOpen(false)} className="btn-close shadow-none"></button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Collaboration post published!');
              setCreateModalOpen(false);
            }}>
              <div className="row g-2 mb-3">
                <div className="col-6">
                  <label className="form-label small fw-bold text-secondary">Looking For</label>
                  <select className="form-select rounded-3">
                    <option>Photographer</option>
                    <option>Stylist</option>
                    <option>Makeup Artist</option>
                    <option>Model</option>
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label small fw-bold text-secondary">Shooting Location</label>
                  <input type="text" className="form-control rounded-3" placeholder="e.g. Mumbai" required />
                </div>
              </div>

              <div className="row g-2 mb-3">
                <div className="col-6">
                  <label className="form-label small fw-bold text-secondary">Tentative Date</label>
                  <input type="text" className="form-control rounded-3" placeholder="e.g. Aug 28" required />
                </div>
                <div className="col-6">
                  <label className="form-label small fw-bold text-secondary">Compensation</label>
                  <select className="form-select rounded-3">
                    <option>Collaboration (TFP)</option>
                    <option>Paid</option>
                    <option>Expense Split</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Project Title</label>
                <input type="text" className="form-control rounded-3" placeholder="e.g. Minimalist Autumn Editorial" required />
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold text-secondary">Project Description & Requirements</label>
                <textarea className="form-control rounded-3" rows={3} placeholder="Describe the shoot concept, mood, and what you expect from collaborators..." required></textarea>
              </div>

              <button type="submit" className="btn text-white rounded-pill w-100 fw-bold py-2 shadow-sm" style={{ backgroundColor: '#8C533C' }}>
                Publish Callout
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}