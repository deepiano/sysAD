class Job {
  constructor(begin, end, description) {
    Object.assign(this, {begin, end, description});
  }
}

class Schedule {
  constructor(name, jobs) {
    Object.assign(this, {name, jobs});
  }
}

const schedules = [
  new Schedule("화타", [new Job(11, 12, "게임"), new Job(15, 17, "식사")]),
  new Schedule("허준", [new Job(14, 15, "운동"), new Job(20, 23, "진료")]),
];

class Patient {
  constructor(name, birth, sex) {
    Object.assign(this, {name, birth, sex});
  }
}

const patients = [new Patient("김김김", new Date(1993, 6, 4), "남"), new Patient("이이이", new Date(1993, 6, 4), "여")]

export default {schedules, patients}
