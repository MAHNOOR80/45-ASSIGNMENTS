
// Question no 15


15.// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14.
//  Add a print statement at the end of your program stating the name of the guest who
//   can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
//  the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
//  in your list.

console.log("\t Question 15:\n");



let guestArray :string []=["hina","aasia","sufyan","mahnnor"];
 let canNotAttend : string = "mahnnor"
 console.log(canNotAttend +  " " + "can not make it, for dinner");


let newGuest :string ="usman";
guestArray[guestArray.indexOf(canNotAttend)] =newGuest;
console.log(guestArray)

let guestarray :string []=["hina","aasia","sufyan","usman"];
console.log("Dear",guestarray[0], "you are coordinally invited to a dinner");
console.log("Dear",guestarray[1], "you are coordinally invited to a dinner");
console.log("Dear",guestarray[2], "you are coordinally invited to a dinner");
console.log("Dear",guestarray[3], "you are coordinally invited to a dinner");