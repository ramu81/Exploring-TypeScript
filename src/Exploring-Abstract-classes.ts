abstract class AbstractKlass {
	constructor(name: string) {}
	abstract getInfo(): string ;
}

class AKlass extends AbstractKlass {
	getInfo(): string { return ' implemeneted Abstract method'; }
}

function printIt<T>(type: T) { console.log('  '+type);}

printIt('random');
printIt(2);
printIt(true);