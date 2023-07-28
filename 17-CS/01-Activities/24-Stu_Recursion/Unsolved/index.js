// TODO: Add a comment describing what the `position` parameter means for this function.
// the position parameter means a specific array of numbers is being used.
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  // if position is less than 2 then it will return the position parameter
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  // if not then it will return the fibonacci sequence plus 1
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
// this will return infinitely because it is not less than 2
// running this would break your browser
console.log(fibonacci(9));
