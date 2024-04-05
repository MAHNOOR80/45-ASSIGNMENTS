// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message 
//  is printed.
console.log("\t Question no 31 :\n");
var userNames = ["Mahnoor", "Naeem", "Admin", "Naveed", "Usman"];
userNames = [];
if (userNames.length === 0) {
    console.log(" Your Array Is Empty We need to find some users!");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ",Would You Like To See a Status Report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", Thank You For Logging In Again."));
        }
    });
}
