var usersContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function placeUserHtml(loginName, url){
  var LoginEl = document.createElement("h3");
  var urlEl = document.createElement("p");

  LoginEl.textContent = loginName;
  urlEl.textContent = url;

  usersContainer.append(LoginEl)
  usersContainer.append(urlEl)
}

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      for (var i = 0; i < data.length; i++){
      // TODO: Loop through the data and generate your HTML
      //  * It's done when each user includes their login name and a URL to their GitHub profile.
        placeUserHtml(data[i].login, data[i].url)
      }

    });
}
fetchButton.addEventListener('click', getApi);
