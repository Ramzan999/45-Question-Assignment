let guestList:Array <string> = [
    "sir zia khan",
    "kamran khan tessori",
    "allama iqbal",
    "albert einstein",
    "bill gates"
]
guestList.forEach((guestName) => {
    console.log(`Dear ${guestName}, I would like to invite you to dinner. Your presence will be highly honored for me`)
});


console.log(`\n \n`);

/////////////////////////// Second Method \\\\\\\\\\\\\\\\\\\\\

let guest: string[] = ["Nikola Tesla", "Anders Hejlsberg", "James Gosling"]

guest.forEach(guests => {
    console.log(`Hello sir ${guest}, I would like invited you to dinner with me`);
});




export {guestList};