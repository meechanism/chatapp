# Chat App

There are two core pieces to this project:

- `/client`: React application
- `/server`: Node/Express + Socket.io server

Requirements: Node and NPM installed.

## Client Notes

The React application was generated from `create-react-app` to streamline the process and some of the boilerplate was removed. Key notes of tools used:

- Socket.io Client: used to communicate realtime messaging with server and other clients
- React Hooks: used for function based components to control state and lifecycle methods
- Styled-components: used for css-in-js primitive components to promote declarative component composition

## Server Notes

The server is Express and runs on NodeJS. I used Socket.io for realtime communication.

