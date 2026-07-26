"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
const BankAccount_1 = require("./BankAccount");
class SavingsAccount extends BankAccount_1.BankAccount {
    static minBalance = 1000;
    static intrestRate = 0.02;
    constructor(accountNumber, holderName, balance) {
        super(accountNumber, holderName, balance);
        console.log("Savings Account Created Succesfully");
    }
    withdraw(amount) {
        if (this.balance - amount < SavingsAccount.minBalance) {
            console.log(`Withdral Denied. Savings Account must be maintained a minimum balance of $ ${SavingsAccount.minBalance}`);
            return;
        }
        else {
            super.withdraw(amount);
        }
    }
    applyMonthlyUpdate() {
        const intrest = this.balance * SavingsAccount.intrestRate;
        this.balance += intrest;
        console.log(`The intrest of amount is $ ${intrest}. And the new Balance is ${this.balance}`);
    }
}
exports.SavingsAccount = SavingsAccount;
