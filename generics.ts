function identity<T>(arg: T): T {
    return arg;
}

console.log(identity("myString"));

console.log(identity(10));

console.log(identity(true));


class List<T> {

	constructor(public val: T[]) {}	

	get(index: number): T {
		return this.val[index];
	}	

	add(value: T) {
		this.val.push(value);
	}
}

const emptyNumArr: number[] =[];
const numList = new List<number>(emptyNumArr);
numList.add(1);
console.log(numList.get(0));

const emptyStrArr: string[] =[];
const strList = new List<string>(emptyStrArr);
strList.add('Kondapalli');
console.log(strList.get(0));