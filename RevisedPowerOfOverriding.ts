class Vehicle {
	 constructor(private year: number,private color: string){ }
	 toString() {
		return `${this.year} : ${this.color}`;
	 }
}

class Car extends Vehicle {}

const printFunc = (vehicle: Vehicle) => console.log("   "+vehicle);

const vehicle = new Vehicle(2018,'White');
const car = new Car(2018,'Blue');

printFunc(vehicle);
printFunc(car);
