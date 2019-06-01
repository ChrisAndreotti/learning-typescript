namespace TypeScriptClasses {

    /*****************************************
     * Creating Classes and Class properties 
     *****************************************/

    class Person {
        public name: string;
        private type: string;
        protected age: number = 21;

        constructor(name: string, public username: string) {
            this.name = name;
        }

        printAge(): void {
            console.log(this.age);
            this.setType("Cool guy");
        }

        private setType(type: string): void {
            this.type = type;
            console.log(this.type);
        }
    }

    const person = new Person("Joe", "john_doe");


    /***************************************** 
     * Inheritance 
     *****************************************/

    class Chris extends Person {
        constructor(username: string) {
            super("Chris", username);
            this.age = 42;
        }
    }

    const chris = new Chris("chris_andreotti");
    console.log(chris);


    /***************************************** 
     * Getters & Setters
     *****************************************/

    class Plant {
        private _species: string = "Default";

        set species(value: string) {
            if (value.length > 3) {
                this._species = value;
            } else {
                this._species = "Default";
            }
        }

        get species() {
            return this._species;
        }
    }

    let plant: Plant = new Plant();
    console.log(plant.species);
    plant.species = "Green plant";
    console.log(plant.species);


    /***************************************** 
     * Static Properties & Methods
     *****************************************/

    class Helpers {
        static PI: number = 3.14;
        static calcCircumference(diameter: number) : number {
            return this.PI * diameter;
        }
    }
    console.log(2 * Helpers.PI);
    console.log(Helpers.calcCircumference(8));


    /***************************************** 
     * Abstract Classes
     *****************************************/

    abstract class Project {
        projectName: string = "Default";
        budget: number = 1000;

        abstract changeName(name: string): void;

        calcBudget(): number {
            return this.budget * 2;
        }
    }

    class ITProject extends Project {
        changeName(name: string): void {
            this.projectName = name;
        }
    }

    let newProject = new ITProject();
    console.log(newProject);
    newProject.changeName("Super IT Project");
    console.log(newProject);


    /*****************************************************
     * Using A Private Constructor to create a Singleton
     *****************************************************/

    class OnlyOne {
        private static instance: OnlyOne;
        public readonly name: string;
        
        private constructor(name: string) {
            this.name = name;
        }

        static getInstance() {
            if (!OnlyOne.instance) {
                OnlyOne.instance = new OnlyOne("The Only One");
                return OnlyOne.instance;
            }
        }
    }

    // let wrong = new OnlyOne('The Only One');
    let right = OnlyOne.getInstance();
    console.log(right.name);
    // right.name = "Something else"; // cannot assign because name is readonly

}