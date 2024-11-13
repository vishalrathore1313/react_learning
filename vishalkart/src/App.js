// import './App.css';
import Home from "./components/Home";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider";
import Cart from "./components/Cart";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
