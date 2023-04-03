var newsLetterFormEl = $("#newsLetterForm");
var listingEl = $("#listing");

function handleFormSubmit(event){
    event.preventDefault();
    var firstNameValue = $('input[name="firstName"]').val();
    var lastNameValue = $('input[name="lastName"]').val();
    var emailValue = $('input[name="email"]').val();

    var detailEl = $("<li>");
   
    
    detailEl.html(emailValue);

    $('input[name="firstName"]').val('')
    $('input[name="lastName"]').val('')
    $('input[name="email"]').val('')
    listingEl.append(detailEl);

}

newsLetterFormEl.on("submit", handleFormSubmit)