'use client';
import React, { useState } from 'react';
import { Search, Send, Image, MoreVertical, Phone, Video, CheckCheck } from 'lucide-react';

const CONVERSATIONS = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'Senior Runway Stylist',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    online: true,
    lastMessage: 'Let me know when you arrive in Milan!',
    time: '10:42 AM',
    unread: 2,
    chatHistory: [
      { sender: 'them', text: 'Hey Ashray! Did you see the latest mood board for Paris Fashion Week?', time: '10:30 AM' },
      { sender: 'me', text: 'Yes, I loved the color palette! The warm bronze tones look amazing.', time: '10:35 AM' },
      { sender: 'them', text: 'Let me know when you arrive in Milan!', time: '10:42 AM' }
    ]
  },
  {
    id: 2,
    name: 'Marco Bianchi',
    role: 'Fashion Photographer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    online: false,
    lastMessage: 'I sent over the raw files from yesterday shoot.',
    time: 'Yesterday',
    unread: 0,
    chatHistory: [
      { sender: 'them', text: 'I sent over the raw files from yesterday shoot.', time: 'Yesterday' }
    ]
  },
  {
    id: 3,
    name: 'Aisha Khan',
    role: 'Fashion Designer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    online: true,
    lastMessage: 'Would love your feedback on the new silk dresses.',
    time: 'Aug 6',
    unread: 0,
    chatHistory: [
      { sender: 'them', text: 'Would love your feedback on the new silk dresses.', time: 'Aug 6' }
    ]
  }
];

export default function MessageCenter() {
  const [conversations, setConversations] = useState(CONVERSATIONS);
  const [activeChatId, setActiveChatId] = useState(1);
  const [messageInput, setMessageInput] = useState('');

  const activeChat = conversations.find((c) => c.id === activeChatId);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage = {
      sender: 'me',
      text: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeChatId
          ? {
              ...c,
              lastMessage: messageInput,
              time: 'Just now',
              chatHistory: [...c.chatHistory, newMessage]
            }
          : c
      )
    );

    setMessageInput('');
  };

  return (
    <div className="container-fluid px-3 px-md-5 py-4">
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white" style={{ height: 'calc(100vh - 120px)' }}>
        <div className="row g-0 h-100">
          
          {/* Left Panel: Conversation List */}
          <div className="col-12 col-md-4 border-end d-flex flex-column h-100" style={{ borderColor: '#EFECE6' }}>
            {/* Header */}
            <div className="p-3 border-bottom" style={{ borderColor: '#EFECE6' }}>
              <h5 className="fw-bold mb-3" style={{ color: '#2C221E' }}>Messages</h5>
              <div className="input-group">
                <span className="input-group-text bg-light border-0 ps-3">
                  <Search size={16} className="text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control bg-light border-0 py-2 small"
                  placeholder="Search conversations..."
                  style={{ fontSize: '0.85rem' }}
                />
              </div>
            </div>

            {/* List */}
            <div className="overflow-y-auto flex-grow-1">
              {conversations.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setActiveChatId(chat.id)}
                  className={`p-3 d-flex align-items-center gap-3 border-bottom cursor-pointer transition-all ${
                    chat.id === activeChatId ? 'bg-light' : ''
                  }`}
                  style={{ borderColor: '#F5F3EF', cursor: 'pointer' }}
                >
                  <div className="position-relative">
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                      className="rounded-circle object-fit-cover"
                      style={{ width: '48px', height: '48px' }}
                    />
                    {chat.online && (
                      <span
                        className="position-absolute bottom-0 end-0 rounded-circle border border-2 border-white"
                        style={{ width: '12px', height: '12px', backgroundColor: '#28a745' }}
                      />
                    )}
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <h6 className="mb-0 fw-bold text-truncate small" style={{ color: '#2C221E' }}>
                        {chat.name}
                      </h6>
                      <span className="text-muted" style={{ fontSize: '0.7rem' }}>
                        {chat.time}
                      </span>
                    </div>
                    <p className="text-muted text-truncate mb-0" style={{ fontSize: '0.75rem' }}>
                      {chat.lastMessage}
                    </p>
                  </div>
                  {chat.unread > 0 && (
                    <span
                      className="badge rounded-circle text-white d-flex align-items-center justify-content-center"
                      style={{ width: '20px', height: '20px', backgroundColor: '#8C533C', fontSize: '0.65rem' }}
                    >
                      {chat.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Chat Area */}
          {activeChat ? (
            <div className="col-12 col-md-8 d-flex flex-column h-100 bg-white">
              {/* Active User Header */}
              <div className="p-3 border-bottom d-flex align-items-center justify-content-between" style={{ borderColor: '#EFECE6' }}>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={activeChat.avatar}
                    alt={activeChat.name}
                    className="rounded-circle object-fit-cover"
                    style={{ width: '42px', height: '42px' }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold small" style={{ color: '#2C221E' }}>
                      {activeChat.name}
                    </h6>
                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                      {activeChat.role} • {activeChat.online ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 text-muted">
                  <button className="btn btn-sm btn-light rounded-circle p-2"><Phone size={16} /></button>
                  <button className="btn btn-sm btn-light rounded-circle p-2"><Video size={16} /></button>
                  <button className="btn btn-sm btn-light rounded-circle p-2"><MoreVertical size={16} /></button>
                </div>
              </div>

              {/* Chat History */}
              <div className="p-4 overflow-y-auto flex-grow-1 d-flex flex-column gap-3" style={{ backgroundColor: '#FAF8F5' }}>
                {activeChat.chatHistory.map((msg, index) => {
                  const isMe = msg.sender === 'me';
                  return (
                    <div key={index} className={`d-flex flex-column ${isMe ? 'align-items-end' : 'align-items-start'}`}>
                      <div
                        className="p-3 rounded-4 shadow-sm"
                        style={{
                          maxWidth: '65%',
                          backgroundColor: isMe ? '#8C533C' : '#FFFFFF',
                          color: isMe ? '#FFFFFF' : '#2C221E',
                          fontSize: '0.85rem'
                        }}
                      >
                        {msg.text}
                      </div>
                      <span className="text-muted mt-1 d-flex align-items-center gap-1" style={{ fontSize: '0.65rem' }}>
                        {msg.time} {isMe && <CheckCheck size={12} className="text-primary" />}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Input Bar */}
              <div className="p-3 border-top bg-white" style={{ borderColor: '#EFECE6' }}>
                <form onSubmit={handleSendMessage} className="d-flex align-items-center gap-2">
                  <button type="button" className="btn btn-light rounded-circle p-2 text-muted">
                    <Image size={18} />
                  </button>
                  <input
                    type="text"
                    className="form-control border-0 bg-light rounded-pill px-3 py-2"
                    placeholder={`Message ${activeChat.name}...`}
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    style={{ fontSize: '0.85rem' }}
                  />
                  <button
                    type="submit"
                    className="btn text-white rounded-circle p-2 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: '#8C533C', width: '38px', height: '38px' }}
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="col-12 col-md-8 d-flex align-items-center justify-content-center text-muted">
              Select a conversation to start chatting
            </div>
          )}

        </div>
      </div>
    </div>
  );
}