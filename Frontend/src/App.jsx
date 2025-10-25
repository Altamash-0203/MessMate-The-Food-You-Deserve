import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Navebar from "./Components/Navbar";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/Signup.jsx";
import Plans from "./Components/Plan.jsx";

function App() {
  return (
    <>
      <Navebar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/plan" element={<Plans />} />
      </Routes>
    </>
  );
}

export default App;
