"use strict";
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//  Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each
//  user:
// • If the username is 'admin', print a special greeting, such as Hello admin, 
// would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging 
// in again
console.log("\tQUESTION NO 30: \n");
// creating a array 
let userNames = ["Mahnoor", "Ali", "Naeem", "Admin", "Naveed"];
// using foreach loop on array 
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser},Would You Like To See a Status Report?`);
    }
    else {
        console.log(`Hello ${oneUser}, Thank You For Logging In Again.`);
    }
});
