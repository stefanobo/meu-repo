const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = arr => {
    let newArr = [];

    for (key in arr) {
        newArr.push(arr[key].length);
    }
    return newArr;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);