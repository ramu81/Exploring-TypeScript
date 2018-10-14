function identity(arg) {
    return arg;
}
console.log(identity("myString"));
console.log(identity(10));
console.log(identity(true));
var List = /** @class */ (function () {
    function List(val) {
        this.val = val;
    }
    List.prototype.get = function (index) {
        return this.val[index];
    };
    List.prototype.add = function (value) {
        this.val.push(value);
    };
    return List;
}());
var emptyNumArr = [];
var numList = new List(emptyNumArr);
numList.add(1);
console.log(numList.get(0));
var emptyStrArr = [];
var strList = new List(emptyStrArr);
strList.add('Kondapalli');
console.log(strList.get(0));
