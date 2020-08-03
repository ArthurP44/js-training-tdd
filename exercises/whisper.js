'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
const whisper = function(string){
    return `*${string.toLowerCase()}*`;
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper('ARTHUR'), '*arthur*');
assert.strictEqual(whisper('JE CHUCHOTE'), '*je chuchote*');
assert.strictEqual(whisper('HELLO WORLD'), '*hello world*');
assert.strictEqual(whisper('YES MADAM'), '*yes madam*');

// End of tests */
