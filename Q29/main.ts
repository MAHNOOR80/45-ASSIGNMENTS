// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain 
// kind of fruit is in your array. If the fruit is in your array, the if block
//  should print a statement, such as You really like bananas!

console.log("\t QUESTION 29 : \n")
 
// creating a array
let favorite_fruits =["Mango","Strawberry","Orange"]


// using idependant if statements
if( favorite_fruits.includes("Mango")){
    console.log("I Really Like Mangoes");
}
if( favorite_fruits.includes("Strawberry")){
    console.log("I Really Like Strawberries");
}
if( favorite_fruits.includes("Grapes")){
    console.log("I Really Like Grapes");
}
if( favorite_fruits.includes("Orange")){
    console.log("I Really Like Oranges");
}
if( favorite_fruits.includes("Apple")){
    console.log("I Really Like Apples");
}
