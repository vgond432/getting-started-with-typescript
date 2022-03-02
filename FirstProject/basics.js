"use strict";
//Primitives: number, string, boolean
//More complex types: arrays, objects
//Function types, parameters
//Primitives -> number, string, boolean, null, undefined
//number, string -> denotes primitives type
//Number, String -> denotes Objects
let age = 24;
age = 12;
let userName;
userName = 'Vishal';
let isInstructor;
isInstructor = true;
// null and undefined is not assigned as variableName: null or variableName: undefined.
// if we do this then we cannot assign any other value to the variable like: variableName = 2.
// It will give error.
//More complex types -> Arrays, Objects
//Arrays
let hobbies;
hobbies = ['Sports', 'Cooking', 'Reading'];
//Objects
//let person; //here default type is any, which is same as Javascript
//this will allow 
// person = {
//     name:'Vishal',
//     age: 24
// }
//as well as
// person = {
//     isEmployee: true;
// }
let person;
person = {
    name: 'Vishal',
    age: 24
};
let people;
people = [person, { 'name': 'Max', 'age': 31 }];
//Type inference
// When we define a variable in typescript and assign a value at the time of defining
// the variable then typescript checks the type of the value assingned to the variable
// and infers it to the variable. so that we have to write less code.
//We should use type inference most of the time
//Union types
// It is type definition When you want to have multiple types for a variable
// we can do this by adding pipe symbol ( | ) between the type
let course = 'Angular - The Complete Guide';
course = ['React - Guide', 'Java - Basics'];
course = 3;
let vishal = {
    name: 'Vishal',
    age: 24
};
let pax = {
    name: 'Pax',
    age: 31
};
let employees;
employees = [vishal, pax];
//Functions & types
//Here the return type is infered by the typescript
function add(a, b) {
    return a + b;
}
//Here the return type is void
function printObject(value) {
    console.log(value);
}
//Generics
// function inserAtBeginning(array: any[], value: any){
//     const newArray = [value, ...array]; // here "..." is spread
//     return newArray;
// }
// const demoArray = [1, 2, 3];
// const updatedArray = inserAtBeginning(demoArray, -1); // here the updatedArray is inferred as array of any (any[])
// //updatedArray becomes = [-1, 1, 2, 3]
// //So if we call a string method here we not get any compilation error, but we will get runtime error
// updatedArray[0].split('');
function inserAtBeginning(array, value) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = inserAtBeginning(demoArray, -1);
const stringArray = inserAtBeginning(['a', 'b', 'c'], 'd');
//now we will get complitation error when we use:
// updatedArray[0].split('');
//Classes
class Student {
    //short hand notation of defining properties
    // In this we don't need to define properities separately, we can define it in constructor itself
    // constructor(
    //     public firstName: string,
    //     public lastName: string,
    //     public age: number,
    //     private courses: string[]
    // ) { }
    constructor(first, last, age, courses) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    //Here it is class method and we do not use function keyword
    enroll(courseName) {
        this.courses.push(courseName);
    }
}
const student = new Student('Vishal', 'Gond', 24, ['Angular', 'Java']);
student.enroll('React'); // student.courses =>  Angular, Java, React
let vish;
vish = {
    firstName: 'Vishal',
    age: 24,
    greet() {
        console.log('Hello! This is Vishal');
    }
};
class Instructor {
    constructor(first, age) {
        this.firstName = first;
        this.age = age;
        this.greet();
    }
    greet() {
        console.log('Hello! This is ' + this.firstName);
    }
    ;
}
const ramen = new Instructor('Ramen', 45);
