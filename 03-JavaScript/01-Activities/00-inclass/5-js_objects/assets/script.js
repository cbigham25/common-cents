var car = {
  make:"Geo",
  model:"Metro",
  honkTimes: 1,
  honk: function(){
    var honkString = "";
    for (var i = 0; i<this.honkTimes; i++){
      honkString = honkString + " BEEEP! "
    }
    return honkString;
  },
  whatDoesTheCarDo: function(){
    //console.log("The Mazda Rx-7 Goes BEEEP!");
    console.log(this.make + " " + this.model + " Goes " + this.honk());
  }
};


car.honkTimes = 10;
car.make = "Mazda";
car.model = "Rx-7";
car.whatDoesTheCarDo();


