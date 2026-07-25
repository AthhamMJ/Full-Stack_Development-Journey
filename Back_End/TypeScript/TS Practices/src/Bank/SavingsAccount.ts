import { BankAccount } from "./BankAccount";

export class SavingsAccount extends BankAccount{

    private static readonly minBalance = 1000;
    private static readonly intrestRate = 0.02;

    constructor(accountNumber : String, holderName : String, balance : number){
        super(accountNumber, holderName, balance);
        console.log("Savings Account Created Succesfully");
    }

    public override withdraw(amount: number): void {
        if(this.balance - amount < SavingsAccount.minBalance){
            console.log(`Withdral Denied. Savings Account must be maintained a minimum balance of $ ${SavingsAccount.minBalance}`);
            return;
        }
        else{
            super.withdraw(amount);
        }
    }

    public override applyMonthlyUpdate(): void {
        const intrest = this.balance * SavingsAccount.intrestRate;
        this.balance += intrest;
        console.log(`The intrest of amount is $ ${intrest}. And the new Balance is ${this.balance}`);
    }
}
