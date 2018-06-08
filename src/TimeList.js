import React, { Component } from 'react';


class TimeList extends Component {
// this component displays a list of the times in the database
    

    groupTimes = () => {
        
        //return this.props.times
        // make collection of the dates
        const dates = []
        this.props.times.forEach(d => {
            if (!dates.includes(d.date)) {
                dates.push(d.date)
            }   
        })
        // then sort and loop through and pick out those dates
        // {date: []}
        console.log("dates: ", dates)

        const groupedDates = []
        let obj = {}
        dates.forEach(d => {
            obj = {}
            obj[d] = this.props.times.filter(f => f.date === d)
            groupedDates.push(obj)
        })
        console.log("groupedDates: ", groupedDates)
        return groupedDates

    }
    render (){
        const dates = this.groupTimes()

        const storedTimes = dates.map((t, index) => {
            // print out the array values
            //objs.sort(function(a,b) {return (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0);} ); 
            console.log("times: ", t[Object.keys(t)].sort(function(a,b) {return (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0);} ))
            
            return  <ul key={index}>
                    {Object.keys(t)}
                    total
                    <button>Update</button>
                    <button>Delete</button>
                    </ul>
        })

        return (
            <div>
                {storedTimes}
            </div>
        )    
    }
}


export default TimeList