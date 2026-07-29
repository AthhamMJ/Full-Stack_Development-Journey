import { BankAccount } from "./BankAccount";
import { CurrentAccount } from "./CurrentAccount";
import { SavingsAccount } from "./SavingsAccount";

export class Bank{
    public processMonthEnd(accounts: BankAccount[]): void{
        for(const acc of accounts){
            console.log(`Account: ${acc.getAccountNumber()} Account Holder: ${acc.getHolderName()}`);
            acc.applyMonthlyUpdate();
        }
    }

    public bankmainX(){
        const savings = new SavingsAccount("SA001","Tony", 5000);
        const current = new CurrentAccount("CA001", "Stark", 3000);

        savings.deposit(2500);
        savings.withdraw(1000);
        current.deposit(1000);
        current.withdraw(5000);

        const allAccount: BankAccount[] = [savings, current];
        this.processMonthEnd(allAccount);
    }
}


    