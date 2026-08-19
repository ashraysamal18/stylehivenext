'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('For You');

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Elena Rostova',
      role: 'Senior Runway Stylist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      verified: true,
      type: 'Post',
      time: '2 hours ago • Paris, France',
      content: 'Backstage preview from our Fall/Winter collection prep in Paris! Curation is almost complete for the 28 runway looks.',
      images: [
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80'
      ],
      likes: 248,
      comments: 32,
      isFollowing: true,
      isTrending: true
    },
    {
      id: 2,
      author: 'Vogue Studios',
      role: 'Featured Job Opportunity',
      avatar: 'V',
      verified: true,
      type: 'Job opportunity',
      time: 'Mumbai, India • Hybrid',
      title: 'Senior Fashion Stylist',
      salary: '₹40K – ₹70K / month',
      jobType: 'Full-time',
      experience: '3+ years experience',
      content: '',
      images: [],
      likes: 85,
      comments: 14,
      isFollowing: false,
      isTrending: true
    },
    {
      id: 3,
      author: 'Ashray Rajput',
      role: 'Looking for Collaborators',
      avatar: 'A',
      verified: false,
      type: 'Collaboration request',
      time: 'Mumbai • Aug 28, 2026',
      title: 'Photographer Needed',
      content: 'Looking for a fashion photographer for an upcoming editorial shoot. Creative, editorial style preferred.',
      images: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
      ],
      likes: 42,
      comments: 8,
      isFollowing: true,
      isTrending: false
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postType, setPostType] = useState('Post');
  const [postContent, setPostContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postContent.trim()) return;

    const newPost = {
      id: Date.now(),
      author: 'Ashray Rajput',
      role: 'Developer & Creative Enthusiast',
      avatar: 'A',
      verified: false,
      type: postType,
      time: 'Just now',
      content: postContent,
      images: imageUrl ? [imageUrl] : [],
      likes: 0,
      comments: 0,
      isFollowing: true,
      isTrending: false
    };

    setPosts([newPost, ...posts]);
    setPostContent('');
    setImageUrl('');
    setIsModalOpen(false);
  };

  const openModal = (type = 'Post') => {
    setPostType(type);
    setIsModalOpen(true);
  };

  const filteredPosts = posts.filter((post) => {
    if (activeFilter === 'Following') return post.isFollowing;
    if (activeFilter === 'Trending') return post.isTrending;
    if (activeFilter === 'Jobs') return post.type === 'Job opportunity';
    if (activeFilter === 'Collaborations') return post.type === 'Collaboration request';
    return true;
  });

  const filterTabs = ['For You', 'Following', 'Trending', 'Jobs', 'Collaborations'];

  return (
    <div className="container-fluid px-2 px-md-4 py-3 py-md-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="row g-3 g-lg-4">
        
        {/* RESTORED LEFT SIDEBAR */}
        <div className="col-lg-3 d-none d-lg-block">
          <div className="d-flex flex-column gap-3 sticky-top" style={{ top: '20px', zIndex: 10 }}>
            
            {/* Profile Card */}
            <div className="card border-0 shadow-sm overflow-hidden rounded-4 bg-white">
              <div style={{ height: '75px', backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=500&q=80)', backgroundSize: 'cover' }} />
              <div className="card-body text-center pt-0 position-relative">
                <div className="position-relative d-inline-block" style={{ marginTop: '-36px' }}>
                  <div 
                    className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold fs-4 border border-3 border-white shadow-sm mx-auto"
                    style={{ width: '72px', height: '72px', backgroundColor: '#8C533C' }}
                  >
                    A
                  </div>
                  <span className="position-absolute bottom-0 end-0 p-1 bg-success border border-white rounded-circle" style={{ width: '14px', height: '14px' }}></span>
                </div>

                <h6 className="fw-bold mb-0 mt-2">Ashray Rajput</h6>
                <p className="text-muted extra-small mb-1" style={{ fontSize: '0.75rem' }}>Developer & Creative Enthusiast</p>
                <p className="text-muted extra-small mb-3" style={{ fontSize: '0.75rem' }}>📍 Mumbai, India</p>

                <div className="mb-2 text-start bg-light p-2.5 rounded-3">
                  <div className="d-flex justify-content-between extra-small mb-1" style={{ fontSize: '0.75rem' }}>
                    <span className="text-muted">Profile strength</span>
                    <span className="fw-bold text-dark">82%</span>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{ width: '82%', backgroundColor: '#8C533C' }}></div>
                  </div>
                  <Link href="/profile" className="d-block mt-2 text-decoration-none fw-semibold" style={{ color: '#8C533C', fontSize: '0.75rem' }}>
                    Complete your profile →
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="card border-0 shadow-sm p-3 rounded-4 bg-white">
              <h6 className="fw-bold text-uppercase text-muted mb-2 tracking-wide" style={{ fontSize: '0.7rem', letterSpacing: '0.05em' }}>MY STYLEHIVE</h6>
              <div className="d-flex flex-column gap-1 fw-semibold" style={{ fontSize: '0.85rem' }}>
                <Link href="/profile" className="text-dark text-decoration-none d-flex align-items-center gap-2 py-2 px-2 rounded-2 hover-bg">
                  <span>👤 My Profile</span>
                </Link>
                <Link href="/portfolio" className="text-dark text-decoration-none d-flex align-items-center gap-2 py-2 px-2 rounded-2 hover-bg">
                  <span>🖼️ My Portfolio</span>
                </Link>
                <Link href="/saved" className="text-dark text-decoration-none d-flex align-items-center gap-2 py-2 px-2 rounded-2 hover-bg">
                  <span>🔖 Saved Items</span>
                </Link>
                <Link href="/applications" className="text-dark text-decoration-none d-flex align-items-center justify-content-between py-2 px-2 rounded-2 hover-bg">
                  <span>💼 Applications</span>
                  <span className="badge bg-danger rounded-pill" style={{ fontSize: '0.65rem' }}>8</span>
                </Link>
                <Link href="/network" className="text-dark text-decoration-none d-flex align-items-center gap-2 py-2 px-2 rounded-2 hover-bg">
                  <span>👥 My Network</span>
                </Link>
                <Link href="/messages" className="text-dark text-decoration-none d-flex align-items-center justify-content-between py-2 px-2 rounded-2 hover-bg">
                  <span>💬 Messages</span>
                  <span className="badge bg-danger rounded-pill" style={{ fontSize: '0.65rem' }}>3</span>
                </Link>
                <Link href="/settings" className="text-dark text-decoration-none d-flex align-items-center gap-2 py-2 px-2 rounded-2 hover-bg">
                  <span>⚙️ Settings</span>
                </Link>
              </div>
            </div>

            {/* Post Job Banner */}
            <div className="card border-0 shadow-sm p-3 rounded-4 text-center bg-white">
              <h6 className="fw-bold small mb-1">Hire top fashion talent</h6>
              <p className="text-muted mb-3" style={{ fontSize: '0.75rem' }}>Post a job and connect with verified professionals.</p>
              <button 
                onClick={() => openModal('Job opportunity')}
                className="btn text-white w-100 rounded-pill btn-sm fw-bold py-2 shadow-sm"
                style={{ backgroundColor: '#8C533C', fontSize: '0.8rem' }}
              >
                Post a Job
              </button>
            </div>

          </div>
        </div>

        {/* CENTER FEED */}
        <div className="col-12 col-lg-6">
          
          {/* Create Post Card */}
          <div className="card border-0 shadow-sm p-3 mb-3 rounded-4 bg-white">
            <div className="d-flex gap-2 gap-md-3 align-items-center mb-3">
              <div 
                className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold flex-shrink-0 shadow-sm"
                style={{ width: '40px', height: '40px', backgroundColor: '#8C533C' }}
              >
                A
              </div>
              <button 
                onClick={() => openModal('Post')} 
                className="form-control form-control-sm rounded-pill bg-light border-0 text-start px-3 px-md-4 py-2 text-muted shadow-sm text-truncate"
                style={{ fontSize: '0.825rem' }}
              >
                Share your latest work, thoughts or opportunities...
              </button>
            </div>

            <div className="d-flex flex-nowrap overflow-x-auto gap-1 pt-2 border-top pb-1" style={{ scrollbarWidth: 'none' }}>
              <button onClick={() => openModal('Post')} className="btn btn-sm btn-light border-0 rounded-pill fw-semibold text-secondary d-flex align-items-center gap-1 flex-shrink-0 px-2.5 py-1.5" style={{ fontSize: '0.75rem' }}>
                📷 Photo
              </button>
              <button onClick={() => openModal('Portfolio project')} className="btn btn-sm btn-light border-0 rounded-pill fw-semibold text-secondary d-flex align-items-center gap-1 flex-shrink-0 px-2.5 py-1.5" style={{ fontSize: '0.75rem' }}>
                🎨 Project
              </button>
              <button onClick={() => openModal('Job opportunity')} className="btn btn-sm btn-light border-0 rounded-pill fw-semibold text-secondary d-flex align-items-center gap-1 flex-shrink-0 px-2.5 py-1.5" style={{ fontSize: '0.75rem' }}>
                💼 Job
              </button>
              <button onClick={() => openModal('Collaboration request')} className="btn btn-sm btn-light border-0 rounded-pill fw-semibold text-secondary d-flex align-items-center gap-1 flex-shrink-0 px-2.5 py-1.5" style={{ fontSize: '0.75rem' }}>
                🤝 Collaboration
              </button>
              <button onClick={() => openModal('Achievement')} className="btn btn-sm btn-light border-0 rounded-pill fw-semibold text-secondary d-flex align-items-center gap-1 flex-shrink-0 px-2.5 py-1.5" style={{ fontSize: '0.75rem' }}>
                ⭐ Achievement
              </button>
            </div>
          </div>

          {/* Feed Filter Navigation Tabs */}
          <div className="bg-white rounded-4 shadow-sm px-3 pt-2 mb-3 border-0 sticky-top" style={{ top: '10px', zIndex: 9 }}>
            <div className="d-flex gap-3 gap-md-4 overflow-x-auto text-nowrap" style={{ scrollbarWidth: 'none' }}>
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`btn btn-link text-decoration-none px-0 py-2 fw-bold position-relative border-0 ${
                    activeFilter === tab ? 'text-dark' : 'text-muted'
                  }`}
                  style={{ fontSize: '0.85rem' }}
                >
                  {tab}
                  {activeFilter === tab && (
                    <div 
                      className="position-absolute bottom-0 start-0 w-100 rounded-pill" 
                      style={{ height: '3px', backgroundColor: '#8C533C' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Feed */}
          <div className="d-flex flex-column gap-3 gap-md-4">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => {
                
                if (post.type === 'Job opportunity') {
                  return (
                    <div key={post.id} className="card border-0 shadow-sm p-3 p-md-4 rounded-4 bg-white">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <span className="badge bg-light text-primary border extra-small fw-bold mb-2" style={{ fontSize: '0.7rem' }}>💼 FEATURED JOB</span>
                          <h5 className="fw-bold mb-1 fs-6 fs-md-5">{post.title}</h5>
                          <p className="text-muted mb-1" style={{ fontSize: '0.75rem' }}>
                            <strong>{post.author}</strong> ✔ • {post.time}
                          </p>
                        </div>
                        <div className="bg-dark text-white p-2 p-md-3 rounded-3 d-flex align-items-center justify-content-center fw-bold fs-6 flex-shrink-0" style={{ width: '52px', height: '52px' }}>
                          VOGUE
                        </div>
                      </div>

                      <div className="d-flex flex-wrap gap-1.5 gap-md-2 mb-3">
                        <span className="badge bg-white text-dark border px-2.5 py-1.5 rounded-pill" style={{ fontSize: '0.7rem' }}>{post.salary}</span>
                        <span className="badge bg-white text-dark border px-2.5 py-1.5 rounded-pill" style={{ fontSize: '0.7rem' }}>{post.jobType}</span>
                        <span className="badge bg-white text-dark border px-2.5 py-1.5 rounded-pill" style={{ fontSize: '0.7rem' }}>{post.experience}</span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center border-top pt-3">
                        <button className="btn btn-link text-dark text-decoration-none p-0 fw-bold" style={{ fontSize: '0.75rem' }}>Details ∨</button>
                        <button className="btn text-white rounded-pill btn-sm px-3 px-md-4 py-1.5 fw-bold" style={{ backgroundColor: '#8C533C', fontSize: '0.75rem' }}>Apply Now</button>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={post.id} className={`card border-0 shadow-sm p-3 p-md-4 rounded-4 bg-white ${post.type === 'Collaboration request' ? 'bg-light' : ''}`}>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-2 gap-md-3">
                        {post.avatar.startsWith('http') ? (
                          <img src={post.avatar} alt={post.author} className="rounded-circle object-fit-cover shadow-sm flex-shrink-0" style={{ width: '40px', height: '40px' }} />
                        ) : (
                          <div 
                            className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold shadow-sm flex-shrink-0"
                            style={{ width: '40px', height: '40px', backgroundColor: '#8C533C' }}
                          >
                            {post.avatar}
                          </div>
                        )}
                        <div>
                          <div className="d-flex align-items-center gap-1 flex-wrap">
                            <h6 className="fw-bold mb-0 text-truncate" style={{ fontSize: '0.9rem' }}>{post.author}</h6>
                            {post.verified && <span className="text-primary" style={{ fontSize: '0.75rem' }}>✔</span>}
                            {post.type === 'Collaboration request' && (
                              <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25" style={{ fontSize: '0.6rem' }}>🤝 COLLAB</span>
                            )}
                          </div>
                          <p className="text-muted mb-0 text-truncate" style={{ fontSize: '0.7rem' }}>{post.role} • {post.time}</p>
                        </div>
                      </div>
                      <button className="btn btn-link text-muted p-0 border-0">•••</button>
                    </div>

                    {post.title && <h6 className="fw-bold mb-2">{post.title}</h6>}
                    <p className="card-text small mb-3 text-secondary lh-sm" style={{ fontSize: '0.85rem' }}>{post.content}</p>

                    {post.images && post.images.length > 1 && (
                      <div className="row g-1.5 g-md-2 mb-3">
                        {post.images.map((img, idx) => (
                          <div className="col-4" key={idx}>
                            <div className="rounded-3 overflow-hidden bg-light shadow-sm" style={{ height: '140px' }}>
                              <img src={img} alt="Post media" className="w-100 h-100 object-fit-cover" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {post.images && post.images.length === 1 && (
                      <div className="rounded-3 overflow-hidden mb-3 bg-light shadow-sm" style={{ maxHeight: '320px' }}>
                        <img src={post.images[0]} alt="Post media" className="img-fluid w-100 object-fit-cover" />
                      </div>
                    )}

                    <div className="d-flex justify-content-between align-items-center border-top pt-2.5 text-muted fw-semibold" style={{ fontSize: '0.75rem' }}>
                      <button className="btn btn-link text-muted text-decoration-none p-0 d-flex align-items-center gap-1" style={{ fontSize: '0.75rem' }}>
                        ❤️ {post.likes}
                      </button>
                      <button className="btn btn-link text-muted text-decoration-none p-0 d-flex align-items-center gap-1" style={{ fontSize: '0.75rem' }}>
                        💬 {post.comments}
                      </button>
                      <button className="btn btn-link text-muted text-decoration-none p-0" style={{ fontSize: '0.75rem' }}>🔁 Share</button>
                      <button className="btn btn-link text-muted text-decoration-none p-0" style={{ fontSize: '0.75rem' }}>🔖 Save</button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="card border-0 shadow-sm p-4 text-center text-muted rounded-4 bg-white" style={{ fontSize: '0.85rem' }}>
                No posts found in <strong>{activeFilter}</strong> right now.
              </div>
            )}
          </div>
        </div>

        {/* RESTORED RIGHT SIDEBAR */}
        <div className="col-lg-3 d-none d-lg-block">
          <div className="d-flex flex-column gap-3 sticky-top" style={{ top: '20px', zIndex: 10 }}>
            
            {/* Trending topics */}
            <div className="card border-0 shadow-sm p-3 rounded-4 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold text-uppercase text-muted mb-0" style={{ fontSize: '0.75rem' }}>📈 Trending on StyleHive</h6>
                <button className="btn btn-link text-decoration-none p-0 fw-bold text-muted" style={{ fontSize: '0.7rem' }}>View all</button>
              </div>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2" style={{ fontSize: '0.8rem' }}>
                <li>
                  <a href="#" className="fw-bold text-dark text-decoration-none d-block"># ParisFashionWeek</a>
                  <span className="text-muted" style={{ fontSize: '0.7rem' }}>12.4K posts</span>
                </li>
                <li>
                  <a href="#" className="fw-bold text-dark text-decoration-none d-block"># EditorialStyling</a>
                  <span className="text-muted" style={{ fontSize: '0.7rem' }}>8.7K posts</span>
                </li>
                <li>
                  <a href="#" className="fw-bold text-dark text-decoration-none d-block"># SustainableFashion</a>
                  <span className="text-muted" style={{ fontSize: '0.7rem' }}>6.1K posts</span>
                </li>
                <li>
                  <a href="#" className="fw-bold text-dark text-decoration-none d-block"># MumbaiCreatives</a>
                  <span className="text-muted" style={{ fontSize: '0.7rem' }}>5.3K posts</span>
                </li>
              </ul>
            </div>

            {/* Suggested Creatives */}
            <div className="card border-0 shadow-sm p-3 rounded-4 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold text-uppercase text-muted mb-0" style={{ fontSize: '0.75rem' }}>Suggested Creatives</h6>
                <button className="btn btn-link text-decoration-none p-0 fw-bold text-muted" style={{ fontSize: '0.7rem' }}>View all</button>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold bg-dark shadow-sm" style={{ width: '36px', height: '36px', fontSize: '0.85rem' }}>M</div>
                    <div>
                      <p className="fw-bold mb-0" style={{ fontSize: '0.8rem' }}>Marcello V.</p>
                      <p className="text-muted mb-0" style={{ fontSize: '0.7rem' }}>Creative Director</p>
                    </div>
                  </div>
                  <button className="btn btn-outline-dark btn-sm rounded-pill px-2 py-0.5 fw-bold" style={{ fontSize: '0.7rem' }}>+ Follow</button>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="card border-0 shadow-sm p-3 rounded-4 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold text-uppercase text-muted mb-0" style={{ fontSize: '0.75rem' }}>Upcoming Events</h6>
                <button className="btn btn-link text-decoration-none p-0 fw-bold text-muted" style={{ fontSize: '0.7rem' }}>View all</button>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=200&q=80" alt="Summit" className="rounded-3 object-fit-cover" style={{ width: '64px', height: '64px' }} />
                <div>
                  <h6 className="fw-bold mb-1" style={{ fontSize: '0.8rem' }}>Milan Couture Summit</h6>
                  <p className="text-muted mb-1" style={{ fontSize: '0.7rem' }}>Sep 14 – 16, 2026 • Milan, Italy</p>
                  <button className="btn btn-outline-dark btn-sm rounded-pill py-0.5 px-3 fw-bold" style={{ fontSize: '0.7rem' }}>Interested</button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* CREATE POST MODAL */}
      {isModalOpen && (
        <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered px-2">
            <div className="modal-content border-0 shadow rounded-4 p-2">
              <div className="modal-header border-bottom-0 pb-0">
                <h5 className="modal-title fs-6 fw-bold">Create a post</h5>
                <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)} />
              </div>

              <form onSubmit={handleCreatePost}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label text-muted text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>Post Category</label>
                    <select 
                      className="form-select form-select-sm rounded-pill"
                      value={postType}
                      onChange={(e) => setPostType(e.target.value)}
                    >
                      <option value="Post">📝 Standard Post</option>
                      <option value="Portfolio project">🎨 Portfolio Project</option>
                      <option value="Job opportunity">💼 Job Opportunity</option>
                      <option value="Collaboration request">🤝 Collaboration Request</option>
                      <option value="Achievement">⭐ Achievement</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <textarea 
                      className="form-control border-0 p-0 shadow-none" 
                      rows={4} 
                      placeholder={`What would you like to share as a ${postType.toLowerCase()}?`}
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <input 
                      type="url" 
                      className="form-control form-control-sm rounded-pill bg-light border-0 px-3" 
                      placeholder="Add an image URL (optional)" 
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                  </div>
                </div>

                <div className="modal-footer border-top-0 pt-0">
                  <button type="button" className="btn btn-light rounded-pill btn-sm px-3" style={{ fontSize: '0.8rem' }} onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn rounded-pill btn-sm px-4 text-white fw-bold" style={{ backgroundColor: '#8C533C', fontSize: '0.8rem' }}>
                    Publish Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}