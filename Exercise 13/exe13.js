// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteTransport = ["Bicycle", "Honda Motorcycle", "Audi E5 Car", "BMW Car"];
favoriteTransport.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
console.log("\n \n");
////////////////////////////// Second Method \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var owntransport = [];
owntransport.push(["Bicycle", "Sorab"]);
owntransport.push(["Motorcycle", "Honda"]);
owntransport.push(["Car", "Audi"]);
owntransport.forEach(function (_a) {
    var transport = _a[0], brand = _a[1];
    console.log("I would like to own a ".concat(brand, ", ").concat(transport, "."));
});
