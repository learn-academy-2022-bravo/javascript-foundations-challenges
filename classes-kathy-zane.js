class Coffee {
    constructor(type, cream, sugar){
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    }
  
    coffeeProfile(){
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
  
    creams(){
      if(this.cream > 1){
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars(){
      if(this.sugar > 1){
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }    
  }
//   Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.

let blackCoffee = new Coffee("regular", 0 , 0)
console.log(blackCoffee.coffeeProfile())



//   Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
  
let Coffee1 = new Coffee("regular", 1 , 2)
console.log(Coffee1.coffeeProfile())




//   Latte Maker
//   Write a Latte class that takes a flavor, a milk type and a number of shots.
  
//   Write a method for your Latte class that outputs the latte's profile.
  
//   Write the code that makes a regular, single shot latte. Then, log the latte's profile.
  
//   Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
  
//   Volume of a Cylinder
//   Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
  
//   Write the code that creates three unique cylinder objects
  
  