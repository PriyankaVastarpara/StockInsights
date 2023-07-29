import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import AddCategory from "./components/AddCategory/AddCategory.jsx";
import AddCustomers from "./components/AddCustomers/AddCustomers.jsx";
import AddVendors from "./components/AddVendors/AddVendors.jsx";
import AddItems from "./components/AddItems/AddItems.jsx";
import SubNavbar from "./components/SubNavbar/SubNavbar.jsx";
import CustomerData from "./components/TableData/CustomerData.jsx";
import VendorData from "./components/TableData/VendorData.jsx";
import { SharedContextProvider } from "./contexts/SharedContext.jsx";
function App() {
  return (
    <>
      <SharedContextProvider>
        {/* <Navbar />
   
      <AddCategory/>
    <AddCustomers/> 
    <AddVendors/>
        <AddItems/>  
        <CustomerData/>  
        <SubNavbar/>   
        < VendorData/> */}
        <Sidebar />
      </SharedContextProvider>
    </>
  );
}

export default App;
