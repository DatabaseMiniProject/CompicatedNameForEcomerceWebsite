import { Routes, Route } from "react-router-dom";
import AuthContext from "../Api/AuthProvider";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
import Checkout from "./Checkout";
import ProductPage from "./ProductPage";
import PageSelector from "./PageSelector";
import { useContext } from "react";
import { CartProvider } from "../Api/CartContext";

function App() {
  const { user } = useContext(AuthContext);
  console.log(user, "app");
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category/:cname" Component={PageSelector} />
        <Route
          path="/cart"
          element={user?.isAuthenticated ? <Cart /> : <Login />}
        />
        <Route
          path="/checkout/:id"
          element={user?.isAuthenticated ? <Checkout /> : <Login />}
        />
        <Route path="/products/:id" Component={ProductPage} />
      </Routes>
    </CartProvider>
  );
}

export default App;
