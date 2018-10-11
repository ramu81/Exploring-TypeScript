var X = /** @class */ (function () {
    function X() {
    }
    X.prototype.foo = function () { console.log('X.foo() called...'); };
    X.prototype.f1 = function () { console.log('X.f1() called...'); };
    return X;
}());
var Y = /** @class */ (function () {
    function Y() {
    }
    Y.prototype.foo = function () { console.log('Y.foo() called...'); };
    Y.prototype.f2 = function () { console.log('Y.f2() called...'); };
    return Y;
}());
var isXorY = function (value) {
    return value instanceof X || value instanceof Y;
};
var recive = function (value) {
    if (isXorY(value))
        value.foo();
    if (value instanceof X)
        value.f1();
    if (value instanceof Y)
        value.f2();
};
recive('xyz');
recive(new X());
recive(new Y());
