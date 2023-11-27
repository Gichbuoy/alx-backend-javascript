## ES6
- ECMAScript 6, also known as ES6 or ECMAScript 2015, is the sixth edition of the ECMAScript standard, which is the basis for JavaScript. ES6 was a major update to the language, introducing new syntax, features, and improvements to make JavaScript more expressive and powerful.


**Features**
Some key features introduced in ES6:
- let and const: Block-scoped variable declarations.

- Arrow Functions: A concise syntax for writing function expressions.

- Classes: A more convenient syntax for creating constructor functions and dealing with inheritance.

- Template literals: Enhanced string interpolation.

- Destructuring assignment: Extracting values from arrays or objects and assigning them to variables.

- Default parameters: Providing default values for function parameters.

- Rest and spread operators: Collecting or spreading elements in arrays or objects.

## Block-scoped variables:
ES6 introduced block-scoped variables using let and const. Unlike var, which is function-scoped, let and const are scoped to the nearest enclosing block.
```
if (true) {
    let blockScoped = 5;
    const constantValue = 10;
}

console.log(blockScoped); // Error: blockScoped is not defined
console.log(constantValue); // Error: constantValue is not defined
```

## Arrow functions and function parameters defaulting to them:
Arrow functions provide a concise syntax for writing function expressions. They also capture the value of this from the surrounding context. Default parameter values can be set using the following syntax:
```
// Arrow function
const add = (a, b = 0) => a + b;

console.log(add(5)); // Outputs: 5 (b defaults to 0)
```

##  Rest and spread function parameters:
Rest parameter (...): Collects function arguments into an array.
```
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Outputs: 10
```

Spread operator (`...`): Spreads array elements or object properties.
```
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Spread operator for arrays
console.log(arr2); // Outputs: [1, 2, 3, 4, 5]
```

##  Iterables and Iterators:
- Iterables: Objects that implement the iterable protocol, meaning they define a method (Symbol.iterator) that returns an iterator.

- Iterators: Objects that implement the iterator protocol, having a next() method that returns the next value in a sequence along with information about whether the sequence has ended.
```
let iterable = [1, 2, 3];

// Getting an iterator from the iterable
let iterator = iterable[Symbol.iterator]();

// Using the iterator to loop through the values
console.log(iterator.next()); // Outputs: { value: 1, done: false }
console.log(iterator.next()); // Outputs: { value: 2, done: false }
console.log(iterator.next()); // Outputs: { value: 3, done: false }
console.log(iterator.next()); // Outputs: { value: undefined, done: true }
```
