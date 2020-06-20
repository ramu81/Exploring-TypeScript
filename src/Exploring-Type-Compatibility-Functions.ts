interface Greet {
	(name: string): void
}

const call = function( greet: Greet ) {
	greet('Ram');
}

call( (name: string) => console.log(` Heloo ${name}`));

call(() => console.log(` Heloo `));


const tupleFunc = function(val: [string,number]){ console.log(` ${val[0]} ${val[1]} `); }

tupleFunc(['Ram Kondapalli',40]);