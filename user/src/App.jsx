import React,{useState,useEffect}  from "react";
import "./main.css";
import Login from "./components/Login/Login";
import StockInsights from "./StockInsights";
import { BrowserRouter } from "react-router-dom";
import { SharedContextProvider } from "./contexts/SharedContext.jsx";
import Registration from "./components/Registration/Registration";
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
        setStep("registration");
      }
    }, [cookies]);

  const handleRegisterSuccess = () => {
    setStep("login");
  };

  const handleLoginSuccess = () => {
    setStep("stockinsights");
    setIsLoggedIn(true);
  };
  const handleLoginRedirect = () => {
    setStep("login");
    setIsLoggedIn(true);
  };
  const handleRegisterRedirect = () => {
    setStep("registration");
  
  };
 
  return (
    <>
    
       <SharedContextProvider>
       <BrowserRouter>
         {step === "registration" && (
          <Registration onRegisterSuccess={handleRegisterSuccess}  onLoginRedirect={handleLoginRedirect}/>
        )}
        {step === "login" && (
          <Login onLoginSuccess={handleLoginSuccess} onRegisterRedirect={handleRegisterRedirect}/>
        )}
        {step === "stockinsights" && isLoggedIn && (
          <StockInsights/>
        )}
       </BrowserRouter> 
     </SharedContextProvider>
     
    </>
  );
}

