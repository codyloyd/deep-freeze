var test = require('tap').test;
var deepFreeze = require('../');

test('deep freeze', function (t) {
    t.plan(2);
    
    deepFreeze(Buffer);
    Buffer.x = 5;
    t.equal(Buffer.x, undefined);
    
    Buffer.prototype.z = 3;
    t.equal(Buffer.prototype.z, undefined);
});

test('multiple arguments', function (t) {
    t.plan(2);
    var array1 = [0]
    var array2 = [0]
    deepFreeze(array1,array2)
    array1[0] = 1
    array2[0] = 1
    t.equal(array1[0], 0)
    t.equal(array2[0], 0)
});
