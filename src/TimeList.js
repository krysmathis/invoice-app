import React, { Component } from 'react';
import moment from 'moment';

class TimeList extends Component {
// this component displays a list of the times in the database
    

    render (){
        
        const storedTimes = this.props.times.map((t, index) => {
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