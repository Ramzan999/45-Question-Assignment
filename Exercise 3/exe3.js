// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var myName = "Ramzan saleh mandra";
var lowerCaseName = myName.toLowerCase();
console.log(lowerCaseName);
var uppercaseName = myName.toUpperCase();
console.log(uppercaseName);
var words = myName.split(" ");
var titleCaseName = "";
for (var i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLocaleLowerCase() + " ";
}
console.log(titleCaseName);
