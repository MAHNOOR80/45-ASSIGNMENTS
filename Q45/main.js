"use strict";
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
console.log(" \t Question no 45: \n");
function createCar(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
let myCar = createCar("Honda", "Civic", { Color: "Black", year: "2024" });
console.log(myCar);
