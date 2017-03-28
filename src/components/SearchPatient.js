import React from 'react';
import dummyData from '../dummyData';

const {patients} = dummyData;

const Patient = ({name, birth, sex}, idx) =>
  <p key={idx}>{name}-({birth.toLocaleString()})-{sex}</p>

function pred(patient, pattern) {
  return patient.name.search(pattern) >= 0;
}

class SearchPatient extends React.Component {
  constructor() {
    super();
    this.state = {
      nameFilter: ""
    };
  }
  render() {
    return (
      <div>
        <h1>Search Patient</h1>
        <p>검색키워드?</p>
        <input placeholder="이름" type="text" value={this.state.foo} onChange={event => this.setState({nameFilter: event.target.value})}/>
        {patients.filter(patient => pred(patient, this.state.nameFilter)).map(Patient)}
      </div>
    );
  }
}

export default SearchPatient;
