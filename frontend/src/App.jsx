import { React, use } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Leaderboard from "./components/Leaderboard";
import Profile from "./pages/Profile";
import ExerciseList from "./pages/ExerciseList";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Feedback from "./pages/Feedback";

function App() {
  const isAuthenticated = localStorage.getItem("user") !== null;
  const Navigate = useNavigate();
  return (
    <>
    <Navbar/>
      <Routes>
        {/* linking the pages */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Signin />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/exerciseList" element={<ExerciseList />}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>

        {/* linking the components */}
        <Route path="/footer" element={<Footer/>}></Route>
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
        <Route path="/navbar" element={<Navbar/>}></Route>
        <Route path="/section1" element={<Section1/>}></Route>
        <Route path="/section2" element={<Section2/>}></Route>
        <Route path="/section3" element={<Section3/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
