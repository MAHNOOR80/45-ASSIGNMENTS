// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\t Question 18:\n");
// making  a array of countries and print its orignal order
var countriesTovisit = ["China", "Dubai", "Brazil", "America"];
console.log("Orignal order :,countriesTovisit");
// print the array in alphabetical order without modifying the  actual array list 
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort());
// show that array is still in its orignal order
console.log("Still in orignal order:", countriesTovisit);
// print the array in reverse order without modifying the actual array list
console.log("Reverse order :", __spreadArray([], countriesTovisit, true).reverse());
// show that array is still in its orignal order
console.log("Still in orignal order:", countriesTovisit);
// we have changed the orignal array order into reverse 
console.log("Orignal array reversed:", countriesTovisit.reverse());
// print the array to show its back to its orignal order 
console.log("ack to orignal order:", countriesTovisit.reverse());
// print the array to show that its order has been changed in alphabetical order 
console.log("Sorted in alphabetical order :", countriesTovisit.sort());
// we have changed again the orignal order into reversed
console.log("Orignal array reversed:", countriesTovisit.reverse());
