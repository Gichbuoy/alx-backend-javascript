## Unittsts in JS
- These concepts collectively help you write effective and comprehensive tests for your JavaScript code, ensuring its reliability and correctness.

## 1. Mocha Test Suite:
Mocha is a feature-rich JavaScript test framework. 
-# It uses a BDD (Behavior-Driven Development) style to structure tests. A test suite is created using the describe function, and individual tests are created using the it function.
- To create a test suite, follow these steps:
```
// test-suite.js
const assert = require('chai').assert;

describe('My Test Suite', () => {
  // Test case 1
  it('should do something', () => {
    assert.equal(1 + 1, 2);
  });

  // Test case 2
  it('should handle async code', (done) => {
    setTimeout(() => {
      assert.isTrue(true);
      done();
    }, 1000);
  });
});
```

### 2. Assertion Libraries (Node and Chai):
Chai is an assertion library that provides different styles for making assertions. Commonly used styles are `assert`, `expect`, and `should`. It allows you to write human-readable assertions.

- Chai is a popular assertion library. Install it using npm:

```
npm install chai
```

- Use it in your tests
```
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
```

### 3.Presenting Long Test Suites:
For long test suites, you can use Mocha's reporters to display results in a more readable format. You can specify a reporter using the `-R` or `--reporter` option:

```
mocha test-folder --reporter spec
```

### 4.Spies
- Spies are used to track function calls. 
- Often used with libraries like Sinon, **Spies** are functions that record information about function calls, such as how many times a function was called and with what arguments.
Example using Sinon:

```
const sinon = require('sinon');

const spy = sinon.spy();
spy('hello');
assert(spy.calledOnce);
```

###  5.Stubs:
Stubs replace functions with predefined behavior.

- They allow you to control the behavior of a function and track its usage. Example using Sinon:

```
const sinon = require('sinon');

const stub = sinon.stub().returns(42);
console.log(stub()); // 42
```

### 6. Hooks:
Hooks in Mocha allow you to run setup and teardown code. Common hooks are `before`, `beforeEach`, `after`, and `afterEach`. 
- They are useful for tasks like setting up test data before tests or cleaning up resources afterward. Example:

```
before(() => {
  // runs once before all tests
});

afterEach(() => {
  // runs after each test
});
```

### 7. Unit Testing with Async Functions:
For testing asynchronous code, use Mocha's `done` callback or return a Promise.
- This ensures that the test waits for asynchronous operations to complete before making assertions.
- Eg:

```
it('should handle async code', (done) => {
  setTimeout(() => {
    assert.isTrue(true);
    done();
  }, 1000);
});

// or

it('should handle async code', async () => {
  await someAsyncFunction();
  assert.isTrue(true);
});
```

##  Integration Tests with a Small Node Server:
**Integration tests** involve testing the interaction of different components or systems.
- `supertest` is a library often used with Mocha to test HTTP endpoints by making requests and checking the responses.

- Use a testing library like `supertest` for integration tests:

```
const request = require('supertest');
const app = require('../app'); // your server file

describe('Integration Tests', () => {
  it('should return 200 status', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
```
