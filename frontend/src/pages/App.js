import { Routes, Route } from "react-router-dom";
import home from "./home";
import Men from "./Men";
import Cart from "./Cart";

function App() {
  return (
    <Routes>
      <Route path="/" Component={home} />
      <Route path="/men" Component={Men}/>
      <Route path="/cart" Component={Cart}/>
    </Routes>
  );
}

export default App;
