const numbers: number[] = [6,4,2,5,3,1];

function sortByNum(numbers: number[], desc?: boolean){
	const sortNum = numbers.sort();
	return desc? sortNum.reverse() : sortNum
}

console.log(sortByNum(numbers));

console.log(sortByNum(numbers,true));