var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5&sort=asc&start_with=a';

var responseText = document.getElementById('response-text');

function getApi(request) {
  fetch(request)
    .then(function (response) {
      // Check the console first to see the response.status
      if (response.status !== 200){
        responseText.textContent = response.status;
      }
      console.log(response.status);
      // Then write the conditional based on that response.status value
      // Make sure to display the response on the page
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);
