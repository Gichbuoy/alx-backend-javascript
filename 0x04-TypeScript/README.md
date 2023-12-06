# TypeScript
TypeScript is an open-source programming language developed by Microsoft. It is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript adds static typing and additional features to JavaScript, making it more scalable and maintainable for large and complex applications.

## Basic Types in TypeScript:
TypeScript includes basic types similar to JavaScript, such as boolean, number, string, array, tuple, and enum. These types help provide static type checking during development.

1. Boolean
```
let isDone: boolean = false;
```

2. Number:
```
let decimal: number = 6;
```

3. String
```
let color: string = "blue";
```

4. Array
```
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Doe"];
```

5. Tuple
```
let tuple: [string, number] = ["hello", 10];
```

6. Enum
```
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```


## Interfaces:
An interface in TypeScript is a way to define a contract for objects. It specifies the properties and methods that an object must have. Classes can then implement these interfaces to ensure they adhere to the specified structure.
```
interface Person {
  firstName: string;
  lastName: string;
}
```

## Classes:
Classes in TypeScript allow you to create object-oriented structures with constructors, properties, and methods. They support features like inheritance, encapsulation, and abstraction.
```
class Student implements Person {
  constructor(public firstName: string, public lastName: string) {}
}
```

## Functions:
Functions in TypeScript can have explicit parameter and return types. You can also use optional parameters and default values. Function types can be defined to specify the expected signature of a function.
```
function greet(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}!`;
}
```

## Working with the DOM and TypeScript:
TypeScript can be used to manipulate the Document Object Model (DOM) in web development. You can access and modify HTML elements using TypeScript, providing type safety and autocompletion.
```
// Assuming you have an HTML element with id="myElement"
let element = document.getElementById("myElement");
if (element instanceof HTMLInputElement) {
  element.value = "Hello, TypeScript!";
}
```

## Generic Types:
Generics in TypeScript allow you to write functions and classes that work with different data types while maintaining type safety. They provide a way to create reusable, type-safe code by allowing the specification of types as parameters.
```
function identity<T>(arg: T): T {
  return arg;
}
let result: number = identity<number>(42);
```

## Namespaces:
Namespaces in TypeScript help organize code by encapsulating related functionalities. They prevent naming conflicts and allow you to structure your code in a more modular way.
```
// Namespace
namespace MyNamespace {
  export const x: number = 42;
}

// Merging Declarations
interface Car {
  brand: string;
}
interface Car {
  model: string;
}
const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
};
```


## Merging Declarations:
TypeScript allows multiple declarations for the same entity (interface, class, etc.) to be combined. This is useful when working with code that might be defined in different parts of your application or in external libraries.


## Ambient Namespace to Import an External Library:
When working with external JavaScript libraries, TypeScript lets you declare their structure using ambient namespaces. This allows you to use the library in your TypeScript code while providing type information.
```
// External Library Definition (e.g., jQuery)
declare namespace jQuery {
  function ajax(url: string, settings?: any): void;
}

// Using Ambient Namespace
jQuery.ajax("/api/data", { method: "GET" });
```

## Basic Nominal Typing with TypeScript:
Nominal typing is a way to distinguish between types based on their names or declarations rather than their structure. While TypeScript primarily uses structural typing, you can emulate nominal typing by using private fields or other techniques to create unique identities for types.
```
// Basic Nominal Typing
class NominalString {
  private nominalStringBrand: string;
  constructor(value: string) {
    this.nominalStringBrand = value;
  }
  getValue(): string {
    return this.nominalStringBrand;
  }
}

let a: NominalString = new NominalString("Hello");
let b: NominalString = new NominalString("Hello");

// This will result in a compile-time error
// since nominal types have different identities
let result: boolean = a === b; 
```
