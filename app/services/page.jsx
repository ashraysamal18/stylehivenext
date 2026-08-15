'use client';
import React, { useState } from 'react';
import { 
  Sparkles, Search, Filter, Star, CheckCircle, Clock, 
  MapPin, IndianRupee, MessageSquare, Send, Eye, X, ChevronRight, Tag
} from 'lucide-react';

export default function CreativeServicesPage() {
  // Active Category Filter
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [quoteServiceModal, setQuoteServiceModal] = useState(null);

  const categories = ['All', 'Fashion Styling', 'Photography', 'Makeup & Hair', 'Creative Direction', 'Runway Production'];

  // Sample Services Database
  const servicesList = [
    {
      id: 'srv-1',
      title: 'Editorial & Magazine Styling',
      category: 'Fashion Styling',
      provider: 'Khanak Kasana',
      providerTitle: 'Lead Stylist & Art Director',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
      rating: 4.9,
      reviewsCount: 38,
      location: 'Mumbai / Delhi',
      priceRange: '₹15,000 – ₹30,000',
      pricingUnit: 'per look / shoot day',
      deliverables: [
        'Moodboard & Concept Development',
        'Garment & Accessory Sourcing from Luxury Houses',
        'On-Set Fitting & Styling Assistance',
        'Post-Shoot Returns Management'
      ],
      coverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800',
      description: 'End-to-end editorial fashion styling tailored for fashion magazine covers, brand lookbooks, and high-fashion editorials.'
    },
    {
      id: 'srv-2',
      title: 'Fashion Campaign Shoot Photography',
      category: 'Photography',
      provider: 'Alex Morgan',
      providerTitle: 'Commercial & Runway Photographer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      rating: 5.0,
      reviewsCount: 52,
      location: 'Mumbai, India',
      priceRange: '₹25,000 – ₹60,000',
      pricingUnit: 'per full-day campaign shoot',
      deliverables: [
        'Studio or Location High-End Lighting Setup',
        'Capture One Live Tethered Shooting',
        '15 High-Resolution Color Corrected Edits',
        'Commercial Usage Rights'
      ],
      coverImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800',
      description: 'Full-scale commercial photography services for brand campaigns, billboards, and e-commerce catalogue launches.'
    },
    {
      id: 'srv-3',
      title: 'High-Fashion & Editorial Makeup',
      category: 'Makeup & Hair',
      provider: 'Sarah Lee',
      providerTitle: 'Senior MUA Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
      rating: 4.8,
      reviewsCount: 24,
      location: 'Delhi NCR',
      priceRange: '₹8,000 – ₹15,000',
      pricingUnit: 'per model / look',
      deliverables: [
        'Skin Preparation & High-Glow Finish',
        'Avant-Garde or Classic Editorial Makeup',
        'On-Set Touch-ups (Up to 6 Hours)',
        'Hairstyling Alignment'
      ],
      coverImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800',
      description: 'Precision makeup artistry specializing in editorial skin techniques, runway aesthetics, and cinematic fashion films.'
    },
    {
      id: 'srv-4',
      title: 'Runway Show Creative Direction',
      category: 'Runway Production',
      provider: 'Rohan Mehta',
      providerTitle: 'Runway Director',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
      rating: 4.9,
      reviewsCount: 16,
      location: 'Mumbai / Pan India',
      priceRange: '₹50,000 – ₹1,20,000',
      pricingUnit: 'per runway show event',
      deliverables: [
        'Music & Lighting Choreography',
        'Model Casting & Collection Sequence',
        'Backstage Quick-Change Management',
        'Rehearsal Direction'
      ],
      coverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800',
      description: 'Comprehensive creative and operational direction for fashion week runways, brand launches, and couture presentations.'
    }
  ];

  // Filtering Logic
  const filteredServices = servicesList.filter(srv => {
    const matchesCat = selectedCategory === 'All' || srv.category === selectedCategory;
    const matchesQuery = srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         srv.provider.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="min-vh-100 py-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container px-3 px-lg-5">
        
        {/* HEADER SECTION */}
        <div className="bg-white rounded-4 p-4 shadow-sm border mb-4">
          <div className="d-flex align-items-center gap-2 mb-2">
            <Sparkles size={20} style={{ color: '#8C533C' }} />
            <span className="badge rounded-pill bg-opacity-10 text-uppercase fw-bold px-3 py-1" style={{ backgroundColor: '#8C533C1A', color: '#8C533C' }}>
              Service Marketplace
            </span>
          </div>
          <h2 className="fw-bold text-dark mb-1">Book Creative Services</h2>
          <p className="text-muted small mb-3">Browse fixed-rate and quote-based services offered by verified fashion professionals.</p>

          {/* SEARCH BAR */}
          <div className="input-group bg-light rounded-pill border overflow-hidden p-1 max-w-2xl">
            <span className="input-group-text bg-transparent border-0 text-muted ps-3"><Search size={18} /></span>
            <input 
              type="text" 
              className="form-control bg-transparent border-0 shadow-none ps-2" 
              placeholder="Search services (e.g. Editorial Styling, Campaign Photography)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* CATEGORY TABS */}
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

        {/* SERVICES GRID */}
        <div className="row g-4">
          {filteredServices.length === 0 ? (
            <div className="col-12 text-center py-5 bg-white rounded-4 border">
              <p className="text-muted mb-0">No creative services found matching your criteria.</p>
            </div>
          ) : (
            filteredServices.map((service) => (
              <div key={service.id} className="col-12 col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white h-100 d-flex flex-column hover-lift transition">
                  
                  {/* Service Cover Image */}
                  <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                    <img 
                      src={service.coverImage} 
                      alt={service.title} 
                      className="w-100 h-100 object-fit-cover"
                    />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-dark bg-opacity-75 rounded-pill px-3 py-1 small">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Info Body */}
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    
                    {/* Provider Avatar & Name */}
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <img 
                        src={service.avatar} 
                        alt={service.provider} 
                        className="rounded-circle object-fit-cover border" 
                        style={{ width: '38px', height: '38px' }}
                      />
                      <div>
                        <h6 className="fw-bold text-dark mb-0 small">{service.provider}</h6>
                        <span className="text-muted extra-small d-flex align-items-center gap-1">
                          <Star size={12} className="text-warning" fill="currentColor" /> {service.rating} ({service.reviewsCount}) • {service.location}
                        </span>
                      </div>
                    </div>

                    <h5 className="fw-bold text-dark mb-2">{service.title}</h5>
                    <p className="text-muted small mb-3 line-clamp-2">{service.description}</p>

                    {/* Price Tag */}
                    <div className="mt-auto pt-3 border-top mb-3">
                      <span className="text-muted extra-small d-block text-uppercase fw-bold">Starting Rate</span>
                      <div className="d-flex align-items-baseline gap-1">
                        <h5 className="fw-bold text-dark mb-0">{service.priceRange}</h5>
                        <span className="text-muted extra-small">/ {service.pricingUnit}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-2">
                      <button 
                        onClick={() => setActiveServiceModal(service)}
                        className="btn btn-outline-dark rounded-pill flex-grow-1 fw-bold btn-sm py-2"
                      >
                        View Service
                      </button>
                      
                      <button 
                        onClick={() => setQuoteServiceModal(service)}
                        className="btn text-white rounded-pill flex-grow-1 fw-bold btn-sm py-2 shadow-sm"
                        style={{ backgroundColor: '#8C533C' }}
                      >
                        Request Quote
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            ))
          )}
        </div>

      </div>

      {/* MODAL 1: VIEW SERVICE DETAILS */}
      {activeServiceModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3" style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1060 }}>
          <div className="bg-white rounded-4 shadow-lg w-100 overflow-hidden d-flex flex-column" style={{ maxWidth: '650px', maxHeight: '90vh' }}>
            
            <div className="p-3 border-bottom d-flex align-items-center justify-content-between bg-white">
              <span className="badge rounded-pill bg-opacity-10 text-uppercase fw-bold px-3 py-1" style={{ backgroundColor: '#8C533C1A', color: '#8C533C' }}>
                {activeServiceModal.category}
              </span>
              <button onClick={() => setActiveServiceModal(null)} className="btn-close shadow-none"></button>
            </div>

            <div className="p-4 overflow-y-auto">
              <img 
                src={activeServiceModal.coverImage} 
                alt={activeServiceModal.title} 
                className="w-100 rounded-4 object-fit-cover mb-3" 
                style={{ height: '250px' }}
              />

              <h4 className="fw-bold text-dark mb-1">{activeServiceModal.title}</h4>
              <p className="text-muted small mb-3">Offered by <strong>{activeServiceModal.provider}</strong> ({activeServiceModal.providerTitle})</p>

              <div className="card bg-light border-0 rounded-4 p-3 mb-3">
                <span className="text-muted extra-small fw-bold text-uppercase d-block">Estimated Investment</span>
                <h4 className="fw-bold text-dark mb-0">{activeServiceModal.priceRange}</h4>
                <span className="text-muted small">{activeServiceModal.pricingUnit}</span>
              </div>

              <h6 className="fw-bold text-dark mb-2">Service Overview</h6>
              <p className="text-secondary small mb-4">{activeServiceModal.description}</p>

              <h6 className="fw-bold text-dark mb-2">Included Deliverables</h6>
              <ul className="list-group list-group-flush mb-4 small">
                {activeServiceModal.deliverables.map((item, idx) => (
                  <li key={idx} className="list-group-item bg-transparent px-0 py-2 d-flex align-items-center gap-2 border-light">
                    <CheckCircle size={16} className="text-success" /> {item}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  const srv = activeServiceModal;
                  setActiveServiceModal(null);
                  setQuoteServiceModal(srv);
                }}
                className="btn text-white rounded-pill w-100 fw-bold py-2 shadow-sm"
                style={{ backgroundColor: '#8C533C' }}
              >
                Request Custom Quote
              </button>
            </div>

          </div>
        </div>
      )}

      {/* MODAL 2: REQUEST QUOTE FORM */}
      {quoteServiceModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3" style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1060 }}>
          <div className="bg-white rounded-4 shadow-lg w-100 p-4" style={{ maxWidth: '520px' }}>
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
              <div>
                <h5 className="fw-bold text-dark mb-0">Request Quote</h5>
                <span className="text-muted small">For {quoteServiceModal.title} by {quoteServiceModal.provider}</span>
              </div>
              <button onClick={() => setQuoteServiceModal(null)} className="btn-close shadow-none"></button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert(`Quote request sent to ${quoteServiceModal.provider}!`);
              setQuoteServiceModal(null);
            }}>
              <div className="mb-3">
                <label className="form-label small fw-bold text-secondary">Project / Brand Name</label>
                <input type="text" className="form-control rounded-3" placeholder="e.g. Vogue India Editorial Shoot" required />
              </div>

              <div className="row g-2 mb-3">
                <div className="col-6">
                  <label className="form-label small fw-bold text-secondary">Tentative Date</label>
                  <input type="date" className="form-control rounded-3" required />
                </div>
                <div className="col-6">
                  <label className="form-label small fw-bold text-secondary">Target Budget (₹)</label>
                  <input type="text" className="form-control rounded-3" defaultValue={quoteServiceModal.priceRange.split('–')[0].trim()} required />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold text-secondary">Project Details & Requirements</label>
                <textarea className="form-control rounded-3" rows={3} placeholder="Describe shoot location, number of looks, and visual expectations..." required></textarea>
              </div>

              <button type="submit" className="btn text-white rounded-pill w-100 fw-bold py-2 shadow-sm d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#8C533C' }}>
                <Send size={16} /> Send Quote Request
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}