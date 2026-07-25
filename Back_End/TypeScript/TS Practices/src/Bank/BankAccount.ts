export class BankAccount{
    private accountNumber : String;
    private holderName : String;
    protected balance : number;

    constructor(accountNumber : String, holderName : String, balance : number){ 
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }
    public getAccountNumber() : String{
        return this.accountNumber;
    }

    public getHolderName() : String{
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
        if(amount < this.balance){
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