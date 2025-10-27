import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Navebar from "./Components/Navbar";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/Signup.jsx";
import Plans from "./Components/Plan.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <Navebar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/plan" element={<Plans />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
