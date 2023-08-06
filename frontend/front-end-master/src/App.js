import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Calendarpage from "./Pages/Calendarpage";
import Feedback from "./Pages/Feedback";
import Confirmed from "./Pages/Confirmed";
import Signup from "./Pages/Signup";
import BookedSlots from "./Pages/BookedSlots"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import OrbitRegular from './Fonts/Orbit-Regular.ttf';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#9D8CFF",
    },
    secondary: {
      main: "#ECACE7", // Custom secondary color
    },
    background: {
      default: "#06002E" // Set your desired background color here
    },
    text: {
      primary: "#f781a8" // Set your desired text color here
    },
  },
  typography: {
    fontFamily: 'Roboto, OrbitRegular',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'OrbitRegular';
          font-style: normal;
          font-display: swap;
          font-weight: normal;
          src: local('OrbitRegular'), local('OrbitRegular'), url(${OrbitRegular}) format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});



function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/main" element={<Main />} />
            <Route path="/calendarpage" element={<Calendarpage />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/confirmed" element={<Confirmed />} />
            <Route path="/bookedslots" element={<BookedSlots />} /> 
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
