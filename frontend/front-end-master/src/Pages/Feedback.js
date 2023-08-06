import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: '#FFFFFF', // Set the default color for empty icons to white
  },
}));

const customIcons = {
  1: {
    iconFilled: <SentimentVeryDissatisfiedIcon color="error" />,
    iconEmpty: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    iconFilled: <SentimentDissatisfiedIcon color="error" />,
    iconEmpty: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    iconFilled: <SentimentSatisfiedIcon color="warning" />,
    iconEmpty: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    iconFilled: <SentimentSatisfiedAltIcon color="success" />,
    iconEmpty: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    iconFilled: <SentimentVerySatisfiedIcon color="success" />,
    iconEmpty: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  const isEmpty = value === null;

  return (
    <span {...other}>
      {isEmpty ? customIcons[0].iconEmpty : customIcons[value].iconFilled}
    </span>
  );
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function Feedback() {
    const navigate = useNavigate();
    const [facilityRating, setFacilityRating] = useState(2); // Initialize with a default rating value for facility
    const [bookingRating, setBookingRating] = useState(4); // Initialize with a default rating value for booking
    const [experienceRating, setExperienceRating]= useState(3); 
  
    const handleGoToMain = () => {
      navigate("/main"); // Navigate back to the main page
    };
  
    const handleFacilityRatingChange = (event, newValue) => {
      setFacilityRating(newValue); // Update the facility rating when the user selects a new one
    };
  
    const handleBookingRatingChange = (event, newValue) => {
      setBookingRating(newValue); // Update the booking rating when the user selects a new one
    };

    const handleExperienceRatingChange = (event, newValue) => {
      setExperienceRating(newValue); // Update the booking rating when the user selects a new one
    }


  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <div className="App">
        <header>
          <div>
            <Typography variant="h4" fontFamily="OrbitRegular">
              How can we improve your experience? 
            </Typography>
          </div>
          <div>
            <Typography variant="h6" fontFamily="OrbitRegular">
            Please rate the gym, and leave any feedback for the admins here. 
            </Typography>
          </div>

          <div>
            <Typography variant="h7" fontFamily="OrbitRegular" style={{ color: "#F4F3FF" }}>
              Gym Facilities 
            </Typography>
          </div>

          <StyledRating
            name="highlight-selected-only-facility"
            value={facilityRating}
            onChange={handleFacilityRatingChange}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
          />

          <div>
            <Typography variant="h7" fontFamily="OrbitRegular" style={{ color: "#F4F3FF" }}>
              Booking process
            </Typography>
          </div>

          <StyledRating
            name="highlight-selected-only-booking"
            value={bookingRating}
            onChange={handleBookingRatingChange}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
          />

          <div>
            <Typography variant="h7" fontFamily="OrbitRegular" style={{ color: "#F4F3FF" }}>
              Overall experience
            </Typography>
          </div>

          <StyledRating
            name="highlight-selected-only-experience"
            value={experienceRating}
            onChange={handleExperienceRatingChange}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
          />    

          <form onSubmit={handleGoToMain}>
            <TextField
              fullWidth
              label="Feedback"
              id="feedback"
              multiline
              variant="filled"
              style={{ backgroundColor: "#3b417a", borderRadius: "7px" }}
              InputProps={{ style: { color: "#FFFFFF" } }}
              InputLabelProps={{ style: { color: "#FFFFFF" } }}
            />
          </form>
          <Button variant="contained" type="submit" style={{ marginTop: "1rem" }} onClick={handleGoToMain}>
            Submit
          </Button>
        </header>
      </div>
    </div>
  );
}
