import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Men from "./Men";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
import ProductPage from "./ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/men" Component={Men} />
      <Route path="/cart" Component={Cart} />
      <Route path="/product" Component={ProductPage}/>
    </Routes>
  );
}

export default App;
