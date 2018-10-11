enum DAYS {
	SunDay = 1,
	MonDay = 2,
	TuesDay = 3,
	WendsDay = 4,
	ThursDay = 5,
	FriDay = 6,
	SaturDay = 7
}
const enum WEEKEND{
	SaturDay,
	SunDay
}

const printWeekEnd = function(weekEnd: WEEKEND){
console.log( weekEnd);
}

const printDay = function(day: DAYS){
console.log( day);
}
printWeekEnd( WEEKEND.SaturDay);
printWeekEnd( WEEKEND.SunDay);
console.log( '-----------------');
printDay( DAYS.SunDay);
console.log( '-----------------');
console.log( DAYS[DAYS.SunDay]);