let a = "  bilal  ";
let b = "Elzero weB";
console.log(typeof b.length === "number");

console.log(
  b[0].toLowerCase() +
    b.slice(1, b.length - 1).toUpperCase() +
    b.charAt(b.length - 1).toLowerCase()
);
let array = ["Ahmad", "Mzero", "Elhame", "Osama", "Gmial", "Omeer"];
array.pop();
array.pop();
array.reverse();
console.log((
  array.slice(array.indexOf("Elhame"), 3)[0].slice(0, 2) +
    array.slice(array.indexOf("Elhame"), 3)[1].slice(1)).slice(4,6)
);
// console.log([...Array.from(array).keys()]);
