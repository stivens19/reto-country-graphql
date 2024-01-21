import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AppRouter from "./router/AppRouter";
import CountryProvider from "./context/countries/CountryProvider";
import UiProvider from "./context/ui/UiProvider";

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL_COUNTRIES,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CountryProvider>
        <UiProvider>
          <AppRouter />
        </UiProvider>
      </CountryProvider>
    </ApolloProvider>
  </React.StrictMode>
);
