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
    function Vehicle(year, color) {
        this.year = year;
        this.color = color;
    }
    Vehicle.prototype.toString = function () {
        return this.year + " : " + this.color;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Car;
}(Vehicle));
var printFunc = function (vehicle) { return console.log("   " + vehicle); };
var vehicle = new Vehicle(2018, 'White');
var car = new Car(2018, 'Blue');
printFunc(vehicle);
printFunc(car);
