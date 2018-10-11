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
    this.ratings.reduce(add, 0);

function add(a, b) {
    return a + b;
}
    //let round = Math.round(this.ratings * 10) / 10;
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
const book = new Media('Franklin');
book.addRating(4.567);
book.addRating(5);
book.addRating(2);
book.addRating(3.2456);
book.addRating(2.24);
console.log(book.ratings);
console.log(book.getAverageRating());