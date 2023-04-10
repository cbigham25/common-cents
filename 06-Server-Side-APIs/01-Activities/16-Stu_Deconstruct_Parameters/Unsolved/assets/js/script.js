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
//per_page limit results of the page (10)
//state parameter state of the issue is open
//sort will sort by date created (update, last commented)
//direction sort in desc order
