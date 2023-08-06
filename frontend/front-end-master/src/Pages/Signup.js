import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";



function Signup() {
  const [studentNo, setStudentNo] = useState("");
  const [password, setPassword] = useState("");
  const [tele_id, setTele_id] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Navigate back to the login page
  };

  function submitThis(e) {
    e.preventDefault();

    if (
      studentNo.trim() === "" ||
      password.trim() === "" ||
      tele_id.trim() === ""
    ) {
      setErrorMessage("Please fill in all the fields");
      return; // Stop further execution
    }

    if (studentNo.length > 9) {
      console.log("Student number should not exceed 8 characters");
      setErrorMessage("Student number should not exceed 8 characters.");
      return; // Exit the function early if the condition is not met
    }
  
    if (password.length > 14) { 
      setErrorMessage("Please keep your password to under 15 characters");
      return; 
    }

    const requestData = {
      stu_num: studentNo,
      password: password,
      tele_id: tele_id
    };
    
    const route1 = "https://gymbro-mysql-6b313f0f66bb.herokuapp.com/api/records/"; //create 
    console.log(route1);
    fetch(route1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => {
        if (response.ok) {
          // Account created successfully
          return response.json();
        } else {
          // Account creation failed
          throw new Error("Account already exists, please try logging in");
        }
      })
      .then((data) => {
          // Handle response for the other route
          // Assuming the response contains the necessary data for success
          if (data) {
            navigate("/main", {
              stu_num: studentNo,
              password: password,
              tele_id: tele_id,
            }); // Redirect to the "Other" page
            
          } else {
            console.log("Request failed");
            setErrorMessage("Account already exists, please try logging in");
          }
        }
      )
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred. If you've already registered, please login instead");
      });


  }


  

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
    <div>      
      <header>
        <Typography variant="h5" fontFamily="OrbitRegular" style={{ marginBottom: '1rem' }}>
            Please enter your details below to sign up now. 
        </Typography>
      </header>
      <main>
        <div>
        
        </div>
        <form onSubmit={submitThis}>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
              <div>
                <TextField
                  type="text"
                  name="studentNo"
                  id="studentNo"
                  label="Student Number"
                  value={studentNo}
                  onChange={(e) => setStudentNo(e.target.value)}
                  placeholder="Student Number"
                  multiline
                  variant="filled"
                  style={{ backgroundColor: '#3b417a', borderRadius: '7px'  }}
                  InputProps={{ style: { color: "#FFFFFF" } }}
                  InputLabelProps={{ style: { color: "#FFFFFF" } }}
                />
              </div>
              <div>
                <TextField
                  type="password"
                  name="password"
                  id="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  multiline
                  variant="filled"
                  style={{ backgroundColor: '#3b417a', borderRadius: '7px' }}
                  InputProps={{ style: { color: "#FFFFFF" } }}
                  InputLabelProps={{ style: { color: "#FFFFFF" } }}
                />
              </div>
              <div>
                <TextField
                  type="tele_id"
                  name="tele_id"
                  id="tele_id"
                  label="Telegram handle"
                  value={tele_id}
                  onChange={(e) => setTele_id(e.target.value)}                  
                  placeholder="Telegram handle"
                  multiline
                  variant="filled"
                  style={{ backgroundColor: '#3b417a', borderRadius: '7px' }}
                  InputProps={{ style: { color: "#FFFFFF" } }}
                  InputLabelProps={{ style: { color: "#FFFFFF" } }}
                />
              </div>
            <br />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={submitThis}
              style={{ marginBottom: '1rem' }}
              >
              Create account
            </Button>
            <Button variant="contained" onClick={handleGoBack} style={{ marginTop: '1rem' }}>
              Back
            </Button>
            {errorMessage && (
              <Typography
                variant="body1"
                color="error"
                align="center"
                fontFamily="OrbitRegular"
                style={{ margin: "1rem 0" }}
              >
                {errorMessage}
              </Typography>
            )}
            </div>
            </Box>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Signup;