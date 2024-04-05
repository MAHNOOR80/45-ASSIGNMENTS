"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
console.log("\t Question no 41 : \n");
// define a function to print each magician name from an array 
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//define an array containing magicians name 
let magician_names = ["Harry Poter", "Mahnoor", "Usman"];
//call the function to print each magician name 
show_magicians(magician_names);
