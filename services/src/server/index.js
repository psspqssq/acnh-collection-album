import bodyParser from "body-parser";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { gql } from "apollo-server";

import typeDefs from "../graphql/schemas/houseware.js";
import resolvers from "../graphql/resolvers/houseware.js";

const port = process.env.PORT || 3000;

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs
});

const app = express();

apolloServer.applyMiddleware({ app, path: "/graphql" });

//app.use("/graphql", bodyParser.json());

app.all("*", (req, res) => {
  res.status(404).json({ status: "Missing endpoint" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Services listening on http://localhost:${port}`);
});
