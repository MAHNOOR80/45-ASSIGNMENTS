// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

console.log("\t Question no 42:\n ")

// define the functions to show magicians name 
function show_magicians(magicians: string []){
    magicians.forEach(name => console.log(name));
}
 
// function  to make magicians great through .map it will modify array 
function make_great(magician : string []){
    return  magician.map(name => `The Great ${name}`);
}

//  define an array of magician names
let magician_names = ["Harry Poter","Mahnoor","Usman"];

// call make great function to modify the magicians names 
let great_magicians = make_great(magician_names);


//call show magicians functions that shpow modified list of magicians 
 show_magicians(great_magicians );