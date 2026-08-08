'use client';
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Send, Image, Search } from 'lucide-react';

let socket;

export default function MessageCenter() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]); // List of available users to chat with
  const [activeUser, setActiveUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  // 1. Initialize user and Socket Connection
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);

    socket = io('http://localhost:5000'); // Your backend URL

    if (user?._id) {
      socket.emit('register_user', user._id);
    }

    socket.on('receive_message', (newMsg) => {
      setMessages((prev) => [...prev, newMsg]);
    });

    return () => socket.disconnect();
  }, []);

  // 2. Load conversations list (registered users)
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // 3. Fetch chat history when active conversation changes
  useEffect(() => {
    if (!activeUser || !currentUser) return;

    fetch(`/api/messages/${activeUser._id}`, {
      headers: { 'x-user-id': currentUser._id },
    })
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, [activeUser, currentUser]);

  // 4. Send Message Handler
  const handleSend = (e) => {
    e.preventDefault();
    if (!text.trim() || !activeUser) return;

    const payload = {
      senderId: currentUser._id,
      recipientId: activeUser._id,
      text,
    };

    socket.emit('send_message', payload);
    setMessages((prev) => [...prev, { ...payload, createdAt: new Date().toISOString() }]);
    setText('');
  };

  return (
    <div className="container-fluid px-3 px-md-5 py-4">
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white" style={{ height: 'calc(100vh - 120px)' }}>
        <div className="row g-0 h-100">
          
          {/* User List Column */}
          <div className="col-12 col-md-4 border-end h-100 overflow-y-auto">
            <div className="p-3 border-bottom">
              <h5 className="fw-bold mb-0">Messages</h5>
            </div>
            {users.map((u) => (
              <div
                key={u._id}
                onClick={() => setActiveUser(u)}
                className={`p-3 border-bottom d-flex align-items-center gap-3 cursor-pointer ${
                  activeUser?._id === u._id ? 'bg-light' : ''
                }`}
                style={{ cursor: 'pointer' }}
              >
                <div className="fw-bold rounded-circle bg-secondary text-white p-2 text-center" style={{ width: 40, height: 40 }}>
                  {u.name?.[0]}
                </div>
                <div>
                  <h6 className="mb-0 fw-bold small">{u.name}</h6>
                  <small className="text-muted">{u.role || 'Member'}</small>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Window */}
          <div className="col-12 col-md-8 d-flex flex-column h-100">
            {activeUser ? (
              <>
                <div className="p-3 border-bottom fw-bold">{activeUser.name}</div>
                <div className="flex-grow-1 p-3 overflow-y-auto bg-light d-flex flex-column gap-2">
                  {messages.map((msg, index) => {
                    const isMe = msg.senderId === currentUser?._id || msg.sender === currentUser?._id;
                    return (
                      <div key={index} className={`d-flex ${isMe ? 'justify-content-end' : 'justify-content-start'}`}>
                        <div
                          className={`p-2 px-3 rounded-4 small ${isMe ? 'text-white' : 'bg-white border text-dark'}`}
                          style={{ backgroundColor: isMe ? '#8C533C' : '#FFF' }}
                        >
                          {msg.text}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <form onSubmit={handleSend} className="p-3 border-top d-flex gap-2 bg-white">
                  <input
                    className="form-control rounded-pill bg-light border-0 px-3"
                    placeholder="Type a message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <button type="submit" className="btn text-white rounded-circle p-2" style={{ backgroundColor: '#8C533C' }}>
                    <Send size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="m-auto text-muted">Select a user to chat</div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}