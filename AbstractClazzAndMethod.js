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
var Family = /** @class */ (function () {
    function Family(familyName) {
        this.familyName = familyName;
    }
    return Family;
}());
var Kondapalli = /** @class */ (function (_super) {
    __extends(Kondapalli, _super);
    function Kondapalli() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kondapalli.prototype.name = function () {
        console.log(this.familyName + " Family");
    };
    return Kondapalli;
}(Family));
var Adhi = /** @class */ (function (_super) {
    __extends(Adhi, _super);
    function Adhi() {
        return _super.call(this, 'Adhi') || this;
    }
    Adhi.prototype.name = function () {
        console.log(this.familyName + " Family");
    };
    return Adhi;
}(Family));
var printIt = function (pFamily) { return pFamily.name(); };
printIt(new Kondapalli('Kondapalli'));
printIt(new Adhi());
