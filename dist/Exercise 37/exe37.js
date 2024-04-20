// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = "Large", message = "I Love TypeScript") {
    console.log(`size: ${size}, message: ${message}`);
}
// Large shirt with default message
makeShirt(); // Output: size: Large , message: "I Love TypeScript.
// Medium shirt with default message
makeShirt("Medium"); // Output : size: Medium , message: "I Love TypeScript."
// Custom shirt with a different message and size
makeShirt("small", "Hello, TypeScript!"); //Output: size: Small , message: "Hello, TypeScript!".
export {};
