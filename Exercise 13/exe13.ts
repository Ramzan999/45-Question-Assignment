// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoriteTransport: string[] = ["Bicycle", "Honda Motorcycle", "Audi E5 Car", "BMW Car"];

favoriteTransport.forEach(transport => {
    console.log(`I would like to own a ${transport}.`)
});



console.log(`\n \n`);

////////////////////////////// Second Method \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let owntransport:Array<[transport:string, brand:string]> = [];

owntransport.push(["Bicycle","Sorab"]);
owntransport.push(["Motorcycle","Honda"]);
owntransport.push(["Car","Audi"]);

owntransport.forEach(([transport, brand]) => {
    console.log(`I would like to own a ${brand}, ${transport}.`)
});

