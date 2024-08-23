const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

// Create an Express application
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Broadcast incoming messages to all clients
    socket.on('message', (msg) => {
        io.emit('message', msg);
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
