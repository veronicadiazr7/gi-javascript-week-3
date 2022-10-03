/* Write a function that would allow you to do this:
var sharePizza = cutPizzaSlices(8);
 console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza" 
console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"
*/

function cutPizzaSlices(a) {
  return a;
}

function sharePizza(b) {
  var pizzaQuantity = cutPizzaSlices(8);
  return (
    "Each person gets " + Math.round(pizzaQuantity / b) + " slices of pizza" //Using Math.round to return the total rounded to the nearest integer value.
  );
}

console.log(sharePizza(2));
// prints "Each person gets 4 slices of pizza"

console.log(sharePizza(3));
// prints "Each person gets 3 slices of pizza"
