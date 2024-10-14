const addproductTax = price => price * 1.2;

const applyproductShipping = price => price + 5;


const calculateTotalPrice = price => applyproductShipping(addproductTax(price));

console.log(calculateTotalPrice(100));
