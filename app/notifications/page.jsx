'use client';
import React, { useState } from 'react';
import { 
  Bell, Heart, UserPlus, MessageSquare, Briefcase, Sparkles, 
  Check, CheckCheck, Trash2, Filter, ChevronRight, ExternalLink
} from 'lucide-react';

export default function NotificationCenterPage() {
  const [selectedTab, setSelectedTab] = useState('All'); // All | Unread | Jobs | Social

  // Sample Notifications Database
  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      type: 'job',
      icon: Briefcase,
      color: '#3B82F6',
      title: 'New job matching your skills',
      subtitle: 'Senior Stylist — Vogue Studios',
      timeAgo: '10m ago',
      read: false,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
      actionUrl: '/jobs'
    },
    {
      id: 'notif-2',
      type: 'like',
      icon: Heart,
      color: '#EC4899',
      title: 'Someone liked your portfolio',
      subtitle: 'Priya Sharma liked "Paris Editorial"',
      timeAgo: '45m ago',
      read: false,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
      actionUrl: '/discover'
    },
    {
      id: 'notif-3',
      type: 'follower',
      icon: UserPlus,
      color: '#10B981',
      title: 'New follower',
      subtitle: 'Marcello V. followed you',
      timeAgo: '2h ago',
      read: false,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      actionUrl: '/hire'
    },
    {
      id: 'notif-4',
      type: 'message',
      icon: MessageSquare,
      color: '#8B5CF6',
      title: 'New message',
      subtitle: 'Elena sent you a message: "Hey! Loved your latest shoot set..."',
      timeAgo: '4h ago',
      read: true,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
      actionUrl: '/messages'
    },
    {
      id: 'notif-5',
      type: 'job',
      icon: Sparkles,
      color: '#8C533C',
      title: 'Collaboration Invite Received',
      subtitle: 'Alex Morgan invited you to "Monochrome Studio Shoot"',
      timeAgo: 'Yesterday',
      read: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      actionUrl: '/collaborations'
    }
  ]);

  // Mark single notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  // Delete notification
  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  // Filter logic
  const filteredNotifications = notifications.filter(n => {
    if (selectedTab === 'Unread') return !n.read;
    if (selectedTab === 'Jobs') return n.type === 'job';
    if (selectedTab === 'Social') return n.type === 'like' || n.type === 'follower' || n.type === 'message';
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-vh-100 py-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container px-3 px-lg-5" style={{ maxWidth: '800px' }}>
        
        {/* HEADER */}
        <div className="bg-white rounded-4 p-4 shadow-sm border mb-4">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <Bell size={20} style={{ color: '#8C533C' }} />
                <span className="badge rounded-pill bg-opacity-10 text-uppercase fw-bold px-3 py-1" style={{ backgroundColor: '#8C533C1A', color: '#8C533C' }}>
                  Activity Hub
                </span>
              </div>
              <h3 className="fw-bold text-dark mb-0">Notifications</h3>
              <p className="text-muted small mb-0">Stay updated on job matches, likes, messages, and new connections.</p>
            </div>

            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="btn btn-outline-dark btn-sm rounded-pill fw-bold px-3 d-flex align-items-center gap-1"
              >
                <CheckCheck size={16} /> Mark all as read ({unreadCount})
              </button>
            )}
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="d-flex gap-2 overflow-x-auto pb-3 mb-3 scrollbar-none">
          {['All', 'Unread', 'Jobs', 'Social'].map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`btn btn-sm rounded-pill px-4 py-2 fw-bold text-nowrap transition ${
                selectedTab === tab 
                  ? 'text-white shadow-sm' 
                  : 'btn-white bg-white text-dark border'
              }`}
              style={selectedTab === tab ? { backgroundColor: '#8C533C' } : {}}
            >
              {tab} {tab === 'Unread' && unreadCount > 0 && `(${unreadCount})`}
            </button>
          ))}
        </div>

        {/* NOTIFICATION LIST */}
        <div className="d-flex flex-column gap-3">
          {filteredNotifications.length === 0 ? (
            <div className="card border-0 shadow-sm rounded-4 p-5 text-center bg-white">
              <p className="text-muted mb-0">No notifications found in <strong>{selectedTab}</strong>.</p>
            </div>
          ) : (
            filteredNotifications.map((notif) => {
              const IconComponent = notif.icon;

              return (
                <div 
                  key={notif.id} 
                  className={`card border-0 shadow-sm rounded-4 p-3 transition hover-lift ${
                    notif.read ? 'bg-white' : 'bg-white border-start border-4'
                  }`}
                  style={!notif.read ? { borderLeftColor: '#8C533C' } : {}}
                >
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    
                    {/* Left: Avatar & Icon */}
                    <div className="d-flex align-items-center gap-3">
                      <div className="position-relative">
                        <img 
                          src={notif.avatar} 
                          alt="Notification avatar" 
                          className="rounded-circle object-fit-cover border" 
                          style={{ width: '48px', height: '48px' }}
                        />
                        <span 
                          className="position-absolute bottom-0 end-0 rounded-circle d-flex align-items-center justify-content-center text-white p-1 border border-2 border-white"
                          style={{ backgroundColor: notif.color, transform: 'translate(25%, 25%)', width: '22px', height: '22px' }}
                        >
                          <IconComponent size={12} />
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="fw-bold text-dark mb-0 small">{notif.title}</h6>
                          {!notif.read && (
                            <span className="badge rounded-circle p-1 bg-danger" style={{ width: '8px', height: '8px' }}></span>
                          )}
                        </div>
                        <p className="text-secondary extra-small mb-1">{notif.subtitle}</p>
                        <span className="text-muted extra-small">{notif.timeAgo}</span>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="d-flex align-items-center gap-2">
                      <a 
                        href={notif.actionUrl}
                        onClick={() => markAsRead(notif.id)}
                        className="btn btn-light btn-sm rounded-pill px-3 py-1 extra-small fw-bold d-flex align-items-center gap-1 border"
                      >
                        View <ChevronRight size={14} />
                      </a>

                      <button 
                        onClick={() => deleteNotification(notif.id)}
                        className="btn btn-light btn-sm rounded-circle p-2 text-muted border-0 hover-danger"
                        title="Delete notification"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}