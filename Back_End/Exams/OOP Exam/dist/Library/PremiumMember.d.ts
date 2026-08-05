import { LibraryMember } from "./LibraryMember";
export declare class PremiumMember extends LibraryMember {
    private static readonly fine;
    constructor(memberID: string, name: string, bookBorrowedCount: number);
    calculateFine(overdueDays: number): void;
    borrowBook(booksLimit: number): void;
    returnBooks(): void;
}
//# sourceMappingURL=PremiumMember.d.ts.map