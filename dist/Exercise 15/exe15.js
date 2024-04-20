// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestList = [
    "sir zia khan",
    "kamran khan tessori",
    "allama iqbal",
    "albert einstein",
    "bill gates"
];
let guestCantMakeIt = "allama iqbal";
console.log(`${guestCantMakeIt}, can't Make it to dinner tonight`);
let newGuest = "elon musk";
let indexOfguestCantMakeIt = guestList.indexOf(guestCantMakeIt);
if (indexOfguestCantMakeIt !== -1) {
    guestList[indexOfguestCantMakeIt] = newGuest;
}
// console.log(newGuest)
console.log("Second set of invitation");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, I would like to invite you to dinner. Your presence will be highly honored for me`);
});
export {};
