export class BankAccount{
    private accountNumber : string;
    private holderName : string;
    protected balance : number;

    constructor(accountnmuber : string, holderName : string, balance : number){
        this.accountNumber = accountnmuber;
        this.holderName = holderName;
        this.balance = balance;
    }
    
    public getAccountNumber() :string{
        return this.accountNumber
    }

    public getHolderName() :string{
        return this.holderName
    }

    public getBalance() :number{
        return this.balance
    }

    public applyMonthlyUpdate(){
        console.log("Account Updated")
    }

    public Deposite(amount : number){
        if(amount <= 0){
            console.log(`You Can not deposite Zero Or Negative.`);
            return
        }
        else{
            this.balance += amount;
            console.log(`Deposited Amount $ ${amount}. Your Balance is $ ${this.balance}`); 
            this.balance += amount;
        }
    }
    public Withdraw(amount : number){
        if(amount <= 100){
            console.log(`You Cannot withdraw Negatative Ammount`);
            return
        }
        else{
            console.log(`You Have Withdrawn $ ${amount}. You Balance is ${this.balance}`);
            this.balance -= amount;
        }
    }
}