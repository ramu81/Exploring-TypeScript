this.someStuff = 'stuff';

function func1(num: number) {
	console.log(` num : ${num}  stuff : ${this.someStuff} `);
}

const func2 = (num: number) => console.log(` num : ${num}  stuff : ${this.someStuff} `);

func1(2);

func2(2);

const numbers : number[] = [1,2,3,4,5,6,7,8,9,10];

console.log( numbers.filter( (e: number) => e%2 == 0)
					.map((e: number) => e*2)
					.reduce( (total: number,e: number) => total+e,0));