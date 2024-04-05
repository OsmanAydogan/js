// type conv = change the datatype of a value to another (strings, numbers, booleans)


let age = window.prompt("How old are you?: ")
// Burada age değişkeni string tipindedir.
age = Number(age);
age += 1;
console.log(age, typeof(age));  // type = number(int)

// sırayle pizza yerine, 0 ve tanımsız yani x; gibi şeyler koyup denersin.
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(y);

console.log(x, typeof(x))
console.log(y, typeof(y))
console.log(z, typeof(z))




/* 

CONSTANTS tanımlanışı: const PI = 3,14;

PI = 312; dersek bir daha hata verir type hatası.

*/  



