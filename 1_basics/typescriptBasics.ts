namespace TypeScriptBasics {

    // string
    let myName: string = 'Chris';

    // number
    let myAge: number = 42;

    // boolean
    let hasHobbies: boolean = true;

    // assign types
    let myRealAge: number;
    myRealAge = 42;

    // array
    let hobbies: any[] = ["Cooking", "Sports"];
    hobbies = [100];

    // tuples
    let address: [string, number] = ["Superstreet", 99];

    // enums
    enum Color {
        Gray = "gray",
        Green = "green",
        Blue = "blue",
    }

    let myColor: Color = Color.Green;
    console.log(myColor);

    // any 
    let car: any = "BMW";
    console.log(car);
    car = { brand: "BMW", series: 3 };
    console.log(car);

    // functions
    function returnMyName(): string {
        return myName;
    }
    console.log(returnMyName());

    // void
    function sayHello(): void {
        console.log("Hello!");
    }

    // argument types
    function multiply(value1: number, value2: number): number {
        return value1 * value2;
    }
    console.log(multiply(2, 2));

    // function types
    let myMultiply: (val1: number, val2: number) => number;
    myMultiply = multiply;
    console.log(myMultiply(10, 2));

    // objects
    let userData: { name: string, age: number } = {
        name: "Chris",
        age: 42,
    };

    // complex object
    let complex: { data: number[], output: (all: boolean) => number[] } = {
        data: [100, 3.99, 10],
        output: function(all: boolean): number[] {
            return this.data;
        }
    }

    // type alias
    type Complex = { data: number[], output: (all: boolean) => number[] };
    let complex2: Complex = {
        data: [100, 3.99, 10],
        output: function(all: boolean): number[] {
            return this.data;
        }
    }

    // union types
    let myRealRealAge: number | string = 27;
    myRealRealAge = "27";

    // check types
    let finalValue = 30;
    if (typeof finalValue === "number") {
        console.log("Final value is a number");
    }

    // never
    function neverReturns(): never {
        throw new Error('An error!');
    }

    // Nullable Types
    let canBeNull: number | null = 12;
    canBeNull = null;
    let canAlsoBeNull;
    canAlsoBeNull = null;
    let canThisBeAny: number | null = null;
    canThisBeAny = 12;

    // Arrow function
    const multiplyNumbers = (number1: number, number2: number) : number => number1 * number2;
    console.log(multiplyNumbers(10, 10));

}