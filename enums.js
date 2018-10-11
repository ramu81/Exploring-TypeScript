var DAYS;
(function (DAYS) {
    DAYS[DAYS["SunDay"] = 1] = "SunDay";
    DAYS[DAYS["MonDay"] = 2] = "MonDay";
    DAYS[DAYS["TuesDay"] = 3] = "TuesDay";
    DAYS[DAYS["WendsDay"] = 4] = "WendsDay";
    DAYS[DAYS["ThursDay"] = 5] = "ThursDay";
    DAYS[DAYS["FriDay"] = 6] = "FriDay";
    DAYS[DAYS["SaturDay"] = 7] = "SaturDay";
})(DAYS || (DAYS = {}));
var printWeekEnd = function (weekEnd) {
    console.log(weekEnd);
};
var printDay = function (day) {
    console.log(day);
};
printWeekEnd(1 /* SunDay */);
console.log('-----------------');
printDay(DAYS.SunDay);
console.log('-----------------');
console.log(DAYS[DAYS.SunDay]);
