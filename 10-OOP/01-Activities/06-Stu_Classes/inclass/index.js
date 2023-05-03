// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class BlogPost {
  constructor(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.comments = [];
  }
  printMetaData() {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  }
  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(authorName, text, createdOn, reaction) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
    this.reaction = reaction;
  }
  printMetaData() {
    console.log(
      `Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`
    );
  }
}

const newComment = new Comment("Eric", "How are You?", "5/1/2023", "YAY!");
const newPost = new BlogPost("Eric", "Hi", "How are You?", "5/1/2023");

newPost.addComment(newComment);

// newPost.printMetaData();
// newComment.printMetaData();

console.log(newPost.comments[0].reaction);
// TODO: Use the addComment() method on your newly created BlogPost to add your newly created
//Comment to its comments array.

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
