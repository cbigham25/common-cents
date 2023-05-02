// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'

// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

function BlogPost(authorName, title, text, createdOn) {
  this.titleType = "Author";
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Create a new object using the 'BlogPost' constructor
var post = new BlogPost(
  "John",
  "First Post",
  "THis is my first Post",
  "5/1/2023"
);

// TODO: Call the 'printMetaData()' method on the new object
post.printMetaData();
console.log(post.titleType);
