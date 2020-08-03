'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
const jadencase = function(string){
    return string.toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof jadencase, 'function');
assert.strictEqual(jadencase('Hello stranger, what are you buying ?'), 'Hello Stranger, What Are You Buying ?');
assert.strictEqual(jadencase('got some rare things on sale stranger !'), 'Got Some Rare Things On Sale Stranger !');


// End of tests */
