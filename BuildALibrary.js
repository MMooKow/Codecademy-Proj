class Media{
  constructor() {
    this._isCheckedOut = false;
    this._ratings = [];
  }
    get isCheckedOut() {
    return this._isCheckedOut;
  }
    get ratings() {
    return this._ratings;
  }
  getAverageRating() {
    let sum = 0;
    for (let i = 0; i <= this.ratings.length -1; i++){
      sum += this.ratings[i];
    }
    sum /= this.ratings.length;
    return sum
}

  toggleCheckOutStatus(status) {
    if (status = true){
      this._isCheckedOut = true;
      return console.log('This title is checked out.');
    }else if (status = false){
      this.isCheckedOut = false;
      return console.log('This title is not checked out.');
    }else{
      return console.log('Error: Only allowable values are true or false');
    }
  }
  
addRating(score) {
  if (score < 6 && score > 0 && typeof score === 'number'){
   let round =  Math.round(score * 10) / 10;
    this._ratings.push(round);
  }else{
    return console.log('Error: Enter a number from 1 to 5.')
  }
}
}
class Book extends Media{
  constructor(title, author, pages){
    this._title = title;
    this._author = author;
    this._pages = pages;
  }
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}
  class Movie extends Media{
    constructor(title, director, runTime){
      this._title = title;
      this._director = director;
      this._runTime = runTime;
    }
    get title() {
      return this._title;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
class Cd extends Media{
  constructor(title, artist, songs){
    this._title = title;
    this._artist = artist;
    this.songs = songs;
  }
  get title() {
    return this._title;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}
const book1 = new Book('Franklin', 'BillyBob', 2987);
book1.addRating(4.567);
book1.addRating(5);
book1.addRating(2);
book1.addRating(3.2456);
book1.addRating(2.24);
console.log(book1.ratings);
console.log(book1.getAverageRating());