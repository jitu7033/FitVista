import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Register";
import Signin from "./pages/Login";
import Leaderboard from "./components/Leaderboard";
import Profile from "./pages/Profile";
import ExerciseList from "./pages/ExerciseList";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Feedback from "./pages/Feedback";
import PushUp from "./pages/PushUp.jsx";
import SitUp from "./pages/SitUp.jsx";

function App() {
  // Creating Refs for Navigation
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      {/* Passing Refs to Navbar */}
      <Navbar homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />

      <Routes>
        <Route
          path="/"
          element={<Home homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />}
        />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exerciseList" element={<ExerciseList />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

        <Route path="/pushup" element={<PushUp />} />
        <Route path="/situp" element={<SitUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;