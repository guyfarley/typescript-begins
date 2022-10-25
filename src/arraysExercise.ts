// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
  name: string,
  price: number,
};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

const getTotal = (product: Product[]): number => {
  let sum: number = 0;
  product.forEach((product) => {
    sum += product.price;
  })
  return sum;
}

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
]
let result = getTotal(productArray);
console.log(result);
