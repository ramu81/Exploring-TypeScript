interface PersonInterface {
	name: string
	age: number
	gender?: boolean
	
	toString(): string
}

class Person implements PersonInterface {
	
	constructor(public name: string, public age: number){}
	
	toString(): string { return ` Name : ${this.name} Age: ${this.age}`;}
}

const ram = new Person('Ram Kondapalli',40);

console.log(ram.toString());