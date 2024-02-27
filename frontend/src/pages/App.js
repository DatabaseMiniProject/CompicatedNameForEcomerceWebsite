import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
import ProductPage from "./ProductPage";
import PageSelector from "./PageSelector";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/category/:cname" Component={PageSelector} />
      <Route path="/cart" Component={Cart} />
      <Route path="/products/:id" Component={ProductPage}/>
    </Routes>
  );
}

export default App;
