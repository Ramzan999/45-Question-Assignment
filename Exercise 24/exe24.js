// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// step 1:
var str1 = "hello";
var str2 = "world";
console.log(str1 === str2); //False
console.log(str1 !== str2); //True
// step 2:
var text1 = "TYPESCRIPT";
var text2 = "typescript";
console.log(text1.toLowerCase() === text2); // True
// step 3:
var num1 = 10;
var num2 = 5;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False
// step 4:
var x = 5;
var y = 10;
var z = 15;
console.log(x < y && y < z); // True both condition are true
console.log(x < y || y > z); // True at least one condition is true
console.log(x < y && y > z); // False both condition are false
console.log(x > y || y > z); // False both condition are false
// step 5:
var fruits = ["apple", "orange", "mango"];
console.log(fruits.includes("mango")); // True
console.log(fruits.includes("banana")); // False
// step 6:
var colors = ["red", "green", "blue"];
console.log(!colors.includes("white")); // True
console.log(!colors.includes("blue")); // False
