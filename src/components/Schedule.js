import React from 'react';

const Schedule = ({name, jobs}, idx) =>
  <ul>
    {name}
    {jobs.map(({begin, end, description}, idx) => <li key={idx}>{begin}-{end}-{description}</li>)}
  </ul>

  export default Schedule;
