// SECTION 1
// let laptop = {
//     brand: "Dell",
//     price: 75000,
//     start: function(){
//         console.log("Laptop started");
//     },
//     increased: function(){
//         this.price *= 1.10;
//     }
// }

// laptop.increased(); // call increase()
// console.log(laptop.price); // see updated price

// You have to write the same code again for every object
// Using class makes our code readable and reusable and maintaineable

// SECTION 2
// class Employee {
//     constructor(name, salary){
//         this.name = name;
//         this.salary = salary;
//     }
//     showDetails(){
//         return `Name: ${this.name}, Salary: ${this.salary}`; 
//     }
// }

// let emp1 = new Employee("Soumi", 50000);
// let emp2 = new Employee("Sucheta", 60000);
// let emp3 = new Employee("Charlie", 70000);

// class is readable and reusable while using objects for similar things you have
// to write the same code again and again

// SECTION 3
// class BankAccount {
//     constructor(accountHolderName, balance){
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }
//     deposit(amount){
//         this.balance += amount;
//     }
// }    

// let acc1 = new BankAccount("Soumi", 1000);
// let acc2 = new BankAccount("Eva", 2000);

// acc1.deposit(500);

// acc1 and acc2 have their own separate states

// SECTION 4
// let profile = {
//     username: "Soumi Pal",
//     printName: function(){
//         console.log(this.username);
//     }
// }

// profile.printName(); // Soumi Pal

// let profile = {
//     username: "Soumi Pal",
// }

// let print = {
//     printName: function(){
//          console.log(this.username);
//     }
// }

// print.printName(); // undefined

// SECTION 5
// function Vehicle(type, wheels) {
//     this.type = type;
//     this.wheels = wheels;
//     this.describe = function(){
//         console.log("hello");
//     };
// }    

// let car1 = new Vehicle("Car", 4);
// let car2 = new Vehicle("Bike", 2);

// function Vehicle(type, wheels) {
//     this.type = type;
//     this.wheels = wheels;
// }

// Vehicle.prototype.describe = function(){
//     console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
// }

// let car1 = new Vehicle("Car", 4);
// let car2 = new Vehicle("Bike", 2);

// objects don't need to create the same method again and again

// SECTION 6
// function showBrand() {
//     console.log(this.brand);
// }

// let laptop = {
//     brand: "Dell",
// }

// let phone = {
//     brand: "Apple",
// }

// showBrand.call(laptop);
// showBrand.call(phone);

// call() helps manually attach a function to any object temporarily

// SECTION 7
// function introduce(city, role){
//     this.city = city;
//     this.role = role;
//     console.log(`I am ${this.name} from ${this.city}, working as a ${this.role}.`);
// }

// let property = {
//     name: "Soumi Pal",
// }

// introduce.apply(property, ["Kolkata", "Developer"]);

// but in call() we pass arguments one by one whereas in apply() we pass arguments as an array

// SECTION 8
// function greet() {
//     console.log("Hello" + " " + this.name);
// }

// let person = {
//   name: "Soumi"
// };

// let greetSoumi = greet.bind(person); 

// greetSoumi(); 
