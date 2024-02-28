import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Men from "./Men";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
import Checkout from "./Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/men" Component={Men} />
      <Route path="/cart" Component={Cart} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
