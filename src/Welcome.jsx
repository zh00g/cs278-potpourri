import onboarding from './onboard.png';
import gettingstartedimg from './gettingstarted.png';
import './App.css';
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Welcome() {
    const [onboard, setOnboard] = useState(true)
    const [gettingstarted, setGettingStarted] = useState(false)
    const toggleOnboard = () => {
      setOnboard(!onboard);
      setGettingStarted(!gettingstarted);
    }
    // const toggleStart = () => {
    //   setGettingStarted(!gettingstarted);
    // }
    // var onboardpic = 
    return (
      <div className="App">
        <header className="App-header">
        
        {onboard && <img src={onboarding} className="App-logo" alt="logo" />}
        {gettingstarted && <img src={gettingstartedimg} className="App-logo" alt="logo" />}
          <p>
  
            hihihi
          </p>
          <button
            // className="App-link"
            className="button"
            // href="https://reactjs.org"
            // target="_blank"
            // rel="noopener noreferrer"
            onClick = {toggleOnboard}
          >
            Next
          </button>
        </header>
      </div>
    );
  }
  
  export default Welcome;
  