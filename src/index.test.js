const test = require('node:test');
const assert = require('node:assert');
const { add, greet } = require('./index');

test('add() should add two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('greet() should return a greeting', () => {
  assert.strictEqual(greet('GitHub'), 'Hello, GitHub!');
});
