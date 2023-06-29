function outerFunction(xyzTolken = false) {
  if (!xyzTolken) {
    throw Error("SOMETHINGS WRONG");
  }
  let outerVar = 100;

  outFuncObj = {
    secretFunction: function () {
      let secret = "Password123";
      return secret;
    },
  };

  return outFuncObj;
}

let returnObject = outerFunction("TOKEN123");

const secret = returnObject.secretFunction();
console.log(secret);
