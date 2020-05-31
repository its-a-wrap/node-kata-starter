
const mainFunction = () => {
  var returnValue = helperFunction();
  return returnValue;
}

const helperFunction = () => {
  return 10;
}

module.exports = mainFunction;