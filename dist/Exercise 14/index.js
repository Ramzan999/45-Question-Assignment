"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = [
    "sir zia khan",
    "kamran khan tessori",
    "allama iqbal",
    "albert einstein",
    "bill gates"
];
exports.guestList = guestList;
guestList.forEach((guestName) => {
    console.log(`Dear ${guestName}, I would like to invite you to dinner. Your presence will be highly honored for me`);
});
console.log(`\n \n`);
/////////////////////////// Second Method \\\\\\\\\\\\\\\\\\\\\
let guest = ["Nikola Tesla", "Anders Hejlsberg", "James Gosling"];
guest.forEach(guests => {
    console.log(`Hello sir ${guest}, I would like invited you to dinner with me`);
});
