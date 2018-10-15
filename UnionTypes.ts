interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

class Pigeon implements Bird {
	layEggs(){ console.log('Pigeon.layEggs()'); }
	fly(){ console.log('Pigeon.fly()'); }
}

class Salmon implements Fish {
	layEggs(){ console.log('Salmon.layEggs()'); }
	swim(){ console.log('Salmon.swim()'); }
}

const recive = function(flag: boolean): Fish | Bird {

	if(flag)
		return new Pigeon();
	 else 
		return new Salmon();	
}

recive(true).layEggs(); // okay
recive(false).layEggs(); // okay

(<Bird>recive(true)).fly();
(<Fish>recive(false)).swim();
