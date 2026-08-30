import { BankAccount } from "./bankaccount";
export declare class CurrentAccount extends BankAccount {
    private static readonly odLimit;
    constructor(accountnmuber: string, holderName: string, balance: number);
    Withdraw(amount: number): void;
    applyMonthlyUpdate(): void;
}
//# sourceMappingURL=currentAccount.d.ts.map