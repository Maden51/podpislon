import { Routes, Route } from "react-router-dom";
import Main from "./main";
import Politics from "./politics";

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
    </Routes>
  );
}

export default App;
