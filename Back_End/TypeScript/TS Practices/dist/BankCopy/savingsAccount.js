"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
const bankaccount_1 = require("./bankaccount");
class SavingsAccount extends bankaccount_1.BankAccount {
    static minBalance = 1000;
    static intrestRate = 0.02;
    constructor(accountnmuber, holderName, balance) {
        super(accountnmuber, holderName, balance);
        console.log("Savings Account Created Succesfully");
    }
    Withdraw(amount) {
        if (this.balance - amount <= SavingsAccount.minBalance) {
            console.log(`You Haven't Sufficient Amount. Your Balance is $ ${this.balance}`);
        }
        else {
            console.log(`Your Have Withdrawn $ ${amount}. Your Balance is $ ${this.balance}`);
            this.balance -= amount;
        }
    }
    applyMonthlyUpdate() {
        const intrest = this.balance * SavingsAccount.intrestRate;
        this.balance += intrest;
        console.log(`The Savings Account Updated with Rs $ ${this.balance}`);
    }
}
exports.SavingsAccount = SavingsAccount;
