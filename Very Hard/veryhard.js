/*               VERY HARD EXERCISE: 

//////////////Object prototype chain and prototypal inheritance exercise.//////////////////
//PART I
1. Create a Person constructor that has three properties: name, job, and age.  ---------
2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".

//PART II
4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and 
a busy property that is NOT passed in and is set to true by default.
5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. 
Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and 
another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would 
love to take on a new responsibility." if the programmer is not busy.
7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages
 the programmer knows.
8. Test it out - can you create different programmers and run all the methods on them? Does each programmer
 maintain their own properties properly and independently of the other programmers?

Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to incorporate the syntax.
function Person(name, job, age) { }
function Programmer(name, job, age, languages) { }
*/

var Person = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.exercise = function () {
    console.log(`${this.name} is struggling with JavaScript`);
  };
  this.fetchJob = function () {
    console.log(`${this.name} is a  ${this.job}`);
  };
};

var person1 = new Person("Veronica Diaz", 23, "Senior Software Engineer");

// person1.exercise();
// console.log(person1); //PRINTS "Veronica Diaz is struggling with JavaScript"

// person1.fetchJob();
// console.log(person1); //PRINTS "Veronica Diaz is a Senior Software Engineer"

var Programmer = function (name, age, job, language) {
  Person.call(this, name, job, age);
  this.language = language;
  this.busy = true;
  this.completeTask = function () {
    this.busy = false;
  };
  this.acceptNewTask = function () {
    this.busy = true;
  };
  this.learnLanguage = function (language) {
    this.language.push("Python");
  };
  this.listLanguage = function () {
    console.log(this.language);
  };
};
Programmer.prototype.offerNewTask = function () {
  if (this.busy === true) {
    console.log(`${this.name} can't accept any new tasks right now.`);
  } else if (this.busy === false) {
    console.log(`${this.name} would love to take on a new responsibility.`);
  }
};

var person2 = new Programmer("Peter Parker", 23, "HTML, CSS , JavaScript");
console.log(person2.offerNewTask()); // PRINTS "Peter Parker can't accept any new tasks right now.undefined"
