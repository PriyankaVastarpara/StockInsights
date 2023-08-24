import React,{useState}  from "react";
import "./main.css";
import Login from "./components/Login/Login";
import StockInsights from "./StockInsights";
import { BrowserRouter } from "react-router-dom";
import { SharedContextProvider } from "./contexts/SharedContext.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here, and then set isLoggedIn to true upon successful login
    setIsLoggedIn(true);
  };
  return (
    <>
    <div>
      {isLoggedIn ? (
       <SharedContextProvider>
       <BrowserRouter>
         <StockInsights />
       </BrowserRouter>
     </SharedContextProvider>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
    </>
  );
}
