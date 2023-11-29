## Promises
Promises in JavaScript are a way to handle asynchronous operations. They represent a value that might be available now, or in the future, or never. 
- Promises have three states: 
	* pending,
	* fulfilled,
	* rejected

- You can create a promise using the Promise constructor. It takes a function with two arguments, resolve and reject.
```
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation, e.g., fetching data
  // If successful, call resolve with the result
  // If an error occurs, call reject with the error
});
```

- The `then` method is used to handle the fulfilled state of a promise:

```
myPromise.then(result => {
  // Handle the fulfilled state
}).catch(error => {
  // Handle the rejected state
});
```

- The **`resolve`** method is used to fulfill a promise with a value:

```
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (/* operation successful */) {
    resolve('Success!');
  } else {
    reject('Error!');
  }
});
```

- The `catch` method is used to handle promise rejections:
```
myPromise.catch(error => {
  // Handle the rejected state
});
```

## The await Operator and Async Functions:

- The `await` operator is used within an async function to wait for a Promise to resolve. 
- Eg:
```
async function myAsyncFunction() {
  try {
    const result = await myPromise;
    console.log(result); // Output: Success!
  } catch (error) {
    console.error(error);
  }
}

myAsyncFunction();
```


