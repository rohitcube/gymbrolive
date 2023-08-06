import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Main() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Navigate back to the login page
  };

  const handleGoToCalendar = () => {
    navigate("/calendarpage"); //Navigate to the calendar page
  };

  const handleGoToFeedback = () => {
    navigate("/feedback"); //Navigate to the feedback page
  };

  const handleGoToBookedSlots = () => {
    navigate("/bookedslots"); //Navigate to the booked slots page
  };

  

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>    
      <div>
        <Button 
          variant="contained" 
          onClick={handleGoToCalendar} 
          style={{ fontSize: "3rem", padding: "10px 40px" }}>
          Book Slots
        </Button>
        <div style={{ marginBottom: "20px" }} />
        <Button variant="contained" onClick={handleGoToBookedSlots}style={{ fontSize: "3rem", padding: "10px 30px" }}>
          Check my slots
        </Button>
        <div style={{ marginBottom: "20px" }} />
        <Button 
          variant="contained" 
          onClick={handleGoToFeedback} 
          style={{ fontSize: "3rem", padding: "10px 40px" }}>
          Feedback
        </Button>
        <div style={{ marginBottom: "20px" }} />
        <Button variant="contained" onClick={handleGoBack}style={{ fontSize: "3rem", padding: "10px 30px" }}>
          Back to Login
        </Button>
      </div>
    </div>
  );
}

export default Main;
