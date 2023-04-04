console.log("HI");

//Selectors
//var header = document.querySelector("h1");
var header = $("h1");
var subHeader = $("h2");



//header.setAttribute("class", "redColor");
header.attr("class", "redColor");

//header.textContext = "Whatever";
header.text("Whatever");

//subHeader.innerHTML = "<b>Some HTML</b>";
subHeader.html("<b>Some HTML</b>");

//var lineItem = document.createElement("li");


var reasonsList = $("#reasonsList"); //ul
var lineItem = $("<li>");
lineItem.addClass("blueItem");
lineItem.addClass("flashyItem");
lineItem.text("Its fast!");

$("#reasonsList").append(lineItem);







