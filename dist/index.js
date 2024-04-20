// Question 2
let nam = "Ramzan";
console.log(`Hello ${nam}, would you like to learn TypeScript today?`);
// Question 3
let aliMurtza = "Ramzan saleh";
let lowerCaseName = aliMurtza.toLowerCase();
console.log(lowerCaseName);
let upperCaseName = aliMurtza.toUpperCase();
console.log(upperCaseName);
let words = aliMurtza.split(" ");
let titleCaseName = "";
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titleCaseName);
// Question 4
let quote = `William Faulkner once said, “It may be bad, but its the only way you can do anything really good”.`;
console.log(quote);
// Question 5
let famous_person = "paulo_coelho";
var message = `“Tears are words that need to be written”.`;
console.log(`${famous_person} once said,${message}`);
// Question 6
let person_name = "\t Ramzan Mandra \t\n";
console.log("Name with white spaces:", person_name);
let strippigName = person_name.trim();
console.log("Stripped name:", strippigName);
// Question 7
let additionResult = 5 + 3;
console.log("Addition Result is:", additionResult);
let subtractionResult = 16 - 8;
console.log("subscription Result is:", subtractionResult);
let multiplicationResult = 2 * 4;
console.log("multiplication Result is:", multiplicationResult);
let divisionResult = 64 / 8;
console.log("divison Result is:", divisionResult);
// Question 8
console.log(5 + 3);
console.log("_".repeat(80));
console.log(16 - 8);
console.log("_".repeat(80));
console.log(2 * 4);
console.log("_".repeat(80));
console.log(64 / 8);
console.log("_".repeat(80));
// Question 9 
let favoritNumber = 4;
var message = `My favorit number is: ${favoritNumber}`;
console.log(message);
// Question 10
// Hi, My name is Muhammad Ramzan and in this code i have writen one of my favorit quote this quote's author is "Paulo Coelho" as you can see i have writen author name in one variable and another variable i have also writen quote and i have print both variable in console together //
let Author = "paulo_coelho";
var message = `“Tears are words that need to be written”.`;
console.log(`${Author} once said,${message}`);
// Question 11 
var names = ["Muhammad", "Ali", "Ahmed", "waqas", "Feroze", "Imran"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
// Question 12
var names = ["Muhammad", "Ali", "Ahmed", "waqas", "Feroze", "Imran"];
for (let name of names) {
    // Greeting to each friend for using loop methode
    console.log(`Hello ${name}, You are most Wellcome in Typescript world`);
}
;
// Question 13
let favoritTransportation = [];
favoritTransportation.push(["motorcycle", "Honda"]);
favoritTransportation.push(["car", "Audio"]);
favoritTransportation.push(["bicycle", "sports"]);
// console.log(favoritTransportation)
// I would like to own a Honda motorcycle.
// for each loop used to print a series of statements
favoritTransportation.forEach(([transport, brand]) => { console.log(`I would like to own a ${brand} ${transport}.`); });
// Question 14
var guestList = [
    "sir zia khan",
    "kamran khan tessori",
    "allama iqbal",
    "albert einstein",
    "bill gates"
];
// using for each loop for inviting to dinner
guestList.forEach((guestName) => {
    console.log(`Dear ${guestName}, I would like to invite you to for dinner. Your presence will be highly honored for me`);
});
// Question 15
var guestList = [
    "sir zia khan",
    "kamran khan tessori",
    "allama iqbal",
];
// step 1. Print the name of persn who can't make it.
let guestCantMakeIt = "allama iqbal";
console.log(`${guestCantMakeIt} can't make it to dinner to night`);
// Step 2. Replace the name of guest who can't make it.
let newGuest = "elon musk";
let indexOfguestCantMakeIt = guestList.indexOf(guestCantMakeIt);
// console.log(indexOfguestCantMakeIt);
if (indexOfguestCantMakeIt !== -1) {
    guestList[indexOfguestCantMakeIt] = newGuest;
}
;
// console.log(guestList[2]);
// Step 3. Print a sencond set of invitation.
console.log("Sencond set of invitation");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, I would like to invite you to dinner. Your presence will be highly honored for me`);
});
// Question 16
var guestList = [
    "sir zia khan",
    "kamran khan tessori",
    "allama iqbal",
];
// Step 1. informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Hello, ${guest} We found a bigger dinner table`);
}
;
// Step 2. Add a new guest to the beginning of Array.
let newGuestAtBeginig = "abdul qadeer khan";
guestList.unshift(newGuestAtBeginig);
// console.log(guestList);
// step 3. Add a new guest to the middle of Array.
let newGuestAtMiddle = "fahad";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestAtMiddle);
// console.log(guestList);
// step 4. Add a new guest to the end of Array.
let newGuestAtEnd = "ashraf ali";
guestList.push(newGuestAtEnd);
// console.log(guestList);
// step 5. Print a new set of invitation message
console.log("New set of invitation messages:");
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are inviting to dinner`);
}
;
// console.log(guestList) // just for looking my all guest.
// Question 17
var guestList = [
    'abdul qadeer khan',
    'sir zia khan',
    'fahad',
    'kamran khan tessori',
    'allama iqbal',
    'ashraf ali'
];
// step 1. message about inviting only two people for dinner.
console.log(`I can invite only two people for dinner`);
// step 2. remove guest from the list untill only two remain.
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest}, I can't invite you to dinner`);
}
;
// step 3. Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let guest of guestList) {
    console.log(`Hello, ${guest} you are still invited to dinner`);
}
;
// step 4. Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestList.pop();
guestList.pop();
// Print empty string
console.log(`Guest list after dinner:`, guestList);
// Question 18
// Step 1. Create an array to store Travel destinations.
let travelDestination = ["Tokyo", "Paris", "Istanbul", "Madina Munawar", "Cayman", "Newyork"];
// Step 2. Print your array it's original condition.
console.log("Original Order:");
console.log(travelDestination);
// Step 3. Print your array in alphabetical order without modifying the actual list.
console.log("\n Alphabetical order without modifying the actual list");
console.log([...travelDestination].sort());
// Step 4. Show that your array is still in its original order by printing it again.
console.log("\n Showing array is still in its original order");
console.log(travelDestination);
// Step 5. Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n Reversse Alphabetical order without modifying the actual list");
console.log([...travelDestination].sort().reverse());
// Step 6. Show that your array is still in its original order by printing it again.
console.log("\n Showing array is still in its original order again");
console.log(travelDestination);
// Step 7. Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n Reverse Order");
travelDestination.reverse();
console.log(travelDestination);
// Step 8.  Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Back to Original Order");
travelDestination.reverse();
console.log(travelDestination);
// Step 9. Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n Change to Alphabatical Order");
travelDestination.sort();
console.log(travelDestination);
// Step 10. Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n Change to Reverse Alphabatical Order");
travelDestination.sort().reverse();
console.log(travelDestination);
// Question 19 this question solve in saperate folder Exercise 19
// Question 20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
const cities = ["Karachi", "Lahor", "islamabad", "bejing", "delhi"];
console.log("List of cities:");
for (let citi of cities) {
    console.log(citi);
}
;
// Question 21
const product = {
    name: "Clock",
    price: 700,
    description: "Best Clock for your wall"
};
// Define an array of objects.
let products = [];
// pushing multipul object.
products.push(product);
products.push({
    name: "Royal clock",
    price: 900,
    description: "beautifull clock"
});
let product3 = {
    name: "Spring Clock",
    price: 540,
    description: "Best Clock for your wall"
};
products.push(product3);
// console.log(products);
products.push({ name: "watch", price: 450, description: "watch for best time" });
// console.log(products);
// function to display products
function displayProducts(products) {
    for (let i of products) {
        console.log(`
    title: ${i.name}
    description: ${i.description}
    price: ${i.price}
    ______________\n`);
    }
}
;
displayProducts(products);
// Question 22
// Function to create a cloth object.
function createCloth(name, color, size) {
    return {
        name: name,
        color: color,
        size: size
    };
}
// Create an array of cloths.
const cloths = [
    createCloth("shirt", "black", "S"),
    createCloth("pants", "red", "M"),
    createCloth("shoes", "green", "M"),
    createCloth("shirt", "blue", "L"),
    createCloth("pants", "maringa", "XL"),
    createCloth("t-shirt", "brown", "XL")
];
// console.log(cloths);
// Access an error index.
const errorIndex = 10; // There are only 5 elements in the array, so this will cause an error.
console.log(`colths at index ${errorIndex}:`, cloths[errorIndex]);
// Print the cloths.
cloths.forEach((cloth) => {
    console.log(`Name: ${cloth.name}, Color: ${cloth.color}, Size: ${cloth.size}`);
});
// Question 23
let car = 'subaru';
console.log("is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
console.log("is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False
console.log("is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True
console.log("is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru'); // False
console.log("is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota'); // True
console.log("is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False
console.log("is car !== 'mazda'? I predict True.");
console.log(car !== 'mazda'); // True
console.log("is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False
let age = 25;
console.log("is age >= 18? I predict True.");
console.log(age >= 18); // True
console.log("is age <= 21? I predict False.");
console.log(age <= 21); // False
// Question 24
// step 1
const str1 = `\nhello`;
const str2 = "world";
console.log(str1 === str2); // False
console.log(str1 !== str2); // True
// step 2
const text1 = "TypeScript";
const text2 = "typescript";
console.log(text1.toLowerCase() === text2); // True
// step 3
const num1 = 10;
const num2 = 5;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False
// step 4
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z); // True, both condition are true 
console.log(x < y || y > z); // True, at least one condition is true
console.log(x < y && y > z); // False, both condition are false
console.log(x > y || y > z); // False, both condition are false
// step 5
const fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("mango")); // True
console.log(fruits.includes("orange")); // False
// step 6
const colors = ["red", "green", "blue"];
console.log(!colors.includes("blue")); // False
console.log(!colors.includes("orange")); // True
// Question 25
let alien_color = "red";
// step 1
if (alien_color === "green") {
    console.log("congratulations, you have just earned 5 points");
}
;
// step 2.
alien_color = "red";
if (alien_color == "green") {
    console.log("congratulations, you have just earned 5 points");
}
;
// Question 26 
// version 1 ( runs the if block )
console.log(`\n1st version of code`);
let alienColor = "green";
if (alienColor == "green") {
    console.log("congratulation, you have just earned 5 points for shootin the aline");
}
else {
    console.log("congratulation, you have just earned 10 points for shootin the aline");
}
;
// version 2 ( runs the else block )
console.log(`\n2nd version of code`);
alienColor = "blue";
if (alienColor == "green") {
    console.log("congratulation, you have just earned 5 points for shootin the aline");
}
else
    (alienColor == "blue");
{
    console.log("congratulation, you have just earned 10 points for shootin the aline");
}
;
// Question
let AlienColor = "green";
// version 1
console.log(`1st version where alien color is green`);
if (AlienColor === "green") {
    console.log("congratulation, you have just earned 5 points");
}
else if (AlienColor === "yellow") {
    console.log("congratulation, you have just earned 10 points");
}
else if (AlienColor === "red") {
    console.log("congratulation, you have just earned 15 points");
}
else {
    console.log("unknown alien color");
}
;
// version 2
console.log(`2nd version where alien color is yellow`);
AlienColor = "yellow";
if (AlienColor === "green") {
    console.log("congratulation, you have just earned 5 points");
}
else if (AlienColor === "yellow") {
    console.log("congratulation, you have just earned 10 points");
}
else if (AlienColor === "red") {
    console.log("congratulation, you have just earned 15 points");
}
else {
    console.log("unknown alien color");
}
;
// version 3
console.log(`3rd version where alien color is red`);
AlienColor = "red";
if (AlienColor === "green") {
    console.log("congratulation, you have just earned 5 points");
}
else if (AlienColor === "yellow") {
    console.log("congratulation, you have just earned 10 points");
}
else if (AlienColor === "red") {
    console.log("congratulation, you have just earned 15 points");
}
else {
    console.log("unknown alien color");
}
;
// Question 28
let personAge = 70;
if (personAge < 2) {
    console.log(`Age is ${personAge}, This person is a baby.`);
}
else if (personAge < 4) {
    console.log(`Age is ${personAge}, This person is a toddler.`);
}
else if (personAge < 13) {
    console.log(`Age is ${personAge}, This person is a kid.`);
}
else if (personAge < 20) {
    console.log(`Age is ${personAge}, This person is a teenager.`);
}
else if (personAge < 65) {
    console.log(`Age is ${personAge}, This person is an adult.`);
}
else {
    console.log(`Age is ${personAge}, This person is an elder.`);
}
;
// Question 29 
const favorit_fruits = ["apple", "strawberry", "banana"];
// check for specific fruits using independent if statements
if (favorit_fruits.includes("apple")) {
    console.log("I rally like apple");
}
;
if (favorit_fruits.includes("strawberry")) {
    console.log("I rally like strawberry");
}
;
if (favorit_fruits.includes("banana")) {
    console.log("I rally like banana");
}
;
if (favorit_fruits.includes("watermelon")) {
    console.log("I enjoy watermelon");
}
;
if (favorit_fruits.includes("mango")) {
    console.log("I like mango");
}
;
// Question 30
// var userNames:string [] = ["admin", "ali", "Razzaq", "Ahmed", "Ramiz"]
// function greetUsers(): void {
//   for (const i in userNames) {
//     if (userNames[i].toLowerCase() === 'admin') {
//       console.log(`Hello admin, would you like to see the status report?`);
//     } else {
//       console.log(`Hello ${userNames[i]}, thank you for logging in again`);
//     }
//   }
// };
// Question 31
let userNames = ["admin", "ali", "Razzaq", "Ahmed", "Ramiz"];
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log('We need to find some users!');
        return;
    }
    for (var username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log(`Hello admin, would you like to see the status report?`);
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again`);
        }
    }
}
;
console.log(`\n\n For non empty username:\n`);
greetUsers(userNames);
userNames = [];
console.log(`\n\n For empty username: \n`);
greetUsers(userNames);
export {};
