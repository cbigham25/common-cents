 // Get the current date and time
 function updateCurrentDate() {
    const currentDate = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    document.querySelector('#current-date').textContent = currentDate;
  }

  // Step 2: Capture Form Data
var projectFormEl = document.querySelector("#project-form");
var projectNameInputEl = document.querySelector("#project-name");
var projectTypeInputEl = document.querySelector("#project-type");
var projectDueDateInputEl = document.querySelector("#project-due-date");
var projectTableEl = document.querySelector("#project-table");

projectFormEl.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var projectName = projectNameInputEl.value.trim();
  var projectType = projectTypeInputEl.value.trim();
  var projectDueDate = projectDueDateInputEl.value.trim();

  // Step 3: Print Project Data to Page
  var newRowEl = document.createElement("tr");
  newRowEl.innerHTML = `
    <td>${projectName}</td>
    <td>${projectType}</td>
    <td>${projectDueDate}</td>
    <td>
      <button class="btn btn-danger btn-sm delete-btn">Delete</button>
    </td>
  `;
  projectTableEl.querySelector("tbody").appendChild(newRowEl);

  // Step 4: Delete a Project From the Table
  var deleteBtnEl = newRowEl.querySelector(".delete-btn");
  deleteBtnEl.addEventListener("click", function() {
    newRowEl.remove();
  });
  
  projectNameInputEl.value = "";
  projectTypeInputEl.value = "";
  projectDueDateInputEl.value = "";
});

