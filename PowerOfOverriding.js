var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(year) {
        this.year = year;
    }
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.toString = function () {
        return this.year.toString();
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(year, color) {
        var _this = _super.call(this, year) || this;
        _this.color = color;
        return _this;
    }
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.toString = function () {
        return " " + _super.prototype.toString.call(this) + " : " + this.color;
    };
    return Car;
}(Vehicle));
var printFunc = function (vehicle) { return console.log("   " + vehicle); };
var vehicle = new Vehicle(2018);
var car = new Car(2018, 'Blue');
printFunc(vehicle);
printFunc(car);
