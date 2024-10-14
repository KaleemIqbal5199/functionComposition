# functionComposition
Function composition is method where we combine tow function and  get one output combine of both function.
After that we fine a we funtion and add combine with another funtion which give same method out like 1st function.

I upload a code of text addition where i apply 1.2% text on every product.
const addproductTax = price => price * 1.2;

Now we calculate total price of product and apply tex.

After that i add total tax to actual price of tatal price of product.
const calculateTotalPrice = price => applyproductShipping(addproductTax(price));

Now and call total payable price with include text.

console.log(calculateTotalPrice(100));
