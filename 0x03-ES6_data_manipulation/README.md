## ES6 Data Manipulation

### Array
- An array is a built-in data structure in JavaScript used to store a collection of elements. It is ordered and can hold various types of data, including numbers, strings, objects, and other arrays.

- ES6 introduced some additional methods for manipulating arrays, such as map(), filter(), reduce(), and the spread/rest operators (... and ...rest), making it easier to work with and manipulate arrays.
```
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
// doubledNumbers is now [2, 4, 6, 8, 10]
```


### Typed Array:

Typed Arrays are a new kind of array-like objects introduced in ES6 that provide a way to work with binary data in a structured manner. They are designed to be more efficient for handling raw binary data and are particularly useful for tasks such as working with WebGL or processing network data.
- Unlike regular arrays, Typed Arrays have a fixed length and each element has a specific numeric data type, like Int8Array, Uint8Array, Float32Array, etc.
```
const buffer = new ArrayBuffer(16);
const int8Array = new Int8Array(buffer);
int8Array[0] = 42;
// int8Array now represents the binary data [42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

### Set Data Structure:

The Set is a new data structure introduced in ES6 that allows you to store unique values of any type, whether primitive values or object references. Sets do not allow duplicate entries, and they provide methods for adding, deleting, and checking the existence of elements.
- Sets are iterable, and they provide methods like add(), delete(), has(), and clear().
```
const uniqueNumbers = new Set([1, 2, 3, 3, 4, 5, 5]);
// uniqueNumbers is now {1, 2, 3, 4, 5}
```

### Map Data Structure:

The Map is another data structure introduced in ES6 that allows you to store key-value pairs, where both the keys and values can be of any data type. Unlike objects, Map keys can be of any type, and the order of elements in a Map is maintained.
- Maps provide methods like set(), get(), delete(), has(), and clear().

```
const userMap = new Map();
userMap.set('name', 'John');
userMap.set('age', 30);
// userMap now contains {'name' => 'John', 'age' => 30}
```

### WeakMap:

WeakMap is a variation of Map introduced in ES6. It is similar to a Map but has a few key differences:
- Keys in a WeakMap must be objects (primitive values are not allowed).
- Entries in a WeakMap are weakly held, meaning they do not prevent the garbage collector from removing them if there are no other references to the key object.
- WeakMaps do not have methods for clear iteration or enumeration of their keys.

```
const weakMap = new WeakMap();
const keyObject = {};
weakMap.set(keyObject, 'Some value');
// The entry in the WeakMap is weakly held and may be garbage collected if keyObject is not used elsewhere
```

# Map, Filter, and Reduce on Arrays:

### 1. Map:
The map() function is used to transform each element of an array and create a new array with the results.
```
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
// doubledNumbers is now [2, 4, 6, 8, 10]
```

### 2. Filter:
The filter() function is used to create a new array containing only the elements that satisfy a certain condition.
```
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// evenNumbers is now [2, 4]
```

### 3. Reduce:
The reduce() function is used to accumulate the elements of an array into a single value, often by applying a function that combines the elements.

```
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// sum is now 15
```


## Typed Arrays:
Typed Arrays are used to work with binary data in a structured manner. They are especially useful for tasks like WebGL or processing network data.
```
// Creating a Typed Array and manipulating binary data
const buffer = new ArrayBuffer(16);
const int8Array = new Int8Array(buffer);

int8Array[0] = 42;
// int8Array now represents the binary data [42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```
