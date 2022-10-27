"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const getTotal = (product) => {
    let sum = 0;
    product.forEach((product) => {
        sum += product.price;
    });
    return sum;
};
let productArray = [
    {
        name: "product 1",
        price: 30,
    },
    {
        name: "product 2",
        price: 40,
    },
    {
        name: "product 3",
        price: 33,
    },
];
let result = getTotal(productArray);
console.log(result);
