import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact component element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
