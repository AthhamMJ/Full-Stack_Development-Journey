"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccount = void 0;
const bankaccount_1 = require("./bankaccount");
class CurrentAccount extends bankaccount_1.BankAccount {
    static odLimit = 5000;
    constructor(accountnmuber, holderName, balance) {
        super(accountnmuber, holderName, balance);
    }
    Withdraw(amount) {
        if (this.balance < 0) {
            console.log(`Your Account is Overdrawn by ${Math.abs(this.balance)}. No intrests Applied`);
        }
        else {
            console.log(`No interest for current accounts. Balance remains ${this.balance}.`);
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
//# sourceMappingURL=currentAccount.js.map