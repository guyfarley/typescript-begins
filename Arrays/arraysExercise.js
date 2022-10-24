// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [[]];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (product) {
    var sum = 0;
    product.forEach(function (product) {
        sum += product.price;
    });
    return sum;
};
var productArray = [
    {
        name: "product 1",
        price: 30
    },
    {
        name: "product 2",
        price: 40
    },
    {
        name: "product 3",
        price: 33
    },
];
var result = getTotal(productArray);
console.log(result);
