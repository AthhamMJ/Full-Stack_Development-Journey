"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccount = void 0;
const BankAccount_1 = require("./BankAccount");
class CurrentAccount extends BankAccount_1.BankAccount {
    static odLimit = 5000;
    constructor(accountNumber, holderName, balance) {
        super(accountNumber, holderName, balance);
    }
    withdraw(amount) {
        if (this.balance - amount < -CurrentAccount.odLimit) {
            console.log(`Withdral Denied. Current Account have an OD as minimum ${CurrentAccount.odLimit}`);
            return;
        }
        else {
            this.balance -= amount;
            console.log(`Withdraw Rs.${amount}. New Balance is ${this.balance}`);
        }
    }
    applyMonthlyUpdate() {
        if (this.balance < 0) {
            console.log(`CurrentAccount overdrawn by ${Math.abs(this.balance)}. No interest Applied`);
        }
        else {
            console.log(`No interest for current accounts. Balance remains ${this.balance}.`);
        }
    }
}
exports.CurrentAccount = CurrentAccount;
