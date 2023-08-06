import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import { useState, useEffect } from 'react';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: '#3b417a',
  borderRadius: theme.shape.borderRadius,
}));

function BookedSlots() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const studentNo = sessionStorage.getItem("studentNo");
    if (studentNo) {
      const route = `https://gymbro-mysql-6b313f0f66bb.herokuapp.com/api/bookingstudent/${studentNo}`;
      fetch(route)
        .then((response) => response.json())
        .then((data) => {
          console.log("API Response:", data);

          setBookings(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const handleDeleteItem = (bookingIdToDelete) => {
    const route = `https://gymbro-mysql-6b313f0f66bb.herokuapp.com/api/booking/${bookingIdToDelete}`;
    fetch(route, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Deletion Response:", data); // Log the response from the server
      // If the deletion was successful, update the state to remove the deleted slot
      setBookings((prevBookings) => prevBookings.filter((booking) => booking.booking_id !== bookingIdToDelete));
    })
    .catch((error) => {
      console.error("Deletion Error:", error);
      // Handle any error that occurred during the deletion process
    });
  };

  const handleGoToMain = () => {
    navigate("/main"); // Navigate back to the main page
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div>
        <Typography variant="h6" fontFamily="OrbitRegular" style={{ color: '#F4F3FF' }}>
          Here are your confirmed slots. Happy gymming!
        </Typography>
        <Demo>
          {bookings.map((booking) => (
            <div key={booking.booking_id} style={{ padding: "8px 16px", display: "flex", justifyContent: "space-between" }}>
              <div>
                <Typography fontFamily="OrbitRegular" >{`${booking.date}, ${booking.start_time} - ${booking.end_time} `}</Typography>
              </div>
              <DeleteIcon onClick={() => handleDeleteItem(booking.booking_id)} style={{ cursor: "pointer" }} />
            </div>
          ))}
        </Demo>
        <Button
          variant="contained"
          onClick={handleGoToMain}
          style={{ fontSize: "1rem", padding: "10px 40px", marginTop: "1rem" }}
        >
          Back to main
        </Button>
      </div>
    </div>
  );
}

export default BookedSlots;
