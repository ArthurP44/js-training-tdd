'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
const yell = function(string){
    return string.toUpperCase();
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell('arthur'), 'ARTHUR');
assert.strictEqual(yell('bonjour je suis un test'), 'BONJOUR JE SUIS UN TEST');
assert.strictEqual(yell('hello world'), 'HELLO WORLD');
assert.strictEqual(yell('yes madam'), 'YES MADAM');


// End of tests */
