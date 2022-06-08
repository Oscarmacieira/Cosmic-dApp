import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import themes from "./theme/schema";
import { storage } from "./utils/storage";
import { MoralisProvider } from "react-moralis";

const Index = () => {
  storage.set("themes", themes);
  return (
    <MoralisProvider
      initializeOnMount={true}
      appId={String(process.env.REACT_APP_MORALIS_APP_ID)}
      serverUrl={String(process.env.REACT_APP_SERVER_URL)}
    >
      <App />
    </MoralisProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
