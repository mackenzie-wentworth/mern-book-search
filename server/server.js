const express = require('express');
// MW - Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

// MW - require middleware
const { authMiddleware } = require('./utils/auth');

// MW - Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// MW - add 'authMiddleware' to Apollo server as "context" --> to configure Apollo with authorization middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// MW - apply ApolloServer to the Express server as middleware (since we are using apollo-server-express@2.15.0 version)
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
