import { Routes, Route } from "react-router-dom";
import home from "./home";
import Men from "./Men";

function App() {
  return (
    <Routes>
      <Route path="/" Component={home} />
      <Route path="/men" Component={Men}/>
    </Routes>
  );
}

export default App;
