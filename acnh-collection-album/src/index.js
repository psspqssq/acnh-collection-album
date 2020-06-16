import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Menu } from "./components/Menu";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import graphqlClient from "./api/graphql";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={graphqlClient}>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
