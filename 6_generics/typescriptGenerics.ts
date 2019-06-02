namespace TypeScriptGenerics {
    /*****************************************
     * Creating a simple generic
     *****************************************/

     // Simple Generic
     function echo(data: any) {
         return data;
     }

     console.log(echo("Chris"));
     console.log(echo(42));
     console.log(echo({ name: "Chris", age: "42" }));

     // Better Generic - adds IDE and compiler support
     function betterEcho<T>(data: T) {
         return data;
     }

     console.log(betterEcho("Chris").lastIndexOf);
     console.log(betterEcho<number>(42));
     console.log(betterEcho({ name: "Chris", age: "42" }));


    /*****************************************
     * Built-in Generics
     *****************************************/

     const testResults: Array<number> = [1.94, 2.33];
     testResults.push(-2.99);
     console.log(testResults); 


    /*****************************************
     * Arrays
     *****************************************/

     function printAll<T>(args: T[]) {
         args.forEach((element) => console.log(element));
     }

     printAll<string>(["Apple", "Banana"]);


    /*****************************************
     * Generic Types
     *****************************************/

     const echo2: <T>(data: T) => T = echo;

     console.log(echo2<string>("Something"));


    /*****************************************
     * Generic Classes
     *****************************************/

     class SimpleMath<T extends number | string, U extends number | string> {
         baseValue: T;
         multiplyValue: U;
         calculate(): number {
             return +this.baseValue * +this.multiplyValue;
         }
     }

     const simpleMath = new SimpleMath<string, number>();
     simpleMath.baseValue = "10";
     simpleMath.multiplyValue = 20;
     console.log(simpleMath.calculate());
}
