/*import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', {
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

socket.on('connect', () => {
  console.log('✅ Connected to socket server');
});

socket.on('connect_error', (err) => {
  console.error('❌ Socket connection error:', err);
});

socket.on('disconnect', (reason) => {
  console.warn('⚠️ Disconnected:', reason);
});

export default socket;*/
