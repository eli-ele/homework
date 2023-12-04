//homework 1

const productsFeatures = {
    name: 'Product X',
    description: 'A high-quality product with many features.',
    price: 100
};
const productProperties = {
    color: 'red',
    size: 'medium',
    weight: 5
};
const both = {...productsFeatures, ...productProperties};
console.log(both);


//homework 2

const products = [
    {
        name: "Product X",
        description: "A high-quality product with many features.",
        price: 100
    },
    {
        name: "Product Y",
        description: "Another great product with a competitive price.",
        price: 75
    },
    {
        name: "Product Z",
        description: "A basic product that gets the job done.",
        price: 50
    } 
];
const productprices = products.map(product => product. price);
const total = productprices.reduce((sum, price) => sum + price, 0);
console.log(total);


//homework 3
const technic = [
    { names: "laptop", price: 1299 },
    { names: "phone", price: 499 },
    { names: "tablet", price: 299 },
    { names: "watch", price: 199 },
    { names: "headphones", price: 99 },
];

const greaterThan240 = [];
const x= technic.filter(technic => technic.price > 240 );
console.log(x);


//homework 4 
const numbers = [33,10,99,95];
const double =numbers.map((Number, index, arr) =>Number *3 );
console.log(double);







