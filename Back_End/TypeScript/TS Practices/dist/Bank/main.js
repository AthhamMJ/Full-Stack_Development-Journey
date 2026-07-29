"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const CurrentAccount_1 = require("./CurrentAccount");
const SavingsAccount_1 = require("./SavingsAccount");
class Bank {
    processMonthEnd(accounts) {
        for (const acc of accounts) {
            console.log(`Account: ${acc.getAccountNumber()} Account Holder: ${acc.getHolderName()}`);
            acc.applyMonthlyUpdate();
        }
    }
    bankmainX() {
        const savings = new SavingsAccount_1.SavingsAccount("SA001", "Tony", 5000);
        const current = new CurrentAccount_1.CurrentAccount("CA001", "Stark", 3000);
        savings.deposit(2500);
        savings.withdraw(1000);
        current.deposit(1000);
        current.withdraw(5000);
        const allAccount = [savings, current];
        this.processMonthEnd(allAccount);
    }
}
exports.Bank = Bank;
