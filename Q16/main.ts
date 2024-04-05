// Question no 16

// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your 
// program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.

console.log("\t Question 16:\n");


let guestArr :string[]=["yusra","falak","fatima","imran"];
let canNotAttend:string = "falak"
let newGuest:string ="amna"

guestArr[guestArr.indexOf( canNotAttend)] = newGuest


console.log(guestArr)
console.log("Dear", guestArr[0],"i found a bigger dinner table");
console.log("Dear", guestArr[1],"i found a bigger dinner table");
console.log("Dear", guestArr[2],"i found a bigger dinner table");
console.log("Dear", guestArr[3],"i found a bigger dinner table");

let guestBegin:string ="ali";
guestArr.unshift(guestBegin);
console.log(guestArr)

let middleGuest:string ="mehar";
let middleIndex = guestArr.length/2
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr)


guestArr.push("dua")
console.log(guestArr)


console.log("Dear", guestArr[0], "you are coordinally invited to the dinner");
console.log("Dear", guestArr[1], "you are coordinally invited to the dinner");
console.log("Dear", guestArr[2], "you are coordinally invited to the dinner");
console.log("Dear", guestArr[3], "you are coordinally invited to the dinner");
console.log("Dear", guestArr[4], "you are coordinally invited to the dinner");
console.log("Dear", guestArr[5], "you are coordinally invited to the dinner");
console.log("Dear", guestArr[6], "you are coordinally invited to the dinner");