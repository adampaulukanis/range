'use strict';

const range = require('.');
const assert = require('assert');

describe('testing range module:', ()=>{
  it('range(1, 10) = [1,2,3,4,5,6,7,8,9,10]', ()=>{
    assert.deepEqual(range(1, 10), [1,2,3,4,5,6,7,8,9,10]);
  });

  it('range(1, -3) will return null', ()=>{
    assert.strictEqual(range(1, -3), null);
  });
});
