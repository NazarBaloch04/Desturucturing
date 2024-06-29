//  What is an array destructuring:
//  A feature in TS that allows you to unpack values from objects and arrays
 
let array = ["Nazar Baloch", 19, "mazarnazarali04@gmail.com"]
 let [name1, age, email] = array
 console.log(array);
 

//   Destructuring in an Object:

let obj = {
    fname: "Nazar",
    lname: "Mazari",
 favoritePersonality: "Quaid e Azam",
    hobbies: ["Reading Books"]
}

let {fname, lname,  favoritePersonality ,hobbies} = obj
console.log(obj);
