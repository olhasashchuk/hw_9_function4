// Максимально використовуючи функції та конструктори.
// 1. Створити сутність людини, яка міститиме властивості “ім'я” та “вік”.
// А також мати метод виведення даних об'єкта
// 2. Створити сутність автомобіля. Вона має містити мінімум 3 характеристики.
// А також мати метод виведення на екран даних про цей автомобіль.
// І метод присвоєння цього автомобіля власнику (метод повинен записати в автомобіль
// об'єкт власника з попереднього пункту)
// Всі дані про людину та автомобіль отримувати від користувача (prompt).

function Person (name = prompt('Enter your name'),
                 age = +prompt('Enter your age')) {
    this.name = name;
    this.age = age;
}

const UserFirst = new Person ();

document.getElementById("name").innerHTML = 'Name: ' + UserFirst.name;
document.getElementById("age").innerHTML = 'Age: ' + UserFirst.age;

function Car (make = prompt('Enter the make car'),
              model = prompt ('Enter the model car'),
              year = +prompt ('Enter the year car'),
              nameOwner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = null;
    this.setOwner = function(user) {
        this.owner = user;
    };
}

const carFirst = new Car ();
carFirst.setOwner(UserFirst);
document.getElementById("make").innerHTML = 'Make: ' + carFirst.make;
document.getElementById("model").innerHTML = 'Model: ' + carFirst.model;
document.getElementById("year").innerHTML = 'Year: ' + carFirst.year;
document.getElementById("owner").innerHTML = 'Owner: ' + carFirst.owner.name + ', age: ' + carFirst.owner.age;


