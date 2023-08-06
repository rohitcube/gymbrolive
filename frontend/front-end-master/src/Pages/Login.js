import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const Login = () => {
  const [studentNo, setStudentNo] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and another route
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const navigate = useNavigate();
  

  sessionStorage.setItem('studentNo', studentNo);
  sessionStorage.setItem('password', password);

  
  const submitThis = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages

    if (
      studentNo.trim() === "" ||
      password.trim() === ""   
    ) {
      setErrorMessage("Please fill in all the fields");
      return; // Stop further execution
    }

    const requestData = {
      stu_num: studentNo,
      password: password
    };
    const route1 = isLogin
      ? "https://gymbro-mysql-6b313f0f66bb.herokuapp.com/api/login/"
      : "https://gymbro-mysql-6b313f0f66bb.herokuapp.com/api/records/";

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
        } else {
          console.log("Login failed");
          setErrorMessage("Login failed. Please try again.");
        }
      } else {
        if (data) {
          navigate("/accountmade");
          sessionStorage.setItem('username', studentNo);
          sessionStorage.setItem('password', password);
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

const handleGoToSignup = () => {
    navigate("/signup"); //Navigate to the signup page
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
    <div>      
      <header>
        <Typography variant="h1" fontFamily="OrbitRegular"style={{ marginBottom: '0.5rem' }}>
        Gymbro
        </Typography>
      </header>
      <main>
        
        <Typography variant="h5" fontFamily="OrbitRegular" style={{ marginBottom: '1rem' }}>
        RC4 Gymming made easier
        </Typography>
      
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
              <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password" style={{ color: '#FFFFFF' }}>
            Password
          </InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff style={{ color: '#FFFFFF' }} /> : <Visibility style={{ color: '#FFFFFF' }} />}
                </IconButton>
              </InputAdornment>
            }
            style={{ backgroundColor: '#3b417a', borderRadius: '7px', color: '#FFFFFF' }}
            inputProps={{ style: { color: '#FFFFFF' } }}
          />
        </FormControl>
              
              </div>
            
            <br />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={submitThis}
              style={{ marginBottom: '1rem' }} // Add margin-bottom to create space between buttons
              >
              Login
            </Button>
            <Button 
              variant="contained" 
              onClick={handleGoToSignup}
              style={{ marginBottom: '1rem' }}
              >
              Create account
             </Button>
             {errorMessage && (
                <Typography variant="body1" fontFamily="OrbitRegular" color="error" align="center">
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

export default Login;