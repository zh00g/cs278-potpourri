import onboarding from './onboard.png';
import gettingstartedimg from './gettingstarted.png';
import signup from './signup.png';
import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Grid,
  Paper,
  Button,
  Box,
  Typography,
  TextField,
  createMuiTheme,
  ThemeProvider,
  FormGroup,
  FormControlLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Checkbox,
  List
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
    tagline: "",
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

const Spices = () => {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState([]);
  const spiceList = ["Pescetarian", "Vegetarian", "Vegan", "GF", "Keto", "Paleo", "Nut Free",
    "Halal", "Kosher"]
  const handleClickOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false)
  };
  const handleCheck = (val) => {
    // setSelected({ selected: [...selected, val] });
    const currentIndex = selected.indexOf(val);
    const newChecked = [...selected];

    // if (currentIndex === -1) {
    //   newChecked.push(val);
    // } else {
    //   newChecked.splice(currentIndex, 1);
    // }
    newChecked.push(val);

    setSelected(newChecked);
  };

  const handleSubmit = () => {
    setModal(false);
    console.log(selected);
  }

  // console.log(spiceList);

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="button"
        color="primary">
        Choose Spices!
      </button>
      <Dialog open={modal} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose Spices!</DialogTitle>
        <DialogContent>
          <DialogActions>
          {/* <Checkbox
            label={elem} 
            key={i}
            value = {elem}
            name={elem}
            id={elem}
            onChange={() => handleCheck(elem)}
            checked={selected}
            /> */}
            <div>
              <List>
                {spiceList.map((elems, i) => {
                        return <SpiceListCheck handleCheck={handleCheck} item = {elems} selected={selected} key={i} {...elems} />;
                      })}
                {/* {spiceList.map((elem, i) =>
                  <div>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox
                          key={i}
                          value={elem}
                          name={elem}
                          id={elem}
                          onChange={() => handleCheck(elem)}/>}
                          checked={selected}
                          label={elem}
                        />
                      </FormGroup>
                    </div>
                    )} */}
            
        
                    </List>
                  </div>
                </DialogActions>
              </DialogContent>
          <DialogActions>
            <button onClick={handleSubmit} className="button">
              Submit!
                </button>
          </DialogActions>
            </Dialog>
    </div>
  )
}
const SpiceListCheck = ({i, handleCheck, item}, ...elems) => {
  // const [spices, setSpices] = useState([])
  // const [goals, setGoals] = useState([])
  // const [mealTypes, setMealTypes] = useState([])
  // const handleSubmit = (e) => {
  //   console.log("pressed");
  //   console.log("info", spices);
  // }
    // setSpices append newly clicked item to array

    // handleCheck = (_id) => {
    //   this.setState({selected: [...this.state.selected, _id] });
    //   // this.setState(prevState => ({selected: [...prevState.selected, event.target.name]}))
    // };
    // console.log(item)
  return (
      <div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox
              labelStyle={{color: 'white'}}
              iconStyle={{fill: 'orange'}}
              style ={{
                color: "#FF7A52",
              }}
              name={`${item}`}
              id={`${i}`}
              value={`${i}`}
              color="primary" />}
            onChange={() => handleCheck(item)}
            label={`${item}`}
          />
        </FormGroup>
      </div>
  )
}



function App() {
  const [onboard, setOnboard] = useState(true)
  const [gettingstarted, setGettingStarted] = useState(false)
  const [signUp, setSignUp] = useState(false)

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
          {/* {signUp && <Registration> </Registration>} */}
          {signUp && <Spices></Spices>}
          {onboard && <button
            className="button"
            onClick={toggleOnboard}
          >
            Next
        </button>}

          {gettingstarted && <button
            className="button"
            onClick={toggleStart}
          >
            Next2
        </button>}



        </Box>
      </Box>
  );
}

export default App;
