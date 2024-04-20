"use strict";
// Question 32
Object.defineProperty(exports, "__esModule", { value: true });
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
const current_users = ["Ali", "Kamran", "Noman", "Atteq", "shazad", "Osama"];
const new_users = ["Ali", "Ramzan", "noman", "Qasim", "shazad", "Adeel"];
// Step 2 function
function checkUserNames(current_users, new_users) {
    // 1st step of function
    const lowercasedCurrentUser = current_users.map(user => user.toLowerCase());
    // 2nd step of function 
    for (const newUser of new_users) {
        const lowercasedNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUser.includes(lowercasedNewUser)) {
            console.log(`Usernamem "${newUser}" is already taken. Please enter a new username.`);
        }
        else {
            console.log(`Username "${newUser}" is available.`);
        }
    }
}
;
// Test the function
checkUserNames(current_users, new_users);
