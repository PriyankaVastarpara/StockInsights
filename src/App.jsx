import Navbar from './components/Navbar/Navbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import AddCategory from './components/AddCategory/AddCategory.jsx';
import AddCustomers from './components/AddCustomers/AddCustomers.jsx';
import AddVendors from './components/AddVendors/AddVendors.jsx';
import { SharedContextProvider } from "./contexts/SharedContext.jsx";
function App() {
  return (
    <>
    <SharedContextProvider> 
      {/* <Navbar />
      <Sidebar /> 
      <Trial />
     <FormComponent/>  
     <AddCategory/>
     <AddCustomers/>*/}
     <AddVendors/>
   </SharedContextProvider >
   </>
      )
}

      export default App;
