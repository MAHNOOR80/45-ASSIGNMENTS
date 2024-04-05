// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.

console.log("\t Question no 39:\n ")

// creating a function with parameters whuch return a values in string 
function city_country(city :string , country :string ) : string{
    return`${city},${country}`

}

//calling the function and print the returned value
city_country("Karachi","Pakistan");
console.log(city_country("Karachi","Pakistan"));

city_country("Tokoyo","Japan");
console.log(city_country("Tokoyo","Japan"));;

city_country("Berlin","Germany");
console.log(city_country("Berlin","Germany"));