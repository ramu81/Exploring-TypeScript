class List<T> {
	constructor(private array: T[]) {}
	getElement(index: number): T { return this.array[index]; }
	set setElement(value: T) { this.array[this.array.length]=value; }
	//get [Symbol.toStringTag]() { return ` `;}
}
let numArr: number[] = [];
let strArr: string[] = [];
let numList = new List<number>(numArr);
let strList = new List<string>(strArr);

strList.setElement = 'Ram';
strList.setElement = 'Sai';
strList.setElement = 'Vasu';

numList.setElement=1;
numList.setElement=2;
numList.setElement=3;


console.log(numList);
console.log(strList);
