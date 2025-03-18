// 📌 JavaScript Advanced - Introduction to GraphQL

// Welcome to the GraphQL section of the JavaScript Advanced tutorial!
// Here, you'll learn how to use GraphQL as an alternative to REST APIs.

// Installing GraphQL and Express
// Run the following command in your Node.js project:
// npm install express graphql express-graphql

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

//  Defining a GraphQL Schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

// Root Resolver
const root = {
  message: () => "Hello, GraphQL!",
};

// Setting Up an Express Server with GraphQL
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enables GraphiQL UI
  })
);

app.listen(4000, () => {
  console.log("GraphQL server running at http://localhost:4000/graphql");
});

// 💡 GraphQL allows flexible querying, reducing over-fetching and under-fetching of data!
