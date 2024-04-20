// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ["Jack", "Alic", "Maike"];

function make_great(magicians: string[]): string [] {
    let greatMagician:any = [];
    magicians.forEach((magician) => {
        greatMagician.push(`${magician}, the great`)
    })
    return greatMagician;
}

function show_magicians(magicians: string[]) {
    magicians.forEach((magician) => {
        console.log(magician);
    })
}

let greatMagician = make_great(magicians.slice());
console.log("Original Magician");
show_magicians(magicians);
console.log("Great Magician");
show_magicians(greatMagician);









export{}