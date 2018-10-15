var Pigeon = /** @class */ (function () {
    function Pigeon() {
    }
    Pigeon.prototype.layEggs = function () { console.log('Pigeon.layEggs()'); };
    Pigeon.prototype.fly = function () { console.log('Pigeon.fly()'); };
    return Pigeon;
}());
var Salmon = /** @class */ (function () {
    function Salmon() {
    }
    Salmon.prototype.layEggs = function () { console.log('Salmon.layEggs()'); };
    Salmon.prototype.swim = function () { console.log('Salmon.swim()'); };
    return Salmon;
}());
var recive = function (flag) {
    if (flag)
        return new Pigeon();
    else
        return new Salmon();
};
recive(true).layEggs(); // okay
recive(false).layEggs(); // okay
recive(true).fly();
recive(false).swim();
