function sub(a, b) {
  return a - b;
}
function add(a, b) {
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
