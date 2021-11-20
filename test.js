/* let name = "john";
let age = 30;
let array = ["fsdfd", "ffsdfsdf", "fsdfdsf"];
let d = new Date();
let e = 10.5; */

/* console.log(typeof (e)); */

/* function myFunction() {
    let name = "John";
    let surname = "Doe";

    const allName = `My name is ${name} ${surname}`;
    console.log(allName)
}
myFunction() */

/* function myFonction() {

    let age = 20;
    let nage = 11;

    const fage = age % nage;

    console.log(fage)

}
myFonction() */

/* function myFonction() {

    let age = 20;

    if (age == 100 && 0 == 0) {
        console.log('This is true');
    } else {
        console.log('This is false');
    }
}
myFonction(); */

/* function myFunction() {

    let age = 30;
    const fage = age > 100 ? (console.log(true)) : (console.log(false))

}
myFunction() */

/* function myFunction() {

    let age = 100;

    switch (age) {
        case 30:
            console.log("This is true");
            break;
        case 40:
            console.log("This is false");
            break;
        case 50:
            console.log("This is 50");
            break;
        default:
            console.log("This is default")
            break;
    }
}
myFunction() */

/* function myFunction() {

    let age = 30;

    while (age < 101) {
        console.log(`The age of the person is ${age}`);
        age++;
    }
}
myFunction() */

/* function myFunction() {

    for (let age = 30; age < 101; age++) {
        console.log(`The age of the person is ${age}`);
    }
}
myFunction() */

/* 
function myFunction() {

    let salaries = [1651, 6545, 61241, 56464];
    let sum = 0;

    for (let salary of salaries) {
        sum += salary;
    }
    console.log(sum)
}
myFunction() */

/* 
function myFunction() {
    let age = 1.5;
    console.log(Math.round(age))
}
myFunction() */

/* function myFunction() {

    console.log(Math.floor(Math.random() * 40));

}

myFunction(); */


/* function myFunction() {

    let fruits = ["orange", "apple", "banana"];

    let puFruits = fruits.push('COCO');
    console.log(fruits)

    let unshiftFruits = fruits.unshift("GRAPES");
    console.log(fruits);

    let popFruits = fruits.pop();
    console.log(fruits);

    let shiftFruits = fruits.shift();
    console.log(fruits);

    console.log(fruits.slice(0, 1))

}
myFunction() */

/* function myFunction() {

    let fruits = ["orange", "apple", "banana", "coco"];

    console.log(`My son likes`, ...fruits)
}
myFunction() */

/* function myFunction() {

    let cars = ["Tesla", "Ferrari", "Lamborghini", "Audi", "Mahindra"];

    for (i = 2; i < cars.length; i++) {
        console.log(cars[i])
    }
}
myFunction() */


/* myName = (name, surname) => `My name is ${name} ${surname}`;
const fName = myName('John', 'Doe');
console.log(fName)
 */
/* 
mySum = (x) => x * 10;
const myFsum = mySum(100);
console.log(myFsum) */


/* let persoData = {

    name: "John",
    surname: "Doe",
    address: {
        area: "Avenue de la dig",
        housenum: "77",
        district: {
            districtname: "Plain willhem",
            area: {
                areaname: "Kennedy"
            }
        }
    }
}

const { name, surname, address } = persoData
console.log(name + surname)

const { roadname, area, district, housenum } = address;
console.log(roadname, housenum, district);

const { districtname, area: districtn } = district
console.log(districtn) */


/* const companies = [



    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }


]; */

/* let ages = [2, 12, 5, 18, 25, 36, 29, 65, 47, 55, 65, 75, 78, 82, 89, 99, 90, 101, 48];
 */
/* let filterAge = ages.filter(age => age < 100);
console.log(filterAge.sort((a, b) => a - b)) */

/* companies.forEach(function (company) {
    console.log(company.name)
}) */


/* let compmap = companies.map(company => company.name);
console.log(compmap)

let compFilter = companies.filter(company => `${company.category}` == "Finance");
console.log(compFilter) */

/* const ageSum = ages.reduce((total, age) => total + age, 0)
console.log(ageSum)
 */


/* function myFunction(a, b) {
    let c = a + b;
    console.log(c)
}
myFunction(20, 11) */
/* let persoData = {

    name: "John",
    surname: "Doe",
    address: "Quatre-Bornes",
    age: 1990,

    constructor(name, surname, address, age) {
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.age = age;
    },

    getName: function () {
        return `The name of the person is ${this.name}`
    },
    getSurname: function () {
        return `The surname of the person is ${this.surname}`;
    },
    getAddress() {
        return `The address of the person is ${this.address}`
    },
    getAge() {
        let d = new Date();
        let e = d.getFullYear() - this.age;
        return e;
    }
}

console.log(persoData.getName());
console.log(persoData.getSurname());
console.log(persoData.getAddress());
console.log(persoData.getAge()) */