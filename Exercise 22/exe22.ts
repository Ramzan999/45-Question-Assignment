// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// function to create cloths object.
function createCloth(name: string, color: string, size: string) {
    return {
        name: name,
        color: color,
        size: size
    }
};
// create an array of cloths
const cloths = [
    createCloth("shirt", "blue", "M"),
    createCloth("T-shirt", "gray", "L"),
    createCloth("shirt", "green", "s"),
    createCloth("pant", "black", "32"),
    createCloth("pant", "brown", "36")
]
// console.log(cloths);
// Acces an error index
const errorIndex = 10;
console.log(`cloth at index, ${errorIndex}:`, cloths[errorIndex]);

cloths.forEach((cloth) => {
    console.log(`Name: ${cloth.name}, Color: ${cloth.color}, Size: ${cloth.size}`);
});