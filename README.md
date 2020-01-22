# Chat App

There are two core pieces to this project:

- `/client`: React application
- `/server`: Node/Express + Socket.io server

Requirements: Node and NPM installed.

## Client Notes

The React application was generated from `create-react-app` to streamline the process and some of the boilerplate was removed. Key notes of tools used:

- [Socket.io](https://socket.io/) (client): used to communicate realtime messaging with server and other clients
- [React](https://reactjs.org/): framework used to build the UI
- [React Hooks](https://reactjs.org/docs/hooks-intro.html): used for function based components to control state and lifecycle methods
- [Styled-components](https://styled-components.com/): used for css-in-js primitive components to promote declarative component composition

## Server Notes

- Runs on [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/): spins up and hosts web app
- [Socket.io](https://socket.io/) (server): for realtime event based communication to support the chat system


# Get started

1. Clone the repositorty
2. Install dependencies for both client and server. You may want to open different tabs for each:

    Client/Web app :
    ```sh
    $ cd client
    $ npm i
    ```

    Server:
    ```sh
    $ cd server
    $ npm i
    ```
3. Run and client and server separately. You can use the tabs from the previous step:

    In the `/client` directory:
    ```sh
    $ npm start
    ```

    In the `/server` directory:
    ```sh
    $ npm start
    ```
4. For a two person chat, open two tabs in your browser at `http://localhost:3000/` and join the same channel name with different user names.
    - Example tab 1:
        - user: Jeffrey
        - channel: general
    - Example tab 2:
        - user: Martha
        - channel: general
5. Chat away in each tab!
6. When done, you can exit by clicking the `X` in the top right hand corner or close the window. The server will know you disconnected, clean the user up, and tell other users in the channel that user has disconnected.

