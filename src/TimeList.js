import React, { Component } from 'react';


class TimeList extends Component {
// this component displays a list of the times in the database
    


    groupTimes = () => {
        
        //return this.props.times
        // make collection of the dates
        const dates = []
        this.props.times.forEach(d => {
            if (!dates.includes(d.weekEnding)) {
                dates.push(d.weekEnding)
            }   
        })
        // then sort and loop through and pick out those dates
        // {date: []}
        console.log("dates: ", dates)

        const groupedDates = []
        let obj = {}
        dates.forEach(d => {
            obj = {}
            obj[d] = this.props.times.filter(f => f.weekEnding === d)
            groupedDates.push(obj)
        })
        console.log("groupedDates: ", groupedDates)
        return groupedDates

    }
    render (){
        
        const groupedDates = this.groupTimes()


        const storedTimes = groupedDates.map((t, index) => {
            // print out the array values
            //objs.sort(function(a,b) {return (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0);} ); 
            console.log("times: ", t[Object.keys(t)].sort(function(a,b) {return (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0);} ))
            
            const currentDateGroup = Object.keys(t)[0]
            const interWeekTimes = this.props.times.filter(d => d.weekEnding === currentDateGroup)
            
            const detailTimes = interWeekTimes.map((d, i) => {
                return <li key={i}>{d.date} {d.time} <button>Update</button><button>Delete</button></li>
            })

            return  <li key={index}>
                    {Object.keys(t)}
                    total
                    <button>Uninvoiced</button>
                    <button>Invoiced</button>
                        <ul>
                            {detailTimes}
                        </ul>
                    </li>
        })

        return (
            <div>
                <ul>
                {storedTimes}
                </ul>
            </div>
        )    
    }
}


export default TimeList