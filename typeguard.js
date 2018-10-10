var X = /** @class */ (function () {
    function X() {
    }
    X.prototype.foo = function () { console.log('X.foo() called...'); };
    return X;
}());
var Y = /** @class */ (function () {
    function Y() {
    }
    Y.prototype.func = function () { console.log('Y.func() called...'); };
    return Y;
}());
var recive = function (value) {
    value.length;
    //( <X> value ).foo();
    //( <Y> value ).func();
    if (typeof (value) === 'string')
        console.log('value length : ' + value.length);
    if (value instanceof X)
        value.foo();
    if (value instanceof Y)
        value.func();
};
recive('xyz');
recive(new X());
recive(new Y());
