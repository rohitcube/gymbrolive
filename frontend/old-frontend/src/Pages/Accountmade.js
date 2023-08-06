import React from "react";
import { useNavigate } from "react-router-dom";

function Accountmade() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Navigate back to the login page
  };

  const handleGoToCalendar = () => {
    navigate("/calendar"); // Navigate to the calendar page
  };

  const handleGoToFeedback = () => {
    navigate("/feedback"); // Navigate to the feedback page
  };

  return (
    <div>
      <header>
        <h1>Gymbro - Main Page</h1>
      </header>
      <main>
        <h3>Welcome to the main page!</h3>
        <h2>Account made successfully!</h2>
      </main>
      <div>
        <button onClick={handleGoToCalendar}>Book Slots</button>
        <br />
        <button onClick={handleGoToFeedback}>Feedback</button>
        <br />
        <button onClick={handleGoBack}>Back to Login</button>
      </div>
    </div>
  );
}

export default Accountmade;