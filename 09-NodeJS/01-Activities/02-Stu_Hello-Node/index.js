 var name = "Blaine";
console.log("Hello World!!!");

var sayhi = (function) => {
console.log("Hello World!!!");
};


var say hi = () => {
    console.log("Hello World!!!");
    };

    var gretting = function(firstname) {
        return "hello " + firstname;
    }; 

    // simple return
    var name = "blaine"; 
    var greeting = (name) => return "Hello" + name;

    console.log(greeting("blaine"));

    var employee = {
        firstName = "John", 
        intro: () => {
            console.log(firstName)
        }
    }
    
    console.log(employee.intro());