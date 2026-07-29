import { BankAccount } from "./BankAccount";

export class CurrentAccount extends BankAccount{
    private static readonly odLimit = 5000;

    constructor(accountNumber : string, holderName : string, balance : number){
        super(accountNumber, holderName, balance);
    }

    public override withdraw(amount: number): void {
        if(this.balance - amount < -CurrentAccount.odLimit){
            console.log(`Withdral Denied. Current Account have an OD as minimum ${CurrentAccount.odLimit}`);
            return;
        }
        else{
            this.balance -= amount;
            console.log(`Withdraw Rs.${amount}. New Balance is ${this.balance}`);
        }
    }

    public override applyMonthlyUpdate(): void {
        if(this.balance < 0){
            console.log(`CurrentAccount overdrawn by ${Math.abs(this.balance)}. No interest Applied`);
        }
        else{
            console.log(`No interest for current accounts. Balance remains ${this.balance}.`)
        }
    }
}