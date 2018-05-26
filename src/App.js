import React, { Component } from 'react';
import logo from './logo.svg';
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

  // Send data up to the database
  // handlePost(date, time, type) {
  //   const ref = database.ref('/timer/');
  //   ref.push({
  //     "name": name,
  //     "limit": time
  //   });
  //   // clear the input form
  //   //this.clearForm();
  // }

  render() {
    return (
      <div className="App">
        <TimeCapture />
        <TimeList />
      </div>
    );
  }
}

export default App;
