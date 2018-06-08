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

        const newTime = {
            "date": this.state.date,
            "time": this.state.time,
            "type": this.state.type,
            'dateCreated': new Date()
        }
        this.props.submit(newTime)
    }


    // component for allowing the user to enter a date time and type
    render() {

        let today = moment().format("YYYY-MM-DD");
        const now = moment().format("H:mm");
        
        var weekEnding = moment().endOf('week').subtract(1,'day').toDate();
        console.log('start + 6: ',weekEnding)

        return(
            <div className="time-entry">
                <div>Enter Date</div>
                <input className="time-entry__date" type="date" defaultValue={today} onChange={this.updateDate}/>
                <div>Enter Time</div>
                <input className="time-entry__time" defaultValue={now} onChange={this.updateTime} type="time"/>
                <div>Enter Type</div>
                <select className="time-entry__type" onChange={this.updateType}>
                    <option>start</option>
                    <option>stop</option>
                </select>
                <div className="time-entry__submit">
                <button onClick={this.submitData} className="time-entry__btn">Submit</button>
                </div>
            </div>
        ) 
    }
}
export default TimeCapture;