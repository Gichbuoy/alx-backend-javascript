## ES6 Classes
- ES6 introduced a more convenient syntax for creating classes in JavaScript, making object-oriented programming more structured.

### How to Define a Class:
You can define a class using the class keyword:
```
class MyClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  // Class methods go here
}
```

### How to Add Methods to a Class:
Methods are added inside the class definition, similar to how you would define methods in an object literal:
```
class MyClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  myMethod() {
    // Method logic
  }
}
```

### Why and How to Add a Static Method to a Class:
Static methods are called on the class itself rather than on instances of the class. They are useful for utility functions that are related to the class but don't depend on instance-specific data.
```
class MyClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  static myStaticMethod() {
    // Static method logic
  }
}

// Calling a static method
MyClass.myStaticMethod();
```

### How to Extend a Class from Another:
Inheritance in classes is achieved using the `extends` keyword. The subclass inherits properties and methods from the superclass.
```
class Parent {
  // Parent class definition
}

class Child extends Parent {
  // Child class definition
}
```

### Metaprogramming and Symbols:
Metaprogramming involves writing code that manipulates the structure or behavior of the program itself. Symbols are often used in metaprogramming to create unique property keys for objects.
```
const mySymbol = Symbol('description');

const obj = {
  [mySymbol]: 'This is a symbol property'
};
```

- Symbols are unique, making them useful for creating "private" properties or for metaprogramming scenarios where you want to avoid naming collisions.

```
const mySymbol = Symbol('description');

class MyClass {
  constructor() {
    this[mySymbol] = 'Private property';
  }

  getPrivateProperty() {
    return this[mySymbol];
  }
}
```

- Metaprogramming techniques, including the use of symbols, allow for more dynamic and flexible code but should be used judiciously as they can make code harder to understand and maintain.
