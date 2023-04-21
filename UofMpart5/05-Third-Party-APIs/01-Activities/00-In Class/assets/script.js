console.log("HI")

//selector (All green is HTML and the colored is JQuery)
//var header = document.queryselector("h1")
var header = $("h1")


/*var lineItem = document.createElement("li")
var lineItem = $("<li>");

//header.setAttribute("class", "recolor")
header.attr("class", "redcolor");

//header.textContent = "Whatever";
header.text="whatever"

//subheader.innerHtml = "<b>Some HTML</b>"
subheader.html("<br>some HTML</br>");

var reasonsList("reasonsList");
var lineItem = $("<li>");
lineItem.addClass("blueItem");
lineItem.text("its fast!");

$("reasonsList").append(lineItem);

document.querySelector("body").append("h1")*/

$(ClickMe).on("click", function(){
    var newThing = ("<h2>New thing</h2>")
    $(body).append("NewThing");
})

/*$(document).on("click", function(){
    var newThing = "<h2>New Thing 2</h2>"
    $(body).append("newThing");*/
