class University{
	name: string; 
	dept: string; 
	constructor(name: string, dept: string){
		this.name = name; 
		this.dept = dept; 
}
	graduation = (year: number): void => { 
	console.log(`Graduating ${this.dept} ${year} students`); 
} 

} 
let miu = new University("MIU", "Computer Science"); 
miu.graduation(2019);




let bankAccount = { 
	money: <number> 2000, 
	deposit(value: number) { 
		this.money += value; 
	} 
}; 


let myself = { 
	name: <string> "Asaad", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);




class Car { 
	name: string; 
	acceleration: number = 0; 
	constructor (name: string){
		this.name = name;
	}
	honk = () => { 
		console.log(` ${this.name} is saying: Toooooooooot!`); 
	}; 
	accelerate = (speed: number) => { 
		this.acceleration = this.acceleration + speed; 
	} 
} 
let car = new Car("BMW"); 
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60); 
console.log(car.acceleration); // 60


let baseObject = { 
	width: <number> 0, 
	length: <number> 0 
}; 

let rectangle = Object.create(baseObject); 

rectangle.width = 5; 
rectangle.length = 2; 

rectangle.calcSize = function(): number { 
	return this.width * this.length; 
}; 

console.log(rectangle.calcSize()); // 10
