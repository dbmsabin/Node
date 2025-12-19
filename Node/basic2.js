// let array1 = [1, 2, 3, 4, 5, "dsd", "dsfdsf",5,6];
// let array2 = new Array(10, 20, 30, 40, 50);
// let a = "1-2-3-4-5-6"
// let email = "sabin.magar@gmail.com"
// array1.push(6);  //add on from the end
// array1.pop();  //remove from the end
// array1.shift(); //remove from the start
// array1.unshift(0); //add on from the start
// array1.splice(2, 2, "hello"); //add at index 2 and remove 2 elements
// array1.splice(3, 0, "new"); //add at index 3 without removing any element
// // let subset1 = array1.slice(2, 4); //remove from index 2 to 4
// // console.log(array1);
// // console.log(subset1
// console.log(array1.indexOf("dsd")); //get index of element
// console.log(array1.indexOf("rferf")); //get index of element
// console.log(array1.lastIndexOf(5)); //get index of element

// console.log(array1.includes("dsfdsf")); //check if element is present
// console.log(array1.join("+")); //join elements with a separator
// let username = email.split("@")
// console.log(username)
// let Name = username[0].split(".")
// console.log("Username: " + Name.join(" "));
// console.log("First Name: " + Name[0]);
// console.log("Last Name: " + Name[1]);

// console.log(array1)
// for(let x of array1){
//     console.log(x); //index
// }

// let number = [1,2,3,4,5,6,7,8,9,10];
// let squared = number.map((num) => num * num); //map method: it returns array
// console.log(squared);

// let evenNumbers = number.filter((num) => num % 2 === 0); //filter method: it returns array
// console.log(evenNumbers);

 //Find method: it returns single value
// let firstEven = number.find((num) => num % 2 === 0); 
// console.log(firstEven);

// number.forEach((num) => console.log(num * 3)); //forEach method: it does not return anything

// let newNumber = [...number, 11, 12, 13]; //spread operator or rest operator
// console.log(newNumber);

// let colors = [10,30, 60];
// // let red = colors[0];
// // let green = colors[1];
// // let blue = colors[2];
// let [red, green, blue] = colors; //destructuring
// console.log(red, green, blue);

// let user = {
//     name: "Sabin Magar",
//     age: 24,
//     email: "example@gmail.com",
//     address: {
//         street: "123 Main St",
//         city: "Kathmandu",
//         country: "Nepal"
//     }
// };
// user.name = "Dil Magar"; //modifying object properties
// user.phone = "123-456-7890"; //adding new property to object
// console.log(user.name); //accessing object properties , prefferred way
// console.log(user["email"]) //accessing object properties
// console.log(user)

// let key = "email"
// console.log(user[key]) //accessing object properties using variable

// let user1 = {...user, phone: "987-654-3210",Gender: "Male"}; //cloning object using spread operator and modifying phone number
// console.log(user1);

// // let uname = user.name; //destructuring object
// // let phone = user.phone; //destructuring object
// // console.log(uname, phone);

// let {name:uname, email:newEmail } = user; //destructuring object, prefferred way
// console.log(uname, newEmail);

let username1 = "Sabin";
let password1 = "12345";

let user = {
  username: username1,
  password: password1,
};
console.log(user);
// let user = {
//     username, password//prefferred way if variable name and object property name are same
// }
// console.log(user);

//Homework: Find out if a object is empty or not and print the message accordingly
