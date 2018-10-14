//Creating School class from which other classes will inherit
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(num) {
    if (typeof num === 'number'){
    this.numberOfStudents = num;
    }else{
      return console.log('Error: Please enter a number value.');
    }
  }
  quickFacts() {
    console.log(`${name} educates ${numberOfStudents} students at the ${level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const subs = substituteTeachers
    let i = Math.floor(Math.random()* subs.length)
    return subs[i];
  }
}
class Primary extends School {
  constructor(name, level, numberOfStudents, pickUpPolicy) {
    super(name, level, numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }
  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}
class Middle extends School {
  constructor(name, level, numberOfStudents){
    super(name, level, numberOfStudents);
  }
}
class High extends School {
  constructor(name, level, numberOfStudents, sportsTeam) {
    super(name, level, numberOfStudents);
    this._sportsTeam = sportsTeam;
  }
  get sportsTeam() {
    return this._sportsTeam;
  }
}
const primarySchool = new Primary;
