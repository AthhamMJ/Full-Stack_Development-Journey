import { BankAccount } from "./bankaccount";

export class CurrentAccount extends BankAccount{
    private static readonly odLimit : number = 5000;

    constructor(accountnmuber : string, holderName : string, balance : number){
        super(accountnmuber, holderName, balance);
    }

    public override Withdraw(amount: number): void {
        if(this.balance < 0){
            console.log(`Your Account is Overdrawn by ${Math.abs(this.balance)}. No intrests Applied`)
        }
        else{
            console.log(`No interest for current accounts. Balance remains ${this.balance}.`)
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