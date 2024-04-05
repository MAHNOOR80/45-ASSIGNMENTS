// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.

console.log("\t Question no 38 : \n")

// creating  a function 
function describe_city (city : string ,country : string = "Pakistan" ){
    console.log(`${city } Is In ${country}`)
}

// calling the function 
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
