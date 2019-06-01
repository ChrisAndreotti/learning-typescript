namespace Exercise1 {

    /******
     * Convert the following JavaScript to TypeScript, making the types as explicit as possible

    let bankAccount = {
        money: 2000,
        deposit(value) {
            this.money += value;
        }
    };

    let myself = {
        name: "Max",
        bankAccount: bankAccount,
        hobbies: ["Sports", "Cooking"]
    };

    myself.bankAccount.deposit(3000);
    console.log(myself);
    */

    // Solution

    type BankAccount = { money: number, deposit: (val: number) => void };

    let bankAccount: BankAccount = {
        money: 2000,
        deposit(value: number) {
            this.money += value;
        }
    }

    let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
        name: "Max",
        bankAccount: bankAccount,
        hobbies: ["Sports", "Cooking"]
    };

    myself.bankAccount.deposit(3000);
    console.log(myself);

}