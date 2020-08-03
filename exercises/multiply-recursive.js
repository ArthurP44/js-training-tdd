'use strict';

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code:
let result = 0;
let isNeg = null;
let oncep = true;

const multiply = function(numb1, numb2){
    if(oncep){
        isNeg = numb1 < 0 && numb2 < 0 ? false 
        : numb1 > 0 && numb2 < 0 ? true 
        : numb1 < 0 && numb2 > 0 ? true
        : false  
        oncep = false;
    }
    
    let a = numb1;
    let b = numb2;

    if(numb1 < 0){
        a = -a;
    }

    if(numb2 < 0){
        b = -b;
    }
    
    if(numb1 === 0){
      const finalResult = result;
      const isNegp = isNeg;

      result = 0;
      oncep = true;
      isNeg = null;

      return isNegp ? -finalResult : finalResult
    }
    
    result += b;
    return multiply(a-1, b)
}


//* Begin of tests
const assert = require('assert');
const { once } = require('process');

assert.strictEqual(typeof multiply, 'function');
assert.strictEqual(multiply.length, 2);
assert.strictEqual(multiply.toString().includes('Math.imul'), false);
assert.strictEqual(multiply.toString().includes('while'), false);
assert.strictEqual(multiply.toString().includes('for'), false);
assert.strictEqual(multiply.toString().includes('*'), false);
assert.strictEqual(multiply.toString().includes('/'), false);
assert.strictEqual(multiply(34, 78), 2652);
assert.strictEqual(multiply(123, 0), 0);
assert.strictEqual(multiply(0, -230), 0);
assert.strictEqual(multiply(0, 0), 0);
assert.strictEqual(multiply(123, -22), -2706);
assert.strictEqual(multiply(-22, 123), -2706);
assert.strictEqual(multiply(-22, -123), 2706);
// End of tests */
