const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUserById, getUserById, getUsersInChannel } = require ('./users');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require('./router');

// Middlewares
app.use(router);

// Server
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});

// Client events on io instance
io.on('connection', (socket) => {
    // When a user joins a channel on client side...
    socket.on('join', ({ name, channel }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, channel });
        if (error) return callback(error);

        socket.emit('message', {
            user: 'admin',
            text: `Hi ${user.name}, welcome to ${user.channel}!`
        });

        // Sends msg to all other users in channel
        socket.broadcast.to(user.channel).emit('message', {
            user: 'admin',
            text: `${user.name} has joined the channel!`
        });

        socket.join(user.channel);

        io.to(user.channel).emit('channelData', {
            channel: user.channel,
            users: getUsersInChannel(user.channel)
        });
        callback();
    })

    // User generated messages from frontend, emit back down to client to channel
    socket.on('sendMessage', (message, callback) => {
        const user = getUserById(socket.id);
        io.to(user.channel).emit('message', { user: user.name, text: message });
        callback();
    });

    // manage specific socket connected
    socket.on('disconnect', () => {
        const user = removeUserById(socket.id);

        // let other knows know this person left
        if (user) {
            io.to(user.channel).emit('message', {
                user: 'admin',
                text: `${user.name} has left the channel`
            });

            io.to(user.channel).emit('roomData', {
                channel: user.channel,
                users: getUsersInChannel(user.channel)
            });
        }
    })
});
