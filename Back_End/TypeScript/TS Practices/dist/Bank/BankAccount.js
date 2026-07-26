"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    accountNumber;
    holderName;
    balance;
    constructor(accountNumber, holderName, balance) {
        this.accountNumber = accountNumber;
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
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposite Ammount Should Be Positive");
            return;
        }
        this.balance += amount;
        console.log(`Deposited $ ${amount}. New Balance is ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdraw Ammount Should Be Positive");
            return;
        }
        if (amount < this.balance) {
            console.log(`Insufficient Balance`);
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawed $ ${amount}. New Balance is ${this.balance}`);
    }
    applyMonthlyUpdate() {
        console.log("It's Standard Rule. There is no Updates");
    }
}
exports.BankAccount = BankAccount;
