import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Navebar from "./Components/Navbar";
import Login from "./Components/Login.jsx";

function App() {
  return (
    <>
      <Navebar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
