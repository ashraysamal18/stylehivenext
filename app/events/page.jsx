'use client';
import React, { useState } from 'react';
import { 
  Calendar, MapPin, Sparkles, Search, Filter, Users, 
  ExternalLink, Clock, Tag, Globe, Ticket, Bookmark
} from 'lucide-react';

export default function EventsHubPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = [
    'All', 'Fashion Week', 'Workshops', 'Networking Events', 
    'Portfolio Reviews', 'Exhibitions', 'Fashion Competitions', 'Masterclasses'
  ];

  // Sample Events Database
  const events = [
    {
      id: 'evt-1',
      title: 'Milan Couture Summit',
      category: 'Fashion Week',
      date: 'Sep 14, 2026',
      time: '10:00 AM CEST',
      location: 'Milan, Italy',
      venue: 'Palazzo Reale',
      organizer: 'Italian Fashion Council',
      price: 'Invite / €250',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600',
      description: 'Fashion professionals from around the world gather to showcase luxury collections, discuss sustainable couture techniques, and forge high-level industry partnerships.',
      attendees: 420
    },
    {
      id: 'evt-2',
      title: 'High-Fashion Lighting & Tethering',
      category: 'Workshops',
      date: 'Sep 18, 2026',
      time: '02:00 PM IST',
      location: 'Mumbai, India',
      venue: 'Lumière Daylight Studio',
      organizer: 'StyleHive Academy',
      price: '₹4,999',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600',
      description: 'Hands-on practical studio workshop focusing on strobe setups, continuous lighting for editorial shoots, and capture-one live tethering workflows.',
      attendees: 35
    },
    {
      id: 'evt-3',
      title: 'Paris Editorial Portfolio Review',
      category: 'Portfolio Reviews',
      date: 'Sep 22, 2026',
      time: '04:00 PM CEST',
      location: 'Online / Hybrid',
      venue: 'Vogue Studios (Zoom Link)',
      organizer: 'Condé Nast Talent Network',
      price: 'Free for Pro Members',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600',
      description: 'Get direct 1-on-1 feedback on your fashion styling, photography, and makeup portfolios from lead art directors and agency recruiters.',
      attendees: 150
    },
    {
      id: 'evt-4',
      title: 'Avant-Garde Draping Masterclass',
      category: 'Masterclasses',
      date: 'Oct 02, 2026',
      time: '11:00 AM IST',
      location: 'Delhi, India',
      venue: 'Okhla Design Hub',
      organizer: 'Rohan Mehta Atelier',
      price: '₹7,500',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600',
      description: 'Master the art of architectural garment draping without commercial patterns. Taught by couture designer Rohan Mehta.',
      attendees: 50
    },
    {
      id: 'evt-5',
      title: 'Global Creative Networking Mixer',
      category: 'Networking Events',
      date: 'Oct 10, 2026',
      time: '07:00 PM IST',
      location: 'Mumbai, India',
      venue: 'Soho House Juhu',
      organizer: 'StyleHive Network',
      price: 'RSVP Required',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600',
      description: 'An exclusive evening mixer connecting fashion stylists, photographers, models, creative directors, and brand leads over cocktails.',
      attendees: 210
    },
    {
      id: 'evt-6',
      title: 'Emerging Stylist Competition 2026',
      category: 'Fashion Competitions',
      date: 'Oct 25, 2026',
      time: 'Submission Deadline',
      location: 'Global / Virtual',
      venue: 'StyleHive Portal',
      organizer: 'Aura Luxury Group',
      price: 'Free Entry',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600',
      description: 'Submit your 5-look editorial lookbook for a chance to win a fully funded campaign shoot with Vogue Studios and $10,000 in grant funding.',
      attendees: 890
    }
  ];

  // Filter Logic
  const filteredEvents = events.filter(evt => {
    const matchesCategory = activeCategory === 'All' || evt.category === activeCategory;
    const matchesQuery = evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         evt.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         evt.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-vh-100 py-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container px-3 px-lg-5">
        
        {/* HERO SEARCH HEADER */}
        <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm border mb-4 text-center position-relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <div className="d-inline-flex align-items-center gap-2 mb-2 px-3 py-1 rounded-pill bg-opacity-10" style={{ backgroundColor: '#8C533C1A', color: '#8C533C' }}>
              <Calendar size={16} />
              <span className="extra-small fw-bold text-uppercase">Fashion Industry Events</span>
            </div>

            <h2 className="fw-bold text-dark mb-2 display-6">Explore & Attend Fashion Events</h2>
            <p className="text-muted small mb-4">Discover summits, portfolio reviews, masterclasses, and networking mixers worldwide.</p>

            {/* SEARCH INPUT */}
            <div className="input-group bg-light rounded-pill border overflow-hidden p-1 shadow-sm">
              <span className="input-group-text bg-transparent border-0 text-muted ps-3"><Search size={20} /></span>
              <input 
                type="text" 
                className="form-control bg-transparent border-0 shadow-none ps-2" 
                placeholder="Search by event title, city (e.g. Milan, Mumbai), or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn text-white rounded-pill px-4 fw-bold shadow-sm" style={{ backgroundColor: '#8C533C' }}>
                Find Events
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

        {/* EVENT CARDS GRID */}
        <div className="row g-4">
          {filteredEvents.map((evt) => (
            <div key={evt.id} className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white hover-lift transition h-100 d-flex flex-column">
                
                {/* Event Image & Badge */}
                <div className="position-relative" style={{ height: '200px' }}>
                  <img 
                    src={evt.image} 
                    alt={evt.title} 
                    className="w-100 h-100 object-fit-cover" 
                  />
                  <span className="badge bg-dark bg-opacity-75 rounded-pill position-absolute top-0 start-0 m-3 extra-small fw-normal">
                    {evt.category}
                  </span>
                  <button className="btn btn-light btn-sm rounded-circle position-absolute top-0 end-0 m-3 p-2 shadow-sm border">
                    <Bookmark size={16} />
                  </button>
                </div>

                {/* Event Info */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  
                  {/* Date & Location Line */}
                  <div className="d-flex align-items-center justify-content-between text-muted extra-small mb-2 font-monospace">
                    <span className="fw-bold text-uppercase d-flex align-items-center gap-1" style={{ color: '#8C533C' }}>
                      <Calendar size={14} /> {evt.date}
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <MapPin size={14} /> {evt.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h5 className="fw-bold text-dark mb-2">{evt.title}</h5>

                  {/* Short Description */}
                  <p className="text-secondary small mb-3 flex-grow-1 line-clamp-2">
                    {evt.description}
                  </p>

                  {/* Organizer & Price Footer */}
                  <div className="pt-3 border-top d-flex justify-content-between align-items-center mt-auto">
                    <div>
                      <span className="text-muted extra-small d-block">Host</span>
                      <strong className="text-dark extra-small">{evt.organizer}</strong>
                    </div>

                    <button 
                      onClick={() => setSelectedEvent(evt)}
                      className="btn btn-outline-dark btn-sm rounded-pill px-3 py-1 extra-small fw-bold d-flex align-items-center gap-1"
                    >
                      View Event <ExternalLink size={12} />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* EVENT DETAIL MODAL */}
        {selectedEvent && (
          <div className="modal show d-block bg-dark bg-opacity-50" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
                <div className="position-relative" style={{ height: '260px' }}>
                  <img src={selectedEvent.image} alt={selectedEvent.title} className="w-100 h-100 object-fit-cover" />
                  <button 
                    onClick={() => setSelectedEvent(null)}
                    className="btn-close btn-close-white position-absolute top-0 end-0 m-3 p-2 bg-dark rounded-circle"
                  ></button>
                </div>
                
                <div className="p-4 p-md-5">
                  <span className="badge bg-light text-dark border rounded-pill extra-small fw-bold mb-2">
                    {selectedEvent.category}
                  </span>
                  <h3 className="fw-bold text-dark mb-3">{selectedEvent.title}</h3>

                  <div className="row g-3 mb-4 bg-light p-3 rounded-4">
                    <div className="col-6 col-md-3">
                      <span className="text-muted extra-small d-block"><Calendar size={14} /> Date</span>
                      <strong className="small text-dark">{selectedEvent.date}</strong>
                    </div>
                    <div className="col-6 col-md-3">
                      <span className="text-muted extra-small d-block"><Clock size={14} /> Time</span>
                      <strong className="small text-dark">{selectedEvent.time}</strong>
                    </div>
                    <div className="col-6 col-md-3">
                      <span className="text-muted extra-small d-block"><MapPin size={14} /> Location</span>
                      <strong className="small text-dark">{selectedEvent.location}</strong>
                    </div>
                    <div className="col-6 col-md-3">
                      <span className="text-muted extra-small d-block"><Ticket size={14} /> Pass</span>
                      <strong className="small text-dark">{selectedEvent.price}</strong>
                    </div>
                  </div>

                  <h6 className="fw-bold text-dark mb-2">About the Event</h6>
                  <p className="text-secondary small mb-4">{selectedEvent.description}</p>

                  <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                    <span className="text-muted extra-small"><Users size={14} /> {selectedEvent.attendees} creatives attending</span>
                    <button className="btn text-white rounded-pill px-4 fw-bold" style={{ backgroundColor: '#8C533C' }}>
                      Register / Reserve Ticket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}