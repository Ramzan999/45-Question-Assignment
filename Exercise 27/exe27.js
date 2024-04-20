// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_color = "green";
// Green alien version
console.log("1st version where alien color green");
if (alien_color === "green") {
    console.log("You earned 5 points!");
}
else if (alien_color === "yellow") {
    console.log("You earned 10 points!");
}
else if (alien_color === "red") {
    console.log("You earned 15 points!");
}
else {
    console.log("unknown alien color");
}
alien_color = "yellow";
// Yellow alien version
console.log("\n2nd version where alien color yellow");
if (alien_color === "green") {
    console.log("You earned 5 points!");
}
else if (alien_color === "yellow") {
    console.log("You earned 10 points!");
}
else if (alien_color === "red") {
    console.log("You earned 15 points!");
}
else {
    console.log("unknown alien color");
}
alien_color = "red";
// Red alien version
console.log("\n3rd version where alien color red");
if (alien_color === "green") {
    console.log("You earned 5 points!");
}
else if (alien_color === "yellow") {
    console.log("You earned 10 points!");
}
else if (alien_color === "red") {
    console.log("You earned 15 points!");
}
else {
    console.log("unknown alien color");
}
