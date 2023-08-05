import React from "react";
import "./main.css";
import StockInsights from "./StockInsights";
import { BrowserRouter } from "react-router-dom";
import { SharedContextProvider } from "./contexts/SharedContext";

export default function App() {
  return (
    <>
      <SharedContextProvider>
        <BrowserRouter>
          <StockInsights />
        </BrowserRouter>
      
      </SharedContextProvider>
    </>
  );
}
