import { BankAccount } from "./bankaccount";

export class SavingsAccount extends BankAccount{
    private static readonly minBalance : number = 1000;
    private static readonly intrestRate : number = 0.02;

    constructor(accountnmuber : string, holderName : string, balance : number){
        super(accountnmuber, holderName, balance);
        console.log("Savings Account Created Succesfully");
    }

    public override Withdraw(amount: number): void {
        if(this.balance - amount <= SavingsAccount.minBalance){
            console.log(`You Haven't Sufficient Amount. Your Balance is $ ${this.balance}`);
        }
        else{
            console.log(`Your Have Withdrawn $ ${amount}. Your Balance is $ ${this.balance}`);
            this.balance -= amount;
        }
    }

    public override applyMonthlyUpdate(): void {
        const intrest = this.balance * SavingsAccount.intrestRate;
        this.balance += intrest;
        console.log(`The Savings Account Updated with Rs $ ${this.balance}`);
    }
}