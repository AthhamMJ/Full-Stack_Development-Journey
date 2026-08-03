"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankApp = void 0;
const currentAccount_1 = require("./currentAccount");
const savingsAccount_1 = require("./savingsAccount");
class BankApp {
    processMonthEnd(accounts) {
        for (const acc of accounts) {
            console.log(`Account: ${acc.getAccountNumber()} Account Holder: ${acc.getHolderName()}`);
            acc.applyMonthlyUpdate();
        }
    }
    BankRun() {
        const savings = new savingsAccount_1.SavingsAccount("S001", "Athham", 120000);
        const current = new currentAccount_1.CurrentAccount("C001", "Stark", 15000);
        savings.Deposite(-1000);
        savings.Deposite(120000);
        current.Deposite(1200);
        current.Withdraw(12000);
        const allAccount = [savings, current];
        this.processMonthEnd(allAccount);
    }
}
exports.BankApp = BankApp;
