'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:

const cutFirst = function(string){
    return string.substring(2);
}

const cutLast = function(string){
    return string.substring(0, string.length - 2);
}

const cutFirstLast = function(string){
    let result = string.substring(2);
    result = result.substring(0, result.length - 2);
    return result;
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(cutFirst('arthur'), 'thur');
assert.strictEqual(cutLast('arthur'), 'arth');
assert.strictEqual(cutFirstLast('arthur'), 'th');


// End of tests */
