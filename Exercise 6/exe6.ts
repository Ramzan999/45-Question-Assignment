// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let myName: string = "\t Muhammad Ramzan \n \t"

console.log("Name with whitespace:", myName);

let strippingName: string = myName.trim();

console.log("Name after stripping whitespace:", strippingName);


///////////////////  Second scenario /////////////


let personName: string = "\t\n Ahmed \t\n"; // This saves the name with whitespace

console.log(personName); // Shows the name with whitespace
console.log(personName.trim()); // Shows the name without whitespace