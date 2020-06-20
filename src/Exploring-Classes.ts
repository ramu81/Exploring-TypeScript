class Person {
	
	private static noOfPeople: number = 0;
	
	constructor(private name: string, private age: number) { Person.noOfPeople++;}
	
	get getName():string { return this.name; }
	get getAge():number { return this.age; }
	
	static get peopleCount():number { return Person.noOfPeople; }
}


const ram = new Person('Kondapalli Ram',40);
console.log(` ${ram.getName} ${ram.getAge}   ${Person.peopleCount}`);

class Base {
	private static staticFeild: number = 0
	
	constructor(public baseProp: string) { Base.staticFeild++;}
	
	get baseProperty(): string { return this.baseProp }
	
	static get staticMember():number { return Base.staticFeild; }
	
	get [Symbol.toStringTag](): string { return ` ${this.baseProp} `;}
}

class Derived extends Base {
	constructor(baseProp: string,public derivedProp: string) { super(baseProp);}
	get [Symbol.toStringTag](): string { return ` ${this.derivedProp} `; }
}

const base = new Base('Hello Base');
const derived = new Derived('Hello from Derived','Hello Derived');

console.log(` ${JSON.stringify(base.toString())} --- ${derived.toString()} `);
