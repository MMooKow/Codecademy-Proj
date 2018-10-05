const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
  
},
    get mains() {
  
},
    get desserts() {
  
},
    set appetizers(appetizerIn) {
  
},
    set mains(mainsIn) {
  
},
    set desserts(dessertIn) {
    
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
addDishToCourse (courseName, dishName, dishPrice) {
  const dish = {
  name: dishName,
  price: dishPrice
  //this._courses[courseName].push(dish);
}
}
}
};