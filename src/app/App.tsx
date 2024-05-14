import { Routes, Route } from "react-router-dom";
import Main from "./main";
import Politics from "./politics";
import About from "./about";
import Prices from "./prices";

function App() {
  return (
    <Routes>
      <Route 
        path="/"
        element={<Main />}
      />
      <Route 
        path="/documents/politics" 
        element={<Politics />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/prices"
        element={<Prices />}
      />
    </Routes>
  );
}

export default App;
