"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
var guestList = [
    "sir zia khan",
    "kamran khan tessori",
    "allama iqbal",
    "albert einstein",
    "bill gates"
];
exports.guestList = guestList;
guestList.forEach(function (guestName) {
    console.log("Dear ".concat(guestName, ", I would like to invite you to dinner. Your presence will be highly honored for me"));
});
console.log("\n \n");
/////////////////////////// Second Method \\\\\\\\\\\\\\\\\\\\\
var guest = ["Nikola Tesla", "Anders Hejlsberg", "James Gosling"];
guest.forEach(function (guests) {
    console.log("Hello sir ".concat(guest, ", I would like invited you to dinner with me"));
});
