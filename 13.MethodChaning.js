// Method chaining 


// ----- NO METHOD CHAINING -----

// let username = window.prompt("Enter ur username: ")

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let otherCase = username.slice(1);
// otherCase = otherCase.toLocaleLowerCase();

// let name = letter + otherCase;

// console.log(name);



// ----- METHOD CHAINING -----

let username = window.prompt("Enter ur username: ")


username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);