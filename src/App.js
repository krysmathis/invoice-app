import React, { Component } from 'react';
import './App.css';
import * as firebase from "firebase";
import moment from 'moment';
import TimeCapture from './TimeCapture';
import TimeList from './TimeList';

var config = {
  apiKey: "AIzaSyB3jCSNMTCKVEOdKfjHol-f1JZaynN80u8",
  authDomain: "the-invoice-app.firebaseapp.com",
  databaseURL: "https://the-invoice-app.firebaseio.com",
  projectId: "the-invoice-app",
  storageBucket: "the-invoice-app.appspot.com",
  messagingSenderId: "983222808472"
};

// firebase.initializeApp(config);
// const database = firebase.database();

class App extends Component {
      
  constructor(props) {
    super(props)
    this.state = {
        storedTime: [],
    };
        
  }

  componentWillMount() {
      try {
        let storedObj = JSON.parse(localStorage.getItem("workTime"));
        if (storedObj != null) {
            this.setState({storedTime: (storedObj)});
        }
    } catch (err) { 

    }
  }

  addTime = (newTime) => {

    let storedTimes = []

        try {
            let storedObj = JSON.parse(localStorage.getItem("workTime"));
            if (storedObj != null) {
                storedTimes = (storedObj);
            }
        } catch (err) {

        }
        
        storedTimes.push(newTime);

        localStorage.setItem("workTime",JSON.stringify(storedTimes));
        this.setState({storedTime: storedTimes})
  }
  
  render() {
    return (
      <div className="App">
        <TimeCapture submit={this.addTime}/>
        <TimeList times={this.state.storedTime}/>
      </div>
    );
  }
}

export default App;
