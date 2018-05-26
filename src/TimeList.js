import React, { Component } from 'react';
import moment from 'moment';

class TimeList extends Component {
// this component displays a list of the times in the database
    
    constructor(props) {
        super(props)
        this.state = {
            storedTime: [],
        };
        
    }
    
    componentWillMount () {
        let storedTime = []

        try {
            let storedObj = JSON.parse(localStorage.getItem("workTime"));
            if (storedObj != null) {
                storedTime = (storedObj);
            }
        } catch (err) {

        }
        this.setState({storedTime: storedTime});
    }

    render (){
        
        const storedTimes = this.state.storedTime.map((t, index) => {
           return <li key={index}>{t.date}</li>
        })

        return (
            <ul>
                {storedTimes}
            </ul>
        )    
    }
}


export default TimeList