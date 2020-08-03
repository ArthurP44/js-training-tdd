'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = function(string){
    return string.substring(0, 2);
}

const keepLast = function(string){
    return string.slice(-2);
}

const keepFirstLast = function(string){
    return string.substring(3, 5);
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(keepFirst('alphabet'), 'al');

assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(keepLast('alphabet'), 'et');

assert.strictEqual(typeof keepFirstLast, 'function');
assert.strictEqual(keepFirstLast('alphabet'), 'ha');



// End of tests */
