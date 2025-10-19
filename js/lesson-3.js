// Задача 1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbersForSquares = [1, 2, 3, 4, 5];
const squares = numbersForSquares.map(number => number * number);

console.log('Квадрати чисел:', squares); // Виведе: [1, 4, 9, 16, 25]

// Задача 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];
const flattenedValues = data.flatMap(obj => obj.values);

console.log('Об\'єднаний масив:', flattenedValues);

// 3 Задача
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

const people = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
]
const hasYoungPerson = people.some(person => person.age < 20)

console.log(hasYoungPerson);

// Задача 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const evenNumbers = [2, 4, 6, 8, 10];
const isAllEven = evenNumbers.every(number => number % 2 === 0);

console.log('Чи всі числа парні:', isAllEven); 

// 5 Задача
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

const numbers = [2, 1, 6, 8, 9, 10, 12]
const firstOdd = numbers.find(number => number % 2 !== 0)

console.log(firstOdd);

// 6 Задача
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

const numbersArray = [4, 2, 5, 1, 3];
const sortedNumbersArray = numbersArray.toSorted((a, b) => a - b);

console.log(sortedNumbersArray);

// 7 Задача
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

const stringArray = ['banana', 'orange', 'apple', 'pear']
const sortedArray = stringArray.toSorted()

console.log(sortedArray);

// 8 Задача
//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];
const sortedUsers = users.toSorted((a, b) => a.age - b.age);

console.log(sortedUsers);

// 9 Задача
// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
]
 const adults = users.filter(user => user.age > 20)

console.log(adults);

// 10 Задача
// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

const numbersString = [1, 2, 3, 4, 5]
const sum = numbersString.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(sum);
 
// 11 Задача
// Розроби клас Calculator, який дозволяє виконувати арифметичні 
//  операції над числом за допомогою методів класу, підтримуючи  
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// const calc = new Calculator();


// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24


//   console.log(result); // 24
class Calculator {
    constructor() {
        this.result = 0;
    }
    number(value) {
        this.result = value
        return this
    }
    add(value) {
        this.result += value
        return this
    }
    subtract(value) {
        this.result -= value
        return this
    }
    divide(value) {
        if (value === 0) {
            throw new Error
        }
        this.result /= value
        return this
    }
    multiply(value) {
        this.result *= value
        return this
    }
    getResult() {
        return this.result
    }
}

const calc = new Calculator();
const result = calc
  .number(10) 
  .add(5)         
  .subtract(3)   
  .multiply(4)   
  .divide(2)      
  .getResult();  

console.log(result);

// 12 Задача
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email
class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }
  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}
const client = new Client('myLogin', 'myemail@example.com');

console.log(client.login);  
console.log(client.email);

client.login = 'newLogin548';
client.email = 'new.email@exampleprime.com';

console.log(client.login); 
console.log(client.email);

// 13 Задача
  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

  class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

class Employee extends Person {
  constructor(name, age, gender, email, salary, department) {
    super(name, age, gender, email);
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}

const employee = new Employee(
  'John Doe',
  30,
  'male',
  'john.doe@example.com',
  50000,
  'IT'
);

const personDetails = employee.getDetails();
console.log('Загальна інформація:', personDetails);

const employeeDetails = employee.getEmployeeDetails();
console.log('Робоча інформація:', employeeDetails);
