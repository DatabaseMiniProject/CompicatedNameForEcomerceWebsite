import { Routes, Route } from "react-router-dom";
import home from "./home";

function App() {
  return (
    <Routes>
      <Route path="/" element={home} />
    </Routes>
  );
}

export default App;
