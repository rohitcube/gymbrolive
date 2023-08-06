import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Confirmed = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedDateTime = location?.state?.selectedDateTime;

  const handleGoToMain = () => {
    navigate("/main"); // Navigate back to the main page
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h4" fontFamily="OrbitRegular">
            Confirmed
        </Typography>
        <Typography variant="h8" fontFamily="OrbitRegular" style={{ color: '#F4F3FF' }}>
            A confirmation and reminder will be sent to your tele 
        </Typography>
        <Typography variant="h6" fontFamily="OrbitRegular">
          Please be punctual for your slot at {selectedDateTime}
        </Typography>
      </div>
      <Button
        variant="contained"
        onClick={handleGoToMain}
        style={{ marginTop: '1rem' }}
      >
        Back
      </Button>
    </div>
  );
};

export default Confirmed;
