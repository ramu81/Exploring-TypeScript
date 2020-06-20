
class PairTypes<T extends Comparator> { 
	constructor(public type: T, public anotherType: T) {} 
	get areEquals(): boolean { return this.type.compareTo(this.anotherType);}
}

interface Comparator { compareTo(other: Comparator): boolean }

class Item implements Comparator {
	constructor(public name: string) {}
	compareTo (other: Item) { return this.name === other.name; }
 }
 
 const item1 = new Item('Item1');
 const item2 = new Item('Item2');
 const item = new Item('Item1');
 
 const pair = new PairTypes(item1,item);
 const pair1 = new PairTypes(item1,item2);
 
 console.log(pair.areEquals);
 console.log(pair1.areEquals);
 