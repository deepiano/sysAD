import React from 'react';
import Schedule from './Schedule';
import dummyData from '../dummyData';

const {schedules} = dummyData;

class ScheduleChart extends React.Component {

  render() {
    return (
      <div>
        <h1>Schedule Chart</h1>
        {schedules.map(Schedule)}
      </div>
    );
  }


}

export default ScheduleChart;
