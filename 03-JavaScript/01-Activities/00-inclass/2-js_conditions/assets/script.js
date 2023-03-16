// var isInClass = true;
// var cameraIsOn = true; 

// var isInAttendence;

// if (isInClass && cameraIsOn){ //true and a true
//     isInAttendence = true;
//     alert("Yea! You're Here!");
// }
// else if (isInClass){ // true in class, but false in camera
//     isInAttendence = true;
//     alert("Turn Your Camera On!");
// }
// else if (cameraIsOn){ // true camera is one, but false in not in class
//     isInAttendence = false;
//     alert("Cameras On but nobodys home!");
// }
// else { // camera is false, and not in class
//     isInAttendence = false;
//     alert("You're not here and your camera is off!");
// }

// var slicesOfPizza = 4;
// var hungryForPizza = false;
// var pizzaIsFree = true;
// var slicesLeft = 0;


//  if (slicesOfPizza >=4 && slicesLeft > 0){
//     alert("Too Much Pizza, but some left")
//  }
//  else if (slicesOfPizza >=4 && slicesLeft < 1){
//     alert("Too Much Pizza, but NONE left")
//  }
//  else if (slicesOfPizza >=2){
//     alert("Almost too much pizza")
//  }
//  else if (slicesOfPizza >=0){
//     alert("Need more pizza!")
//  }
//  else {
//     alert("This is a impossible number of pizza")
//  }


var confirmSushi = false;
var sushiType = "California Rolls";
var confirmGingerTea = false;

// If the user likes sushi (confirmSushi === true), we run the following block of code.
if (confirmSushi) {

    alert("You like " + sushiType + "!");
  
  }
  // If the user likes ginger tea (confirmGingerTea === true), we run the following block of code.
  else if (confirmGingerTea) {
  
    alert("You like ginger tea!!");
  
  }
  // If neither of the previous condition were true, we run the following block of code.
  else {
  
    alert("You don’t like sushi or ginger tea.");
  
  }
  