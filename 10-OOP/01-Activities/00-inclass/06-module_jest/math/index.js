function sub(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Numbers are needed for this function!");
  }
  return a - b;
}
function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Numbers are needed for this function!");
  }
  return a + b;
}

function multi(a, b) {
  return a * b;
}
function otherThing(a, b) {
  return a % b;
}

const exportStuff = {
  sub: sub,
  multi: multi,
  add: add,
};

module.exports = exportStuff;
