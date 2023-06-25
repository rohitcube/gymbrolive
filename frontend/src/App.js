import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Calendar from "./Pages/Calendar";
import Feedback from "./Pages/Feedback";
import Accountmade from "./Pages/Accountmade";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/accountmade" element={<Accountmade />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

