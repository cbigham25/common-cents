// TODO: Add a comment explaining the role of `export` in this function `boxClick()`
// The export in this function is used to export the function below to the index.js file. Seperation of concerns.

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};
