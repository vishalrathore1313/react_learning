import React,{useState} from "react";
import FormCard from "./components/FormCard";
import TableCard from "./components/TableCard";
import UserContextProvider from "./context/UserContextProvider";

function App() {

  const [show, setShow] = useState(true);

  return(
     <UserContextProvider>
        <div className="container">
         {show ? <FormCard setShow={setShow}/>:  <TableCard setShow={setShow}/>}
        </div>
     </UserContextProvider>
  )   
}

export default App;
