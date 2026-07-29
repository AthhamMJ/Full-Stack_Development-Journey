export class BankAccount{
    private accountNumber : string;
    private holderName : string;
    protected balance : number;

    constructor(accountNumber : string, holderName : string, balance : number){ 
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }
    public getAccountNumber() : string{
        return this.accountNumber;
    }

    public getHolderName() : string{
        return this.holderName;
    }

    public getBalance() : number{
        return this.balance;
    }

    public deposit(amount: number){
        if(amount <= 0){
            console.log("Deposite Ammount Should Be Positive");
            return;
        }
        this.balance += amount;
        console.log(`Deposited $ ${amount}. New Balance is ${this.balance}`);
            
    }
    public withdraw(amount: number){
        if(amount <= 0){
            console.log("Withdraw Ammount Should Be Positive");
            return;
        }
        if(amount > this.balance){
            console.log(`Insufficient Balance`);
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawed $ ${amount}. New Balance is ${this.balance}`);
    }


    public applyMonthlyUpdate(){
        console.log("It's Standard Rule. There is no Updates")
    }
}