// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for 
// the appropriate color alien.
console.log("\t Question 27: \n");
// defined variable
var alienColor = "Green";
// using if and else if statements
if (alienColor === "Green") {
    console.log(" (version1) you shot down green alien so you have earned 5 points");
}
else if (alienColor === "yellow") {
    console.log("you shot down yellow alien so you have earned 10 points ");
}
else if (alienColor === "red") {
    console.log(" you have shot red alien so you have earned 15 points ");
}
// second version
var alienColor2 = "Yellow";
if (alienColor2 === "green") {
    console.log("you shot down green alien so  you have earned 5 points");
}
else if (alienColor2 === "Yellow") {
    console.log("(version 2) you shot down yellow alien so you have earned 10 points ");
}
else if (alienColor2 === "red") {
    console.log(" you shot down  red alien so you have earned 15 points ");
}
// third version
var alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("you have shot down green alien so you have earned 5 points  ");
}
else if (alienColor3 === "yellow") {
    console.log("you have shot down yellow alien so you have earned 10 points");
}
else if (alienColor3 === "red") {
    console.log("(version 3) you have shot down red alien so you have earned 15 points");
}
