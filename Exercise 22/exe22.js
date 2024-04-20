// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// function to create cloths object.
function createCloth(name, color, size) {
    return {
        name: name,
        color: color,
        size: size
    };
}
;
// create an array of cloths
var cloths = [
    createCloth("shirt", "blue", "M"),
    createCloth("T-shirt", "gray", "L"),
    createCloth("shirt", "green", "s"),
    createCloth("pant", "black", "32"),
    createCloth("pant", "brown", "36")
];
// console.log(cloths);
// Acces an error index
var errorIndex = 10;
console.log("cloth at index, ".concat(errorIndex, ":"), cloths[errorIndex]);
cloths.forEach(function (cloth) {
    console.log("Name: ".concat(cloth.name, ", Color: ").concat(cloth.color, ", Size: ").concat(cloth.size));
});
