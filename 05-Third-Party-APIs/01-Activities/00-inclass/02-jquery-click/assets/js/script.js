

$("#ClickMe").on("click", function(){
    var newThing = "<h2>NEW THING!</h2>";
    $("body").append(newThing);
})

// //Second Method
// $(document).on("click", "#ClickMe", function(){
//     var newThing = "<h2>NEW THING2</h2>";
//     $("body").append(newThing);
// })

// //Third Method
// $("#ClickMe").click(function(){
//     var newThing = "<h2>NEW THING3</h2>";
//     $("body").append(newThing);
// })
