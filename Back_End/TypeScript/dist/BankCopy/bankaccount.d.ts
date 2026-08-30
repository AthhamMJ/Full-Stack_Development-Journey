export declare class BankAccount {
    private accountNumber;
    private holderName;
    protected balance: number;
    constructor(accountnmuber: string, holderName: string, balance: number);
    getAccountNumber(): string;
    getHolderName(): string;
    getBalance(): number;
    applyMonthlyUpdate(): void;
    Deposite(amount: number): void;
    Withdraw(amount: number): void;
}
//# sourceMappingURL=bankaccount.d.ts.map