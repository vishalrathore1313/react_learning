import React,{useState} from "react";
import UserContextProvider from "./context/UserContextProvider";
import FormCard from "./components/FormCard";
import ItemCard from "./components/ItemCard";

function App() {
  const [show, setShow] = useState(true);

  return(
     <UserContextProvider>
        <div>
         {(show)? <FormCard setShow={setShow}/>:  <ItemCard setShow={setShow}/>}
        </div>    
     </UserContextProvider>
  )   
}

export default App;
