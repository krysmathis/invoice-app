import React, { Component } from 'react';
import moment from 'moment';

const timeType = {"start": 0, "stop": 1};

class TimeCapture extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: moment().format("YYYY-MM-DD"),
            time: moment().format("H:mm"),
            type: "start",
        }

        this.updateDate = this.updateDate.bind(this);
        this.submitData = this.submitData.bind(this);
        this.updateType = this.updateType.bind(this);
    }

    updateDate = (evt) => {

        this.setState({
            date: evt.target.value
        });
    }

     updateTime = (evt) => {
        this.setState({
            'time': evt.target.value
        })
    }

     updateType = (evt) => {
         this.setState({
            'type': evt.target.value
         });
    }


    submitData = (evt) => {
        let storedTime = []

        try {
            let storedObj = JSON.parse(localStorage.getItem("workTime"));
            if (storedObj != null) {
                storedTime = (storedObj);
            }
        } catch (err) {

        }

        const newTime = {
            "date": this.state.date,
            "time": this.state.time,
            "type": this.state.type,
            'dateCreated': new Date()
        }
        
        storedTime.push(newTime);

        localStorage.setItem("workTime",JSON.stringify(storedTime));
    }


    // component for allowing the user to enter a date time and type
    render() {

        let today = moment().format("YYYY-MM-DD");
        const now = moment().format("H:mm");

        return(
            <div class="time-entry">
                <div>Enter Date</div>
                <input class="time-entry__date" type="date" defaultValue={today} onChange={this.updateDate}/>
                <div>Enter Time</div>
                <input class="time-entry__time" defaultValue={now} onChange={this.updateTime} type="time"/>
                <div>Enter Type</div>
                <select class="time-entry__type" onChange={this.updateType}>
                    <option>start</option>
                    <option>stop</option>
                </select>
                <div class="time-entry__submit">
                <button onClick={this.submitData} class="time-entry__btn">Submit</button>
                </div>
            </div>
        ) 
    }
}
export default TimeCapture;