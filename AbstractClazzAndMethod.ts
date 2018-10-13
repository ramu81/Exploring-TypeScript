abstract class Family{
	constructor(protected familyName: string) {}
	abstract name(): void;
}

class Kondapalli extends Family {
	name(){
		console.log(`${this.familyName} Family`);
	}
}

class Adhi extends Family {
	constructor(){
		super('Adhi');
	}
	name(){
		console.log(`${this.familyName} Family`);
	}
}

const printIt = (pFamily: Family) => pFamily.name();

printIt(new Kondapalli('Kondapalli'));

printIt(new Adhi());