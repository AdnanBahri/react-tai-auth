import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/home/Home";
import LoginScreen from "../pages/login/LoginScreen";
import RegisterScreen from "../pages/register/RegisterScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
