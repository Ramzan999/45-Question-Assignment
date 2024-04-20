// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let travelDestination = ["Tokyo", "Istanbul", "Madina", "Makka", "New York", "Denmark",];
// Step 1: Print your array it's original condition.
console.log("Original Order:");
console.log(travelDestination);
// Step 2: Print your array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical Order without modification the actual list.");
console.log([...travelDestination].sort());
// Step 3: Show that your array is still in its original order by printing it.
console.log("\nShowing array is still in original order.");
console.log(travelDestination);
// Step 4: Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse alphabetical order without nodifing the actual list.");
console.log([...travelDestination].sort().reverse());
// Step 5: Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in original order.");
console.log(travelDestination);
// Step 6: Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse Order");
travelDestination.reverse();
console.log(travelDestination);
// Step 7: Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nBack to Original Order");
travelDestination.reverse();
console.log(travelDestination);
// Step 8: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nChange to Alphabetical Order");
travelDestination.sort();
console.log(travelDestination);
// Step 9: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nChange to Reverse Alphabetical Order");
travelDestination.sort().reverse();
console.log(travelDestination);
export {};
