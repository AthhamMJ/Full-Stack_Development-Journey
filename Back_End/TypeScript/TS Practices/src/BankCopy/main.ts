import { BankAccount } from "./bankaccount";
import { CurrentAccount } from "./currentAccount";
import { SavingsAccount } from "./savingsAccount";

export class BankApp{
    public processMonthEnd(accounts: BankAccount[]) : void{
        for(const acc of accounts){
            console.log(`Account: ${acc.getAccountNumber()} Account Holder: ${acc.getHolderName()}`);
            acc.applyMonthlyUpdate();
        }
    }

    public BankRun(){
        const savings = new SavingsAccount("S001", "Athham", 120000);
        const current = new CurrentAccount("C001", "Stark", 15000);

        savings.Deposite(-1000);
        savings.Deposite(120000);
        current.Deposite(1200);
        current.Withdraw(12000);

        const allAccount : BankAccount[] = [savings, current];
        this.processMonthEnd(allAccount);

    }

}