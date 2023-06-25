import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [studentNo, setStudentNo] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and another route
  const [additionalText, setAdditionalText] = useState("");
  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    // Perform login logic here
    const requestData = {
      stu_num: studentNo,
      password: password
    };
    const route1 = isLogin
      ? "http://localhost:4000/api/login/"
      : "http://localhost:4000/api/records/";

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
        if (isLogin) {
          // Check if login is successful based on the response content or status
          if (data.data) {
            setStudentNo(data.stu_num);
            setPassword(data.password);
            navigate("/main"); // Redirect to the "Main" page
            setAdditionalText("");
          } else {
            console.log("Login failed");
            setAdditionalText("Login failed, please try again");
          }
        } else {
          // Handle response for the other route
          // Assuming the response contains the necessary data for success
          if (data) {
            navigate("/accountmade", {
              stu_num: studentNo,
              password: password
            }); // Redirect to the "Other" page
            
          } else {
            console.log("Request failed");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  function toggleSwitch() {
    setIsLogin((prevState) => !prevState);
  }

  const handleGoToSignUp = () => {
    navigate("/signup"); // Navigate to the calendar page
  };

  return (
    <div>
      <header>
        <h1>Gymbro</h1>
        <p>RC4 Gymming made easier</p>
      </header>
      <main>
        <div>
          <h3>Please enter your student number and password to login</h3>
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
          {isLogin ? (
            <button type="submit">Login</button>
          ) : (
            <button type="submit">Make an Account</button>
          )}
        </form>
        <button onClick={toggleSwitch}>
          {isLogin ? "Switch to Another Route" : "Switch to Login"}
        </button>
        <br />
        <button onClick={handleGoToSignUp}>Sign Up</button>
        <br />
        {additionalText && <p>{additionalText}</p>}
      </main>
    </div>
  );
}

export default Login;


