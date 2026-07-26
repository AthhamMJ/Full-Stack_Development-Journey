"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccount = void 0;
const BankAccount_1 = require("./BankAccount");
class CurrentAccount extends BankAccount_1.BankAccount {
    static odLimit = 5000;
    static intrestRate = 0.02;
    constructor(accountNumber, holderName, balance) {
        super(accountNumber, holderName, balance);
        console.log("Savings Account Created Succesfully");
    }
    withdraw(amount) {
        if (this.balance - amount < CurrentAccount.odLimit) {
            console.log(`Withdral Denied. Savings Account must be maintained a minimum balance of $ ${CurrentAccount.odLimit}`);
            return;
        }
        else {
            super.withdraw(amount);
        }
    }
    applyMonthlyUpdate() {
        const intrest = this.balance * CurrentAccount.intrestRate;
        this.balance += intrest;
        console.log(`The intrest of amount is $ ${intrest}. And the new Balance is ${this.balance}`);
    }
}
exports.CurrentAccount = CurrentAccount;
