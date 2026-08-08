import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const server = createServer(app);

// Initialize Socket.io with CORS configured for Next.js dev server
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Map to track connected users: userId -> socketId
const activeUsers = new Map();

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // 1. Register online user
  socket.on('register_user', (userId) => {
    if (userId) {
      activeUsers.set(userId, socket.id);
      console.log(`Registered User ${userId} with Socket ${socket.id}`);
    }
  });

  // 2. Handle real-time sending
  socket.on('send_message', (data) => {
    const { senderId, recipientId, text } = data;
    const recipientSocketId = activeUsers.get(recipientId);

    // If recipient is online, emit event directly to them
    if (recipientSocketId) {
      io.to(recipientSocketId).emit('receive_message', {
        sender: senderId,
        recipient: recipientId,
        text,
        createdAt: new Date().toISOString(),
      });
    }
  });

  // 3. Handle disconnection
  socket.on('disconnect', () => {
    for (let [userId, socketId] of activeUsers.entries()) {
      if (socketId === socket.id) {
        activeUsers.delete(userId);
        console.log(`User ${userId} disconnected`);
        break;
      }
    }
  });
});

const PORT = process.env.SOCKET_PORT || 5000;
server.listen(PORT, () => {
  console.log(`WebSocket server running on http://localhost:${PORT}`);
});