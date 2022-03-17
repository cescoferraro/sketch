import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const client = new ApolloClient({
  uri: "https://thingproxy.freeboard.io/fetch/https://graphql.sketch.cloud/api",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename={"/sketch"}>
        <AppRoutes />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
