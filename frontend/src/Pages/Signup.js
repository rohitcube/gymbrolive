import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

 function MakeAccount() {
  const [studentNo, setStudentNo] = useState("");
  const [password, setPassword] = useState("");
  const [tele_id, setTele_id] = useState("");
  const [additionalText, setAdditionalText] = useState("");
  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    // Perform login logic here
    const requestData = {
        stu_num: studentNo,
        password: password,
        tele_id: tele_id
    };
    const route1 = "http://localhost:4000/api/records/"; //create 
    console.log(route1);
    fetch(route1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => response.json())
      .then((data) => {
          // Handle response for the other route
          // Assuming the response contains the necessary data for success
          if (data) {
            navigate("/accountmade", {
              stu_num: studentNo,
              password: password,
              tele_id: tele_id,
            }); // Redirect to the "Other" page
            
          } else {
            console.log("Request failed");
            setAdditionalText("Account already exists, please try logging in");
          }
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }


  
  return (
    <div>
      <header>
        <h1>Gymbro</h1>
        <p>RC4 Gymming made easier</p>
      </header>
      <main>
        <div>
          <h3>Please enter your student number, password, email and telegram ID to sign up</h3>
        </div>
        <form onSubmit={submitForm}>
          <input
            type="text"
            name="studentNo"
            id="studentNo"
            value={studentNo}
            onChange={(e) => setStudentNo(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="tele_id"
            name="tele_id"
            id="tele_id"
            value={tele_id}
            onChange={(e) => setTele_id(e.target.value)} 
          />
          <button type="Submit">Login</button>
        </form>
        {additionalText && <p>{additionalText}</p>}
      </main>
    </div>
  );
}

export default MakeAccount;