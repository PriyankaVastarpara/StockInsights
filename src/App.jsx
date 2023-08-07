import React ,{useState,useContext} from "react";
import "./main.css";
import UpdateCategory from "./components/UpdateCategory/UpdateCategory";
import StockInsights from "./StockInsights";
import { BrowserRouter } from "react-router-dom";
//import { SharedContextProvider } from "./contexts/SharedContext";
import { SharedContextProvider } from "./contexts/SharedContext.jsx";

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  return (
    <>
      <SharedContextProvider>
        <BrowserRouter>
          <StockInsights />
        </BrowserRouter>
       {/* <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={openForm}>
        Open Update Form
      </button>

      {isFormOpen && <UpdateCategory onClose={closeForm} />} */}
      </SharedContextProvider>
    </>
  );
}
