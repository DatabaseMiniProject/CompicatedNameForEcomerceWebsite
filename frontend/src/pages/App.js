import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
<<<<<<< HEAD
import Checkout from "./Checkout";
=======
import ProductPage from "./ProductPage";
import PageSelector from "./PageSelector";
>>>>>>> 440026174e18a381c00fff0f58e19912f925854e

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/category/:cname" Component={PageSelector} />
      <Route path="/cart" Component={Cart} />
<<<<<<< HEAD
      <Route path="/checkout" element={<Checkout />} />
=======
      <Route path="/products/:id" Component={ProductPage}/>
>>>>>>> 440026174e18a381c00fff0f58e19912f925854e
    </Routes>
  );
}

export default App;
