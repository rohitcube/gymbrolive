import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";




function Calendar() {
  const navigate = useNavigate();
  const [additionalText, setAdditionalText] = useState("");
  const studentNo = sessionStorage.getItem('studentNo');
  const password = sessionStorage.getItem('password');
 function sendBookingRequest(date, time1, time2) {
  const requestData = {
    student_name: studentNo,
    email: password,
    date: date,
    start_time: time1,
    end_time: time2
  };
  console.log(requestData);
  const route = "https://gymbro-mysql-6b313f0f66bb.herokuapp.com/api/booking/"; // Replace with your actual API route

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
      console.log(data);
      setAdditionalText("Booking Made Successfully");
    })
    .catch((error) => {
      console.error(error);
    });
}

return (
  <div>
    <h1>Calendar</h1>
    <h2>Day 1</h2>
    <a href="#" onClick={(e) => {
      e.preventDefault();
      sendBookingRequest("2023-06-25", "08:00:00", "09:00:00");
    }}>0800-0900</a>
    <br></br>
    <a href="#" onClick={(e) => {
      e.preventDefault();
      sendBookingRequest("2023-06-25", "09:00:00", "10:00:00");
    }}>0900-1000</a>
    <br></br>
    <a href="#" onClick={(e) => {
      e.preventDefault();
      sendBookingRequest("2023-06-25", "10:00:00", "11:00:00");
    }}>1000-1100</a>
    <br></br>
    <br></br>
    <h2>Day 2</h2>
    <a href="#" onClick={(e) => {
      e.preventDefault();
      sendBookingRequest("2023-06-26", "08:00:00", "09:00:00");
    }}>0800-0900</a>
    <br></br>
    <a href="#" onClick={(e) => {
      e.preventDefault();
      sendBookingRequest("2023-06-26", "09:00:00", "10:00:00");
    }}>0900-1000</a>
    <br></br>
    <a href="#" onClick={(e) => {
      e.preventDefault();
      sendBookingRequest("2023-06-26", "10:00:00", "11:00:00");
    }}>1000-1100</a>
    <br></br>
    <br></br>
    <h2>Day 3</h2>
    <a href="#" onClick={(e) => {
      e.preventDefault();
      sendBookingRequest("2023-06-27", "08:00:00", "09:00:00");
    }}>0800-0900</a>
    <br></br>
    <a href="#" onClick={(e) => {
      e.preventDefault();
      sendBookingRequest("2023-06-27", "09:00:00", "10:00:00");
    }}>0900-1000</a>
    <br></br>
    <a href="#" onClick={(e) => {
      e.preventDefault();
      sendBookingRequest("2023-06-27", "10:00:00", "11:00:00");
    }}>1000-1100</a>
    <br></br>
    {additionalText && <p>{additionalText}</p>}
  </div>
);


 /* return (
    <div>
      <h1>Calendar</h1>
      <h2>Day 1</h2>
      <a href="#" onClick={() => {
       sendBookingRequest("2023-06-25", "08:00:00", "09:00:00");
   //     navigate("/Bookingmade");
      }}>0800-0900</a>
      <br></br>
      <a onClick={sendBookingRequest("2023-06-25", "09:00:00", "10:00:00")}>0900-1000</a>
      <br></br>
      <a onClick={sendBookingRequest("2023-06-25", "10:00:00", "11:00:00")}>1000-1100</a>
      <br></br>
      <br></br>
      <h2>Day 2</h2>
      <a onClick={sendBookingRequest("2023-06-26", "08:00:00", "09:00:00")}>0800-0900</a> 
      <br></br>
      <a onClick={sendBookingRequest("2023-06-26", "09:00:00", "10:00:00")}>0900-1000</a>
      <br></br>
      <a onClick={sendBookingRequest("2023-06-26", "10:00:00", "11:00:00")}>1000-1100</a>
      <br></br>
      <br></br>
      <h2>Day 3</h2>
      <a onClick={sendBookingRequest("2023-06-27", "08:00:00", "09:00:00")}>0800-0900</a>  
      <br></br>
      <a onClick={sendBookingRequest("2023-06-27", "09:00:00", "10:00:00")}>0800-0900</a>
      <br></br>
      <a onClick={sendBookingRequest("2023-06-27", "10:00:00", "11:00:00")}>0800-0900</a>
      <br></br>
      {additionalText && <p>{additionalText}</p>}
    </div>
    
  ); */
}

export default Calendar;
