export declare class LibraryMember {
    protected memberID: string;
    protected name: string;
    private booksBorrowedCount;
    constructor(memberID: string, name: string, bookBorrowedCount: number);
    getMemberID(): string;
    getName(): string;
    getBooksBorrowedCount(): number;
    calculateFine(overdueDays: number): void;
    borrowBook(booksLimit: number): void;
    returnBooks(): void;
}
//# sourceMappingURL=LibraryMember.d.ts.map