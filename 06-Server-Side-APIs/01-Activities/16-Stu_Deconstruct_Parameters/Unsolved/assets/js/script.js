fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// per_page 
// the '.then' parameter method takes one or two callback functions as parameters.
// i.e the recieving function and the returning function.
// the 'function response' parameter is 1) you are creating the function and you want the system to give you a response based on the data that you give it
// "return" parameter is what you want in return from the webpage. 
// i.e when you need the page to load a css file you feed it the parameters to do so
//  the console log lets you add a string with text or 'textContent' to appear on the page
// the 'data' parameter