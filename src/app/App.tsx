import { Routes, Route } from "react-router-dom";
import Main from "./main";
import Politics from "./politics";
import About from "./about";
import Prices from "./prices";
import SMM from "./SMM";
import Contacts from "./contacts";
import { YMaps } from "@pbe/react-yandex-maps";

function App() {
  return (
    <YMaps>
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
        <Route
          path="/SMM"
          element={<SMM />}
        />
        <Route
          path="/contacts"
          element={<Contacts />}
        />
      </Routes>
    </YMaps>
  );
}

export default App;
