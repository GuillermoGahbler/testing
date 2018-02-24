var test = require ('./test');

test.assert(6, add(2,4), "2 + 4 === 6")

function add(a,b) {
    return a + b
}