function add(x, y) {
  console.log(x + y);
}
function subtract(x, y) {
  console.log(x - y);
}

// module.exports = {add, subtract}; 
exports.sum = add; //left is alias name, right is function name
exports.sub = subtract;
