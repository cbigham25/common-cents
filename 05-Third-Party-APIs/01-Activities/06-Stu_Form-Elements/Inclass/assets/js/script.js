var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(e){
    e.preventDefault();

    var shoppingItem = $("input[name=shopping-input]").val();
    //var shoppingItem = $("#shopping-input").val();
    var displayItem = $("<li>");
    displayItem.text(shoppingItem);

    shoppingListEl.append(displayItem);
    
    $("input[name=shopping-input]").val("");
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);