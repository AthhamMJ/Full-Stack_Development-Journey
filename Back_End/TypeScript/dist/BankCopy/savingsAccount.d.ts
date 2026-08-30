import { BankAccount } from "./bankaccount";
export declare class SavingsAccount extends BankAccount {
    private static readonly minBalance;
    private static readonly intrestRate;
    constructor(accountnmuber: string, holderName: string, balance: number);
    Withdraw(amount: number): void;
    applyMonthlyUpdate(): void;
}
//# sourceMappingURL=savingsAccount.d.ts.map