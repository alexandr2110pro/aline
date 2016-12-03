# The Task

1. Build a SPA with ReactJS.
2. Use ES6 and webpack as a bundler
3. Provide a bare minimum node.js server that serves the application. Server code should also be written in ES6
4. In ReactJS SPA there must be 4 pages for home, users, contact, login. Please use Bootstrap 3 for bare minimum styling
5. We need an authentication system so that a non logged-in user can see only home, login and contact but he cannot visit users page
6. Use jwt for authentication and sessionstorage
7. Login a user with credentials john@doe.com - secret by making a real http request to a nodejs api endpoint. Interaction with any DB system isn't required. You can just validate those dummy credentials
8. Logged in user should see a welcome message in home page. This message should be personal and should be hidden for non logged-in users. In order to show that personal message you should use data saved into redux store
9. Use Redux and Redux-thunk middleware to handle actions
10. Contact form should be a pretty basic one with inputs: name, email, message. Send message to the server by making a real http request to a nodejs api endpoint
11. Provide a logout mechanism and clear data saved in redux store accordingly
12. Show a dummy list of users in users page. These should be provided by redux store. Use dummy ones without making a GET request to the nodejs server.
