namespace TypeScriptInterfaces {

    /*****************************************
     * Declaring a basic interface
     *****************************************/
    interface NamedPerson {
        firstName: string;
        age?: number; // optional property
        [propName: string]: any; // optional property and property name
        greet(lastName: string): void;
    }

    // function requires an argument of type NamedPerson 
    const greet = (person: NamedPerson) => {
        console.log("Hello, " + person.firstName);
    }

    // function requires an argument of type NamedPerson 
    const changeName = (person: NamedPerson ) => {
        person.firstName = "Anna";
    }

    const person = {
        firstName: "Chris",
        age: 42,
        hobbies: ["Cooking", "Sports"],
        greet(lastName: string) {
            console.log("Hi, I am " + this.firstName + " " + lastName);
        }
    }
    
    changeName(person);
    greet(person);
    person.greet("Bobanna")



    /*****************************************
     * Using Interfaces with Classes
     *****************************************/

    class Person implements NamedPerson {
        firstName: string;
        lastName: string;
        greet(lastName: string) {
            console.log("Hi, I am " + this.firstName + " " + lastName);
        }
    }

    const myPerson = new Person();
    myPerson.firstName = "John";
    myPerson.lastName = "Doe";
    greet(myPerson);
    myPerson.greet("Doe");



    /*****************************************
     * Creating Interfaces for Function Types
     *****************************************/

    interface DoubleValueFunc {
        (number1: number, number2: number): number;
    }

    let myDoubleFunction: DoubleValueFunc;
    myDoubleFunction = function(value1: number, value2: number) {
        return (value1 + value2) * 2;
    };

    console.log(myDoubleFunction(10, 20));


    /*****************************************
     * Interface Inheritance
     *****************************************/

    interface AgedPerson extends NamedPerson {
        age: number; // overrides age to be a required property
    }

    const oldPerson: AgedPerson = {
        age: 87,
        firstName: "Bill",
        greet(lastName: string) {
            console.log("Hello!");
        }
    }

    console.log(oldPerson);
}
