const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },//courses
  get appetizers() {
  return this._courses.appetizers;
},//get appetizers
    get mains() {
  return this._courses.mains;
},//get mains
    get desserts() {
  return this._courses.desserts;
},//get desserts
    set appetizers(appetizerIn) {
 menu._courses.appetizers = appetizerIn;
},//set appetizers
    set mains(mainsIn) {
 menu._courses.mains = mainsIn; 
},//set mains
    set desserts(dessertIn) {
 menu._courses.desserts = dessertIn;   
  },//set desserts
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }//return
  },//get courses
addDishToCourse (courseName, dishName, dishPrice) {
  const dish = {
  name: dishName,
  price: dishPrice
}//dish
  this._courses[courseName].push(dish);
},//addDishToCourse
  getRandomDishFromCourse (courseName) {
    const dishes = menu._courses[courseName]
    const randomIndex = Math.floor(Math.random() * dishes.length);
   return dishes[randomIndex];
  },
  generateRandomMeal () {
    const appetizer = menu.getRandomDishFromCourse('appetizers');
    const main = menu.getRandomDishFromCourse('mains');
    const dessert = menu.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your appetizer is ${appetizer.name}, followed by a main course of ${main.name}, and ${dessert.name} to finish it off for dessert. The total price will be: $${Math.floor(totalPrice)}.`
  }//generateRandomMeal
};//menu
//add appetizers
menu.addDishToCourse('appetizers', 'Fish Sticks', 7.25);
menu.addDishToCourse('appetizers', 'Jalapeno Poppers', 9.00);
menu.addDishToCourse('appetizers', 'Nachos', 5.00);
//add mains
menu.addDishToCourse('mains', 'Pulled Pork', 10.99);
menu.addDishToCourse('mains', 'Main Lobster', 40.00);
menu.addDishToCourse('mains', 'T-Bone Steak', 35.99);
//add desserts
menu.addDishToCourse('desserts', 'Ice Cream', 4.49);
menu.addDishToCourse('desserts', 'Apple Pie', 3.99);
menu.addDishToCourse('desserts', 'Parfait', 5.00);
const meal = menu.generateRandomMeal();
console.log(meal);