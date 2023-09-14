import React,{useState}  from "react";
import "./main.css";
import Login from "./components/Login/Login";
import StockInsights from "./StockInsights";
import { BrowserRouter } from "react-router-dom";
import { SharedContextProvider } from "./contexts/SharedContext.jsx";
import Registration from "./components/Registration/Registration";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
    {/* <Registration/> */}
    {/* <div>
      {isLoggedIn ? ( */}
       <SharedContextProvider>
       <BrowserRouter>
         <StockInsights />
       </BrowserRouter>
     </SharedContextProvider>
      {/* ) : (
        <Login onLogin={handleLogin} />
      )}  
    </div>  */}
    </>
  );
}

