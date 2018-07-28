'use strict';

const range = require('.');
const assert = require('assert');

describe('check range', () => {
  it('range(1, 10) should produce [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    assert.deepEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('range(1, 10) should be the same as range(1, 10, 1)', () => {
    assert.deepEqual(range(1, 10), range(1, 10, 1));
  });

  it('range(1, 10, 2) should return [1, 3, 5, 7, 9]', () => {
    assert.deepEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
  });

  it('range(1, 1) should return [1]', () => {
    assert.deepEqual(range(1, 1), [1]);
  });

  it('range(5, 2, -1) produces [5, 4, 3, 2]', () => {
    assert.deepEqual(range(5, 2, -1), [5, 4, 3, 2]);
  });

  it('if start < end then step should be -1 even if not provided: range(3, -3)', () => {
    assert.deepEqual(range(3, -3), [3, 2, 1, 0, -1, -2, -3]);
  });
});
