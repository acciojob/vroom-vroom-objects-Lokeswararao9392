  function Car(make,model){
       if(typeof make !== "string" || typeof model !== "string"){
          throw new Error("Type of arguments should be strong")
       }
       this.make = make;
       this.model = model;
  }

  Car.prototype.getMakeModel = function(){
    return (`${this.make} ${this.model}`)
  }

  function SportsCar(make,model,topSpeed){
    if(typeof make !== "string" || typeof model !== "string" || typeof topSpeed !== "number"){
        throw new Error("type of arguments not correct")
    }
    this.make = make;
    this.model = model;
    this.topSpeed = topSpeed;
  }

// Inheriting from Car
   SportsCar.prototype = Car.prototype

  SportsCar.prototype.getTopSpeed = function(){
    return this.topSpeed
  }

  // Create a New SportsCar Instance
   const car = new SportsCar ("Ferrari","Testarossa",200)

   // Call getMakeModel() to get make model of the car
   console.log(car.getMakeModel()) // Output :- Ferrari Testarossa

   // call getTopSpeed() to get topSpeed of the SportCar
   console.log(car.getTopSpeed()) // OutPut :- 200
