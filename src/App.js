import onboarding from './onboard.png';
import gettingstartedimg from './gettingstarted2.png';
import signup from './signup2.png';
import myspices from './myspices.png';
import confirmation from './confirmation.png';
import './App.css';
import firebase from './firebase.js';

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
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
  List,
  makeStyles
} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


const Registration = ({ user, updateUser, updateLogin }) => {
  const history = useHistory();
  const OrTypography = withStyles({
    root: {
      color: "#FF7A52"
    }
  })(Typography);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#FF7A52",
        contrastText: "#fff"
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
    e.preventDefault();
    console.log("pressed");
    console.log("info", state);
    updateUser({
      name: state.fname,
      password: state.password,
      email: state.email,
      tagline: state.tagline,
    })
    updateLogin({
      fname: state.fname,
      password: state.password,
      email: state.email,
      tagline: state.tagline,
    })
    history.push('/spices')
    console.log("info", state);

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

      <Box className="App-header">
        <img src={signup} className="App-logo" alt="logo" />
        <Box className="textentry">
          <OrTypography variant="h6">
            Name
                </OrTypography>

          <TextField fullWidth
            label="Name"
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


        {/* <Link to="/spices">  */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Next
            </Button>
        {/* </Link> */}
      </Box>
    </ThemeProvider>

  )
}

const CustomizeProfile = ({ createProfile, spices, goals, types, user, updateUser, updateGoals, updateSpices, updateMealTypes }) => {
  const history = useHistory()
  const OTypography = withStyles({
    root: {
      color: "black"
    }
  })(Typography);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#FF7A52",
        contrastText: "#fff"
      },
      secondary: {
        main: "#8FD6AD",
        contrastText: "#fff"
      },
      accent: {
        backgroundColor: '#2399C6',
        color: '#fff',
        contrastText: "#fff"
      },
      accent2: {
        color: '#2399C6',
        contrastText: "#fff"
      },
      accentOr: {
        color: '#FF7A52',
        contrastText: "#fff"
      },
      accentGr: {
        color: '#8FD6AD',
        contrastText: "#fff"
      },
      typography: {
        fontFamily:
          'Raleway',
      }
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault()
    createProfile()
    // const itemsRef = firebase.database().ref('items');
    // itemsRef.push(user)
    history.push('/confirm')
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <img src={myspices} className="App-logo" alt="logo" />
        <OTypography> What brings you to potpourri? </OTypography>
        <Spices
          arr={goals}
          type={"goal"}
          styles2={theme.palette.accentOr}
          user={user}
          updateUser={updateUser}
          updateArr={updateGoals}
        >
        </Spices>
        <OTypography> Do you have any dietary restrictions? </OTypography>
        <Spices
          arr={spices}
          type={"spice"}
          styles2={theme.palette.accentGr}
          user={user}
          updateUser={updateUser}
          updateArr={updateSpices}
        > </Spices>
        <OTypography> What meal types are you interested in? </OTypography>
        <Spices
          arr={types}
          type={"mealtype"}
          styles={theme.palette.accent}
          styles2={theme.palette.accent2}
          user={user}
          updateUser={updateUser}
          updateArr={updateMealTypes}>
        </Spices>
        <Box className="paddingbox"> </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit!
            </Button>
      </ThemeProvider>
    </div>
  )
}
const Spices = ({ arr, type, styles, styles2, user, updateUser, updateArr }) => {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState([]);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  const classes = useStyles();
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
    if (!selected.includes(val)) newChecked.push(val);

    setSelected(newChecked);
  };

  const handleSubmit = () => {
    setModal(false);
    if (type === "spice") {
      //user.spices = selected
      updateUser({ spices: selected })
      updateArr(selected)
    }
    if (type === "goal") {
      //user.goals = selected
      updateUser({ goals: selected })
      updateArr(selected)
    }
    if (type === "mealtype") {
      //user.mealtypes = selected
      updateUser({ mealtypes: selected })
      updateArr(selected)
    }
    // console.log(selected, type);
    // console.log(user);
  }

  var color = "";
  var style;
  var buttonText = "";
  if (type === "spice") {
    buttonText = "Choose Spices!";
    color = "secondary";
  }
  if (type === "goal") {
    buttonText = "Choose Goals!";
    color = "primary";
  }
  if (type === "mealtype") {
    buttonText = "Choose Meal Types!";
    style = styles;
    color = "default"
  }
  return (
    <div>
      <Button
        onClick={handleClickOpen}
        color={color}
        style={style}
        variant="contained">
        {buttonText}
      </Button>
      <Dialog open={modal} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{buttonText}</DialogTitle>
        <DialogContent>
          <DialogActions>
            <div>
              <List className="modal">
                {arr.map((elems, i) => {
                  return <ListCheck color={color} style={styles2} handleCheck={handleCheck} item={elems} selected={selected} key={i} {...elems} />;
                })}
              </List>
            </div>
          </DialogActions>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}
            color={color}
            style={style}
            variant="contained"
          >
            Submit!
                </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
const ListCheck = ({ i, handleCheck, item, color, style }, ...elems) => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox
            // style={{
            //   color: {color},
            // }}
            name={`${item}`}
            id={`${i}`}
            value={`${i}`}
            color={color}
            style={style}
          />}
          onChange={() => handleCheck(item)}
          label={`${item}`}
        />
      </FormGroup>
    </div>
  )
}

