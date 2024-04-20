// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var myName: string = "Ramzan saleh mandra";

let lowerCaseName: string = myName.toLowerCase();
console.log(lowerCaseName);

let uppercaseName: string = myName.toUpperCase();
console.log(uppercaseName);

let words: string[] = myName.split(" ");

let titleCaseName: string = "";

for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLocaleLowerCase() + " ";
}

console.log(titleCaseName);
