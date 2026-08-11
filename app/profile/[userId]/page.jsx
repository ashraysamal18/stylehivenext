'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { 
  Heart, MessageSquare, ImageIcon, Plus, 
  MapPin, UserCheck, Briefcase, PenSquare 
} from 'lucide-react';

const DUMMY_PORTFOLIO_PROJECTS = [
  {
    _id: 'proj1',
    title: 'Autumn Duality Collection',
    category: 'Design',
    coverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    likes: 245,
    comments: 31,
    size: 'row-span-2'
  },
  {
    _id: 'proj2',
    title: 'Noir Editorial - Vogue Italy',
    category: 'Photography',
    coverImage: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop',
    likes: 512,
    comments: 88,
    size: 'row-span-2'
  },
  {
    _id: 'proj3',
    title: 'Spring Streetwear Draping',
    category: 'Design',
    coverImage: 'https://images.unsplash.com/photo-1529139572172-db11105c36f1?q=80&w=800&auto=format&fit=crop',
    likes: 120,
    comments: 15,
    size: 'row-span-1'
  },
  {
    _id: 'proj4',
    title: 'Urban Runway Backstage',
    category: 'Styling',
    coverImage: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=800&auto=format&fit=crop',
    likes: 310,
    comments: 42,
    size: 'row-span-2'
  },
  {
    _id: 'proj5',
    title: 'Fabric Swatch Mood Board',
    category: 'Textiles',
    coverImage: 'https://images.unsplash.com/photo-1507680211101-705b4b192866?q=80&w=800&auto=format&fit=crop',
    likes: 98,
    comments: 9,
    size: 'row-span-1'
  },
  {
    _id: 'proj6',
    title: 'Minimalist Silhouette Study',
    category: 'Design',
    coverImage: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=800&auto=format&fit=crop',
    likes: 410,
    comments: 55,
    size: 'row-span-2'
  }
];

export default function UserPortfolioPage() {
  const { userId } = useParams();
  const [activeTab, setActiveTab] = useState('Portfolio');

  const userProfile = {
    name: 'Elena Rostova',
    role: 'Senior Runway Stylist',
    location: 'Paris, France',
    connections: 412,
  };

  return (
    <div className="container-fluid px-3 px-md-5 py-4 min-vh-100" style={{ backgroundColor: '#F9F8F6' }}>
      
      {/* Profile Card */}
      <div className="card border-0 shadow-sm rounded-4 mb-4 bg-white overflow-hidden">
        <div style={{ height: '180px', background: 'linear-gradient(135deg, #8C533C 0%, #3D2318 100%)' }}></div>
        
        <div className="p-4 pt-0">
          <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-4" style={{ marginTop: '-60px' }}>
            <div className="bg-white p-2 rounded-circle shadow-sm">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-sm"
                style={{ width: '110px', height: '110px', backgroundColor: '#8C533C', fontSize: '2.5rem' }}
              >
                {userProfile.name.charAt(0)}
              </div>
            </div>

            <div className="flex-grow-1 text-center text-md-start pt-md-2 mt-md-4">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start gap-3">
                <div>
                  <h2 className="fw-bold text-dark mb-1">{userProfile.name}</h2>
                  <p className="text-muted small fw-medium mb-2 d-flex align-items-center gap-1 justify-content-center justify-content-md-start">
                    <Briefcase size={14} style={{ color: '#8C533C' }}/> {userProfile.role}
                  </p>
                  <p className="text-muted small mb-3 d-flex align-items-center gap-1 justify-content-center justify-content-md-start">
                    <MapPin size={14} /> {userProfile.location} • <UserCheck size={14} /> {userProfile.connections} Connections
                  </p>
                </div>
                
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-dark rounded-pill px-4 d-flex align-items-center gap-2 btn-sm fw-bold">
                    <MessageSquare size={16} /> Message
                  </button>
                  <button className="btn text-white rounded-pill px-4 fw-bold d-flex align-items-center gap-2 btn-sm shadow-sm" style={{ backgroundColor: '#8C533C' }}>
                    <Plus size={18} /> Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="d-flex justify-content-center mb-4">
        <div className="bg-white p-1 rounded-pill shadow-sm d-inline-flex border">
          {['Portfolio', 'Feed'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn rounded-pill px-5 fw-bold btn-sm ${activeTab === tab ? 'text-white shadow-sm' : 'text-muted border-0'}`}
              style={activeTab === tab ? { backgroundColor: '#8C533C' } : {}}
            >
              {tab === 'Portfolio' && <ImageIcon size={16} className="me-2" />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeTab === 'Feed' ? (
        <div className="text-center py-5 card border-0 shadow-sm rounded-4 bg-white">
          <PenSquare size={48} className="text-muted mb-3" />
          <h5 className="fw-bold text-dark">Social Feed</h5>
          <p className="text-muted small mb-0">Standard social updates and text posts will appear here.</p>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold text-dark mb-0">Visual Lookbook Grid</h5>
            <button className="btn btn-sm btn-dark rounded-pill px-3 fw-bold">
              + Add Project
            </button>
          </div>

          <div className="masonry-grid">
            {DUMMY_PORTFOLIO_PROJECTS.map((project) => (
              <div key={project._id} className={`masonry-item ${project.size} rounded-4 overflow-hidden shadow-sm`}>
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                />
                
                <div className="masonry-overlay p-3 d-flex flex-column justify-content-end">
                  <span className="badge rounded-pill bg-white text-dark px-3 py-1 align-self-start small mb-2 fw-bold" style={{ fontSize: '0.7rem' }}>
                    {project.category}
                  </span>
                  <h6 className="fw-bold text-white mb-2">{project.title}</h6>
                  
                  <div className="d-flex gap-3 small text-white-50 border-top border-secondary pt-2">
                    <span className="d-flex align-items-center gap-1"><Heart size={14} /> {project.likes}</span>
                    <span className="d-flex align-items-center gap-1"><MessageSquare size={14} /> {project.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}