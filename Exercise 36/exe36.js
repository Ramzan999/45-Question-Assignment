"use strict";
/* T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */
const make_shirt = (size, message) => {
    console.log(`Size ${size} Message: '${message}'.`);
};
// call the function 
let size = "medium";
let message = "This T-shirt is good for male and female";
make_shirt(size, message);
make_shirt("Large", "This T-shirt is just for kids");
