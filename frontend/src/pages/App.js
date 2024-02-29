import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../Api/AuthProvider";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
import Checkout from "./Checkout";
import ProductPage from "./ProductPage";
import PageSelector from "./PageSelector";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category/:cname" Component={PageSelector} />
        <Route path="/cart" Component={Cart} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" Component={ProductPage} />
        <Route path="/checkout/:id" Component={Checkout} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
