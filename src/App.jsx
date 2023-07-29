import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import AddCategory from "./components/AddCategory/AddCategory.jsx";
import AddCustomers from "./components/AddCustomers/AddCustomers.jsx";
import AddVendors from "./components/AddVendors/AddVendors.jsx";
import AddItems from "./components/AddItems/AddItems.jsx";
import SubNavbar from "./components/SubNavbar/SubNavbar.jsx";
import CategoryData from "./components/TableData/CategoryData.jsx";
import ItemData from "./components/TableData/ItemData.jsx";
import CustomerData from "./components/TableData/CustomerData.jsx";
import VendorData from "./components/TableData/VendorData.jsx";
import Drag from "./components/Drag.jsx";
import { SharedContextProvider } from "./contexts/SharedContext.jsx";
function App() {
  return (
    <>
      <SharedContextProvider>
         <Navbar />
        {/* <Sidebar /> */}
        {/* <AddCategory />
        <AddItems />
        <AddCustomers />
        <AddVendors />
        <ItemData />
        <CustomerData />
        <VendorData />  */}
        <CategoryData/>
      </SharedContextProvider>
    </>
  );
}

export default App;
