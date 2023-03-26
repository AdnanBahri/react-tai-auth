import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./common/AnimatedRoutes";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-slate-800 text-gray-100">
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
};

export default App;
