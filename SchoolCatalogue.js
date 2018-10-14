//Creating School class from which other classes will inherit
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  //Getters below
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  //Setter below
  set numberOfStudents(num) {
    if (typeof num === 'number'){
    this.numberOfStudents = num;
    }else{
      return console.log('Error: Please enter a number value.');
    }
  }
  //School methods
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const subs = substituteTeachers
    let i = Math.floor(Math.random()* subs.length)
    return console.log(subs[i]);
  }
}
//Primary school class and property
class Primary extends School {
  constructor(name, level, numberOfStudents, pickUpPolicy) {
    super(name, level, numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }
  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}
//Middle school class. No non-inherited property
class Middle extends School {
  constructor(name, level, numberOfStudents){
    super(name, level, numberOfStudents);
  }
}
//High school class and prperty
class High extends School {
  constructor(name, level, numberOfStudents, sportsTeam) {
    super(name, level, numberOfStudents);
    this._sportsTeam = sportsTeam;
  }
  get sportsTeam() {
    return this._sportsTeam;
  }
}
//Testing instances of classes with methods
const lorraineHansbury = new Primary('Lorraine Hansbury', 'Primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
const alSmith = new High('Al E. Smith', 'High', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeam);