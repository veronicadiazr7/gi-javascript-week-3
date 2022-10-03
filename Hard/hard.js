/*       DATA SECURITY EXERCISE 

Inside of a closure, create an object called pii (Personally Identifiable Information) '
that cannot be accessed directly. The object should have at least two properties: name and ssn.
Only the name property should be accessible, and it should be called through a public function.
The ssn property should not be accessible at all.
Creating private objects and private properties helps you control who has access to what data and helps 
you prevent people who shouldn't see important info like social security numbers from getting access to the data.
You can use 'getName' or other get methods to access data that people might need. 
For example, people addressing a package or email may need a customer's name, but they definitely 
shouldn't have access to their ssn. */

const pii = (function () {
  const _ssn = 123456789; // "_" makes  variable private
  return {
    name: "John Doe",
    get ssn() {
      return _ssn;
    },
    set ssn(_value) {
      _ssn = _value;
    },
  };
})(); // why empty parenthesis at the end

for (const security in pii) {
  console.log(security);
}

console.log(pii.name); //Prints "John Doe""
console.log(pii.ssn); //Prints "123456789"

pii.ssn = alert("You don't have access to this information"); //changed value of private variable so it is not directly accessible
console.log(pii.ssn);
console.log(_ssn, pii.ssn); // Undefined
