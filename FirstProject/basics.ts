//Primitives: number, string, boolean
//More complex types: arrays, objects
//Function types, parameters

//Primitives -> number, string, boolean, null, undefined

//number, string -> denotes primitives type
//Number, String -> denotes Objects

let age: number = 24;

age = 12;

let userName: string;

userName = 'Vishal';

let isInstructor: boolean;

isInstructor = true;

// null and undefined is not assigned as variableName: null or variableName: undefined.
// if we do this then we cannot assign any other value to the variable like: variableName = 2.
// It will give error.

//More complex types -> Arrays, Objects

//Arrays

let hobbies: string[];
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
let person: {
    name: string;
    age: number;
};

person = {
    name: 'Vishal',
    age: 24
}

let people: {
    name: string;
    age: number;
}[];

people = [person, { 'name': 'Max', 'age': 31 }];

//Type inference
// When we define a variable in typescript and assign a value at the time of defining
// the variable then typescript checks the type of the value assingned to the variable
// and infers it to the variable. so that we have to write less code.

//We should use type inference most of the time


//Union types
// It is type definition When you want to have multiple types for a variable
// we can do this by adding pipe symbol ( | ) between the type

let course: string | string[] | number = 'Angular - The Complete Guide';

course = ['React - Guide', 'Java - Basics']

course = 3;

//Type aliases
// It is used to create a new user defined type 
// "type" key word is used before the type name.
type Person = {
    name: string;
    age: number;
}

let vishal: Person = {
    name: 'Vishal',
    age: 24
}

let pax: Person = {
    name: 'Pax',
    age: 31
}

let employees: Person[];

employees = [vishal, pax];

//Functions & types

//Here the return type is infered by the typescript
function add(a: number, b: number) {
    return a + b;
}

//Here the return type is void
function printObject(value: any) {
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

function inserAtBeginning<T>(array: T[], value: T) {
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

    //In Javascript, we had to define the properties in a constructor without types
    //In Typescript, we can have properties of class at the class definition with types
    // we can also add public and private classifier in typescript
    //By default the properties has public classifier

    //These variables are the properties
    firstName: string;
    lastName: string;
    age: number;
    courses: string[];


    //short hand notation of defining properties
    // In this we don't need to define properities separately, we can define it in constructor itself
    // constructor(
    //     public firstName: string,
    //     public lastName: string,
    //     public age: number,
    //     private courses: string[]
    // ) { }

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    //Here it is class method and we do not use function keyword
    enroll(courseName: string) {
        this.courses.push(courseName);
    }
}

const student = new Student('Vishal', 'Gond', 24, ['Angular', 'Java']);

student.enroll('React'); // student.courses =>  Angular, Java, React

//Interface
//It is an object type definition.
//It is not compiled to javascript file.
//It can be implemented by classes. type keyword cannot be implemented by class
//So the classes are forced to have the structure defined by interface

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let vish: Human;

vish = {
    firstName: 'Vishal',
    age: 24,
    greet() {
        console.log('Hello! This is Vishal');
    }
}

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello! This is ' + this.firstName);
    };
    constructor(first: string, age: number) {
        this.firstName = first;
        this.age = age;
        this.greet();
    }
    
}
const ramen = new Instructor('Ramen', 45)


