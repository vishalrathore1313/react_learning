// import './App.css';
import Home from "./components/Home";
import Shop from "./components/Shop";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      {/* <Home/> */}
      <Shop />
    </UserContextProvider>
  );
}

export default App;
