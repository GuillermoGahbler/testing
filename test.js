// var whtevs = "a"
// console.log(whtevs === "b")

module.exports = {
    assert: function(expected, actual, message = "Test"){
        if (expected === actual) {
            console.log('thumbs up it worked ' + message)
        } else {
            diff = expected + "\n " + actual;
            console.log('it did not work' + message + "\n   Assertion failed no match\n  " + diff);
        }
    },
    assert_true:function(actual, message) {
        this.assert(true, actual, message)

    },
    assert_false: function (actual, message) {
        this.assert(false, actual, message)
        
    }

};
