const normalize = require('./utilities').normalize;

// A list of users currently in chat
const users = [];

const addUser = ({ id, name, channel }) => {

    const nornamlizedName = normalize(name);
    const nornamlizedChannel = normalize(channel);
    const existingUser = users.find(user => user.channel === nornamlizedChannel && user.name === nornamlizedName)

    if (existingUser) {
        return { error: 'A user with that name already exists in channel'}
    }

    const user = { id,
        name: nornamlizedName,
        channel: nornamlizedChannel
    };

    users.push(user);
    console.dir(users);
    return { user }
}

const removeUserById = (id) => {
    const index = users.findIndex( user=> user.id === id);
    if (index !== -1) {
        // return our spliced user
        return users.splice(index, 1)[0];
    }
}

const getUserById = (id) => users.find(user => user.id === id);

const getUsersInChannel = (channel) => users.filter(user => user.channel === channel);

module.exports = { addUser, removeUserById, getUserById, getUsersInChannel};
