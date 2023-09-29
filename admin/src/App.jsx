
import React,{useState,useEffect}  from "react";
import "./main.css";
import Login from "./components/Login/Login";
import StockInsights from "./StockInsights";
import { BrowserRouter } from "react-router-dom";
import { SharedContextProvider } from "./contexts/SharedContext.jsx";
// import Registration from "./components/Registration/Registration";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";

export default function App() {
  const [step, setStep] = useState("registration");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

    // Check if the cookie exists on initial render
    useEffect(() => {
      if (cookies.jwt) {
        setIsLoggedIn(true);
        setStep("stockinsights");
      } else {
        setStep("login");
      }
    }, [cookies]);

  const handleLoginSuccess = () => {
    setStep("stockinsights");
    setIsLoggedIn(true);
  };
 
 
  return (
    <>
    
       <SharedContextProvider>
       <BrowserRouter>
      
        {step === "login" && (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
        {step === "stockinsights" && isLoggedIn && (
          <StockInsights/>
        )}
       </BrowserRouter> 
     </SharedContextProvider>
     
    </>
  );
}

