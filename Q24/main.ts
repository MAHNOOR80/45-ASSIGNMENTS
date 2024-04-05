// 24. More Conditioncmdal Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one False result
//   for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and
//  less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


console.log("/t Question 24 :/n")

// defined variables
let apple = "apple";
let upperCaseapple = "APPLE";
let ten = 10;
let twenty =20;
let fruits  =["apple","banana","orange"]

// test for equality and unequality with strings
console.log("\n Is apple is equal to apple");
console.log(apple == "apple")

// unequality
console.log("\n Is apple not equal to apple ?");
console.log( apple != "apple");

// • Tests using the lower case function

console.log("\n Is APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseapple.toLowerCase()  == "apple");

console.log("\n Is Apple not equal to apple after converting to lower case");
console.log(upperCaseapple.toLowerCase() != "apple" );

// numerical tests
//   equal to
console.log("\n Is ten is equal to twenty ?");
console.log(ten== twenty);

// not equal to
console.log("\n Is ten is not equal to twenty");
console.log( ten != twenty);
 
// greter than 
console.log("\n Is ten greater than zero ")
console.log(ten > 0)

// less than
console.log("\n Is twenty less than 10");
console.log(twenty < 10);

// greater than or equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);

// less than or equals to
console.log("\n Is twenty less than or equal to 10 ?");
console.log(twenty <= 10);

// Tests using "and" and "or" operators

// using and operator (&&)
console.log("\n twenty is not equals to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equals to 10 and twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30);

// using or operator (||)

console.log("\n 20 is greater than 50 or 20 is equals to 20");
console.log(20 > 50 || 20 == 20 );

console.log("\n 20 is greater than 50 or 20 is not equals to 20");
console.log(20 > 50 || 20 != 20 );

// • Test whether an item is include in a array
console.log("\n Is orange included in my fruits array ?");
console.log(fruits.includes("orange"));


// • Test whether an item is not in a array
console.log("\n Is orange not  included in my fruits array ?");
console.log(!fruits.includes("orange"));
