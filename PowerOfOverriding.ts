class Vehicle {
	year: number 
	constructor(year){
		this.year = year;
	}
	getYear(){
		return this.year;
	}
	toString() {
		return this.year.toString();
	}
}

class Car extends Vehicle {
	color: string
	constructor(year,color){
		super(year);
		this.color = color;
	}
	getColor() {
	return this.color;
	}
	
	toString() {
		return ` ${super.toString()} : ${this.color}`;
	}
}

const printFunc = (vehicle: Vehicle) => console.log("   "+vehicle);

const vehicle = new Vehicle(2018);
const car = new Car(2018,'Blue');

printFunc(vehicle);
printFunc(car);
