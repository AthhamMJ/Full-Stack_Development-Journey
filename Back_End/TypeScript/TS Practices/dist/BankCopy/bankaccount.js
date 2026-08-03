"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    accountNumber;
    holderName;
    balance;
    constructor(accountnmuber, holderName, balance) {
        this.accountNumber = accountnmuber;
        this.holderName = holderName;
        this.balance = balance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getHolderName() {
        return this.holderName;
    }
    getBalance() {
        return this.balance;
    }
    applyMonthlyUpdate() {
        console.log("Account Updated");
    }
    Deposite(amount) {
        if (amount <= 0) {
            console.log(`You Can not deposite Zero Or Negative.`);
            return;
        }
        else {
            this.balance += amount;
            console.log(`Deposited Amount $ ${amount}. Your Balance is $ ${this.balance}`);
            this.balance += amount;
        }
    }
    Withdraw(amount) {
        if (amount <= 100) {
            console.log(`You Cannot withdraw Negatative Ammount`);
            return;
        }
        else {
            console.log(`You Have Withdrawn $ ${amount}. You Balance is ${this.balance}`);
            this.balance -= amount;
        }
    }
}
exports.BankAccount = BankAccount;
