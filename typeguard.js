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
    console.log('value :  ' + value);
    if (typeof (value) === 'string') {
        console.log('value length : ' + value.length);
    }
    if (value instanceof X) {
        value.foo();
    }
    if (value instanceof Y) {
        value.func();
    }
};
recive(1);
recive('xyz');
recive(new X());
recive(new Y());
