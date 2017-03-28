import React from 'react';
import Schedule from './Schedule';  // => 변경
import dummyData from '../dummyData';

const {schedules} = dummyData;

class Reservation extends React.Component {

  render() {
    return (
      <div>
        <h1>Reservation</h1>
        {schedules.map(Schedule)}
      </div>
    );
  }


}

export default Reservation;
