namespace Exercise3 {

    // Convert the following JavaScript examples to TypeScript
    /***************************************************************************************
    * Exercise 1 

    function Car(name) {
        this.name = name;
        this.acceleration = 0;

        this.honk = function() {
            console.log("Toooooooooot!");
        };

        this.accelerate = function(speed) {
            this.acceleration = this.acceleration + speed;
        }
    }
    var car = new Car("BMW");
    car.honk();
    console.log(car.acceleration);
    car.accelerate(20);
    console.log(car.acceleration);
    */


    // Solution

    class Car {
        name: string;
        acceleration: number = 0;

        constructor(name: string) {
            this.name = name;
        }

        honk(): void {
            console.log("Toooooooooot!");
        }

        accelerate(speed: number): void {
            this.acceleration = this.acceleration + speed;
        }
    }

    const myCar = new Car("BMW");
    myCar.honk();
    console.log(myCar.acceleration);
    myCar.accelerate(20);
    console.log(myCar.acceleration);


    /***************************************************************************************
     * Exercise 2 

    var baseObject = {
        width: 0,
        length: 0
    };
    var rectangle = Object.create(baseObject);
    rectangle.width = 5;
    rectangle.length = 2;
    rectangle.calcSize = function() {
        return this.width * this.length;
    };
    console.log(rectangle.calcSize());
    */

    // Solution

    abstract class BaseObject {
        width: number = 0;
        length: number = 0;
    }

    class Rectangle extends BaseObject {
        calcSize(): number  {
            return this.width * this.length;
        }
    }

    const myRectangle = new Rectangle();
    myRectangle.width = 5;
    myRectangle.length = 2;
    console.log(myRectangle.calcSize());


    /***************************************************************************************
     * Exercise 3

    var person = {
        _firstName: ""
    };
    Object.defineProperty(person, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    console.log(person.firstName);
    person.firstName = "Ma";
    console.log(person.firstName);
    person.firstName = "Maximilian";
    console.log(person.firstName);
    */

    // Solution

    class Person1 {
        private _firstName: string = "";

        get firstName() {
            return this._firstName;
        }

        set firstName(value: string) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        }
    }

    const thePerson = new Person1();
    console.log(thePerson.firstName); //prints empty string
    thePerson.firstName = "Joe"; // less than 4 characters
    console.log(thePerson.firstName); //prints empty string again
    thePerson.firstName = "Joseph";
    console.log(thePerson.firstName);

}