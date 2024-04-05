// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

console.log("\tQuestion no 37:\n")

// making a function 
function make_shirt(size: string= "Large" , printMessage: string = "I love TypeScript"){
    console.log(`Creating A ${size} Size Shirt With ${printMessage} Printed On The Shirt`)

}

// calling a function with by default values
make_shirt()

//calling a function now with  medium size and default message
make_shirt("Medium")

//calling a function now with small size and different message
make_shirt("Small","I Love Javascript")