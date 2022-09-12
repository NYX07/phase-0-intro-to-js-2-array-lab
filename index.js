// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
    
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

const newArray = [...cats.slice(0), "Broom"];
function appendCat(name) {
    return newArray;
}

const newArr = ["Arnold", ...cats.slice(0)];
function prependCat(name) {
    return newArr;
}

const newAr = [...cats.slice(0, -1)];
function removeLastCat() {
    return newAr;
}

const newA = [...cats.slice(1)];
function removeFirstCat() {
    return newA;
}