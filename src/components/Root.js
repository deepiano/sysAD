import React from 'react';

import ScheduleChart from './ScheduleChart'
import SearchPatient from './SearchPatient'
import Assistant from './Assistant'
import Prescription from './Prescription'
import Reservation from './Reservation'

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      navigator: "Reservation",  //TODO: MVC -> flux
    }
  }

  render() {
    const dom = {
      ScheduleChart : <ScheduleChart date={new Date()}/>,
      SearchPatient : <SearchPatient />,
      Assistant     : <Assistant />,
      Prescription  : <Prescription />,
      Reservation   : <Reservation />,
    } [this.state.navigator] || null;

    return (
      <div>
        <h1>의사페이지</h1>
        <h3 onClick={_ => this.setState({navigator: "ScheduleChart"})}><a>일정관리</a></h3>
        <h3 onClick={_ => this.setState({navigator: "SearchPatient"})}><a>환자조회</a></h3>
        <h3 onClick={_ => this.setState({navigator: "Assistant"})}><a>인공지능 도우미</a></h3>
        <h3 onClick={_ => this.setState({navigator: "Prescription"})}><a>처방</a></h3>
        <h1>손님페이지</h1>
        <h3 onClick={_ => this.setState({navigator: "Reservation"})}><a>예약</a></h3>
        {dom}
      </div>
    );
  }


}

export default Root;
