import onboarding from './onboard.png';
import gettingstartedimg from './gettingstarted.png';
import signup from './signup.png';
import './App.css';
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Grid, Paper, Button, Box, Typography, TextField, createMuiTheme, ThemeProvider
} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { yellow, orange } from '@material-ui/core/colors';

const Registration = (props) => {
  const OrTypography = withStyles({
    root: {
      color: "#FF7A52"
    }
  })(Typography);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#FF7A52",
      },
      typography: {
        fontFamily: 
          'Raleway',
        }
    },
  });
  
  const [state, setState] = useState({
    fname: "",
    password: "",
    email: "",
    tagline:"",
    // confirmpassword: "",
});
  const handleSubmit = (e) => {
    console.log("pressed");
    console.log("info", state);

    e.preventDefault();
}
const handleChange = (e) => {
    // console.log("typing");
    const { name, value } = e.target;
    setState(prevState => ({
        ...prevState,
        [name]: value
    }))
}
  return (
    <ThemeProvider theme={theme}>

   
    <div className="container">
            {/* <form onSubmit = {handleSubmit}>  */}
            <Box className="textentry">
                <OrTypography variant="h6">
                    Name
                </OrTypography>

                <TextField fullWidth
                    label="FName"
                    name="fname"
                    size="small"
                    variant="outlined"
                    value={state.fname}
                    onChange={handleChange}
                />

            </Box>

            <Box className="textentry">
                <OrTypography variant="h6">
                    Email
                </OrTypography>

                <TextField fullWidth
                    label="Email"
                    name="email"
                    size="small"
                    variant="outlined"
                    value={state.email}
                    onChange={handleChange}
                />

            </Box>
            <Box className="textentry">
                <OrTypography variant="h6">
                    Password
                </OrTypography>
                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    size="small"
                    type="password"
                    variant="outlined"
                    value={state.password}
                    onChange={handleChange}
                />
            </Box>
            <Box className="textentry">
                <OrTypography variant="h6">
                    Tagline
                </OrTypography>

                <TextField fullWidth
                    label="Tagline"
                    name="tagline"
                    size="small"
                    variant="outlined"
                    value={state.tagline}
                    onChange={handleChange}
                />

            </Box>

            <Box className="textentry">
                <button
                    className="button"
                    // color = "primary"
                    onClick={handleSubmit}>
                    Next3 </button>
            </Box>
            {/* </form> */}
        </div>
         </ThemeProvider>

  )
}

const Spices = (spiceList) => {
  
  const [spices, setSpices] = useState([])
  // const [goals, setGoals] = useState([])
  // const [mealTypes, setMealTypes] = useState([])
  const handleSubmit = (e) => {
    console.log("pressed");
    console.log("info", spices);
    // setSpices append newly clicked item to array

    // handleCheck = (_id) => {
    //   this.setState({ selected: [...this.state.selected, _id] });
    //   // this.setState(prevState => ({selected: [...prevState.selected, event.target.name]}))
    // };
}
return (
  <div>

  </div>
)
}



function App() {
  const [onboard, setOnboard] = useState(true)
  const [gettingstarted, setGettingStarted] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const spiceList = ["Pescetarian", "Vegetarian", "Vegan", "GF", "Keto", "Paleo", "Nut Free",
"Halal", "Kosher"]
  const toggleOnboard = () => {
    setOnboard(!onboard);
    setGettingStarted(!gettingstarted);
  }
  const toggleStart = () => {
    setGettingStarted(!gettingstarted);
    setSignUp(!signUp);
  }
  const toggleSignup = () => {
    setSignUp(!signUp);
  }
  // var registration = 
  
    
  
  return (
    <Box className="App">
      <Box className="App-header">
      
      {onboard && <img src={onboarding} className="App-logo" alt="logo" />}
      {gettingstarted && <img src={gettingstartedimg} className="App-logo" alt="logo" />}
      {signUp && <img src={signup} className="App-logo" alt="logo" />}
      {signUp && <Registration> </Registration>}
      {signUp && <Spices></Spices>}
        <p>

          hihihi
        </p>
        {onboard && <button
          className="button"
          onClick = {toggleOnboard}
        >
          Next
        </button>}

        {gettingstarted && <button
          className="button"
          onClick = {toggleStart}
        >
          Next2
        </button>}

        

      </Box>
    </Box>
  );
}

export default App;
