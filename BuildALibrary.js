//Class that will be inherited by the other 3.
//Sets up rating system and whether or not a piece is checked out.
class Media{
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
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
      let round =  Math.round(sum * 10) / 10;
    return round;
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
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
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
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
class Cd extends Media{
  constructor(title, artist){
    super(title);
    this._artist = artist;
    this._songs = [];
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  addSongs(songs) {
    this._songs.push(songs);
  }
}
const movie1 = new Movie('Franklin', 'BillyBob', 120);
movie1.addRating(4.567);
movie1.addRating(5);
movie1.addRating(2);
movie1.addRating(3.2456);
movie1.addRating(2.24);
console.log(movie1.ratings);
console.log(movie1.getAverageRating());

const book1 = new Book('Apple Assault', 'Frank Frankfurt', 2309);
book1.addRating(3.455);
book1.addRating(4);
book1.addRating(1);
book1.addRating(1.234);
book1.addRating(2.56);
console.log(book1.ratings);
console.log(book1.getAverageRating());
console.log(book1.title);

const cd1 = new Cd('Sing Along Rock', 'Rocky Rockinger');
cd1.addRating(3.455);
cd1.addRating(4);
cd1.addRating(1);
cd1.addRating(1.234);
cd1.addRating(2.56);
cd1.addSongs(['Song of Rock', 'Ballad of Rock', 'Requiem of Rock']);
console.log(cd1.songs);
console.log(cd1.artist);

const cd2 = new Cd('Rock Along Robin', 'John Rockinger II');
cd2.addRating(5);
cd2.addRating(3.43535);
cd2.addRating(4.332);
cd2.addRating(1);
cd2.addRating(3);
cd2.addSongs(['Slow Song of Rock', 'Better Ballad of Rock', 'Rockin Requiem of Rock']);
console.log(cd2.songs);
console.log(cd2.artist);console.log(cd2.getAverageRating());