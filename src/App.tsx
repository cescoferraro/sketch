import './App.css'

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {AppRoutes} from "./AppRoutes";
import {BrowserRouter} from "react-router-dom";


const client = new ApolloClient({
    uri: 'https://graphql.sketch.cloud/api',
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