const Onboard = () => {
  const history = useHistory();
  return (
    <div>
      <Box className="App-header">
        <img src={onboarding} className="App-logo" alt="logo" />
        {/* <Link to="/gettingstarted">  */}
        <Button
          color="primary"
          variant="contained"
          onClick={() => history.push('./gettingstarted')}
        // onClick={toggleOnboard}
        >
          Next
        </Button>
        {/* </Link> */}
      </Box>
    </div>
  )
}

const GettingStarted = () => {
  const history = useHistory();
  return (
    <div>
      <Box className="App-header">
        <img src={gettingstartedimg} className="App-logo2" alt="logo" />
        {/* <Link to="/registration">  */}
        <Button
          color="primary"
          variant="contained"
          // onClick={toggleOnboard}
          onClick={() => history.push('./registration')}
        >
          Next
        </Button>
        {/* </Link> */}
      </Box>
    </div>
  )

}
const Confirmation = ({ user }) => {
  const OTypography = withStyles({
    root: {
      color: "black"
    }
  })(Typography);
  useEffect(() => {
    // Update the document title using the browser API
    const itemsRef = firebase.database().ref('items');
    itemsRef.push(user)
  });

  return (
    <div>
      <Box className="App-header">
        <img src={confirmation} className="App-logo" alt="logo" />
        <Box className="paddingbox">
        {/* <Button
                color="primary"
                variant="contained"
                arget="_blank" 
                href="https://cs278site.wixsite.com/potpourri"
              >
                View Site
                </Button> */}
          <OTypography> Your Info </OTypography>
          {
            Object.entries(user).map(([key, val]) =>
              <OTypography key={key}>{key}: {val}</OTypography>
            )
          }
        </Box>
      </Box>
    </div>
  )
}
function App() {
  const history = useHistory();
  const [onboard, setOnboard] = useState(true)
  const [gettingstarted, setGettingStarted] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [login, setLogin] = useState({
    fname: "",
    password: "",
    email: "",
    tagline: "",
  })
  const [goals, setGoals] = useState([])
  const [spices, setSpices] = useState([])
  const [mealtypes, setMealTypes] = useState([])
  const [user, setUser] = useState(
    {
      name: "",
      email: "",
      pass: "",
      tagline: "",
      goals: [],
      spices: [],
      mealtypes: [],
    }
  )
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#FF7A52",
        contrastText: "#fff"
      },
    }
  })
  const spiceList = ["Pescetarian", "Vegetarian", "Vegan", "GF", "Keto", "Paleo", "Nut Free",
    "Halal", "Kosher"]
  const goalList = ["Meet new people", "Learn new recipes", "Have fun with friends", "Cook more adventurously",
    "Start a new diet", "Meal prep"]
  const typeList = ["breakfast", "lunch", "dinner", "appetizer", "snack", "dessert", "on-the-go", "quick", "for one", "side"]
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
  const createProfile = () => {
    setUser({
      name: login.fname,
      email: login.email,
      pass: login.password,
      tagline: login.tagline,
      goals: goals,
      spices: spices,
      mealtypes: mealtypes,
    })
    console.log(user)
  }

  const OTypography = withStyles({
    root: {
      color: "black"
    }
  })(Typography);


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box className="App">
          <Box className="App-header">
            <Switch>
              <Route path="/gettingstarted">
                <GettingStarted></GettingStarted>
              </Route>
              <Route path="/registration">
                <Registration updateLogin={setLogin} user={user} updateUser={setUser}></Registration>
              </Route>
              <Route path="/spices">
                <CustomizeProfile
                  user={user}
                  updateUser={setUser}
                  spices={spiceList}
                  goals={goalList}
                  types={typeList}
                  updateGoals={setGoals}
                  updateSpices={setSpices}
                  updateMealTypes={setMealTypes}
                  createProfile={createProfile}
                >
                </CustomizeProfile>
              </Route>
              <Route path="/confirm">
                <Confirmation user={user}></Confirmation>
              </Route>
              <Route path="/">
                <Onboard></Onboard>
              </Route>
              <Button
                color="primary"
                variant="contained"
                onClick={createProfile}
              >
                Finish
          </Button>
            </Switch>
            <Box className="paddingbox"></Box>

            <Box>

            </Box>

            {/* {onboard && <img src={onboarding} className="App-logo" alt="logo" />}
          {gettingstarted && <img src={gettingstartedimg} className="App-logo" alt="logo" />} */}
            {/* {signUp && <img src={signup} className="App-logo" alt="logo" />} */}
            {/* {signUp && <Registration> </Registration>} */}
            {/* {signUp && <Spices spices={spiceList}> </Spices>}
          {signUp && <CustomizeProfile user={user} updateUser={setUser} spices={spiceList} goals={goalList} types={typeList}> </CustomizeProfile>} */}
            {/* <CustomizeProfile user={user} updateUser={setUser} spices={spiceList} goals={goalList} types={typeList}> </CustomizeProfile> */}
            {/* {onboard && <Button
            color="primary"
            variant="contained"
            onClick={toggleOnboard}
          >
            Next
        </Button>}

          {gettingstarted && <Button
            color="primary"
            variant="contained"
            onClick={toggleStart}
          >
            Next2
        </Button>} */}



          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;






