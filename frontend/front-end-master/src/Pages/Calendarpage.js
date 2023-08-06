
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Button from "@mui/material/Button";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { styled } from '@mui/system';
import dayjs from 'dayjs';
import { Typography } from '@mui/material';
 

const PickerContainer = styled('div')({
  borderRadius: '10px',
  overflow: 'hidden',
});

function Calendarpage() {
  const studentNo = sessionStorage.getItem('studentNo');
  const password = sessionStorage.getItem('password');
  const [tele_id, setTeleId] = useState("example_tele_id");

  console.log("tele_id:", tele_id);
  const navigate = useNavigate();


  const handleGoToMain = () => {
    navigate("/main"); // Navigate back to the main page
  };


  const currentDate = dayjs();
  const maxDateTime = currentDate.add(6, 'month');

  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [time2, setEndTime] = useState(null);


  const handleDateTimeChange = (newDateTime) => {
    setSelectedDateTime(newDateTime);

    if (newDateTime) {
      const time2 = newDateTime.add(1, 'hour');
      setEndTime(time2);
    }
  };

  function sendBookingRequest(date, time1, time2) {
  const requestData = {
    student_name: studentNo,
    email: password,
    tele_id: tele_id,
    contact_number: "1234567",
    date: date,
    start_time: time1,
    status: "confirmed",
    end_time: time2
  };
  console.log("Booking Request Data:", requestData);
  const route = "https://gymbro-mysql-6b313f0f66bb.herokuapp.com/api/booking/"; 

  fetch(route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response
      console.log("Response Data:", data);
    })
    .catch((error) => {
      console.error(error);
    });
}

  const handleDateTimePickerOk = () => {
    if (selectedDateTime) {
      sendBookingRequest(
        selectedDateTime.format('YYYY-MM-DD'),
        selectedDateTime.format('HH:mm'),
        time2.format('HH:mm')
      );
      navigate("/confirmed", { state: { selectedDateTime: selectedDateTime.format('YYYY-MM-DD HH:mm') } });
    }
  };
  

return (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div style={{ backgroundColor: '#523e87', borderRadius: '10px', overflow: 'hidden', margin: 'auto' }}>
            <StaticDateTimePicker
              orientation="landscape"
              minutesStep={30}
              minDateTime={currentDate}
              maxDateTime={maxDateTime}
              value={selectedDateTime}
              onChange={handleDateTimeChange}
              slotProps={{
                actionBar: {
                  actions: ['cancel'],
                }
              }}
            />
            
          </div>
        </LocalizationProvider>
        <div style={{ marginTop: '1rem' }}>
        <Typography variant="h7" fontFamily="OrbitRegular">
        Selected Time: {selectedDateTime ? `${selectedDateTime.format('YYYY-MM-DD, HH:mm')} - ${time2.format('HH:mm')}` : 'None'}
        </Typography>
        </div>
        <Button variant="contained" onClick={handleDateTimePickerOk} style={{ marginTop: '1rem' }}>
          Confirm 
        </Button>
        <Button variant="contained" onClick={handleGoToMain} style={{ marginTop: '1rem' }}>
          Back
        </Button>
        
      </div>
    </div>
  );
}

export default Calendarpage;
 