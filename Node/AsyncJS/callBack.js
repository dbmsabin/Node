// function sum(num1, num2) {
//     let result = 0;
//     setTimeout(() => {
//         result = num1 + num2;
//     }, 2000);
//     return result;
// }
// let result = sum(5, 10); //it will return undefined because setTimeout is asynchronous
// console.log(result); // example of cons of asynchronous function

// function sum(num1, num2, callBack) {
//   let result = 0;
//   setTimeout(() => {
//     result = num1 + num2;
//     callBack(result); //calling the callback function with result
//   }, 5000);
//   return result;
// }
// sum(5, 10, (result) => { // passing callback function as an argument
//   console.log(result);
// });

// example of pros of asynchronous function using callback
//Using CallBack
// function area(length, breadth, callBack) {
//   let result = 0;
//   setTimeout(() => {
//     if (length < 0 || breadth < 0) {
//       let err = new Error("Length and Breadth must be positive numbers"); //creating error object
//       callBack(err, null); //calling the callback function with error
//     } else {
//       let result = length * breadth;
//       callBack(null, result); //calling the callback function with result
//     }
//   }, 3000);
// }

// area(2, -5, (err, result) => { //passing callback function as an argument
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });

// //Using Promise
function area(l, b) {
  //promise function
  return new Promise((resolve, reject) => {
    //executor function
    if (l < 0 || b < 0) {
      let err = new Error("Length and Breadth must be positive numbers");
      reject(err);
    } else {
      let result = l * b;
      resolve(result);
    }
  });
}
// area(2, 5) //calling promise function
//   .then((result) => { //handling resolved promise
//     console.log(result);
//   })
//   .catch((err) => { //handling rejected promise
//     console.log(err.message);
//   });

//Using async await
async function getArea() {
  //wrapping promise function inside async function
  try {
    //using try catch block to handle error
    let result = await area(2, 5); //waiting for the promise to resolve
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}
getArea(); //calling async function
