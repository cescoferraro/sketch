import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";

const client = new ApolloClient({
  uri: "https://graphql.sketch.cloud/api",
  cache: new InMemoryCache(),
});

function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename={"/sketch"}>
        <AppRoutes />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
