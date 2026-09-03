"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumMember = void 0;
const LibraryMember_1 = require("./LibraryMember");
class PremiumMember extends LibraryMember_1.LibraryMember {
    static fine = 5;
    constructor(memberID, name, bookBorrowedCount) {
        super(memberID, name, bookBorrowedCount);
    }
    calculateFine(overdueDays) {
        console.log(`You're ${overdueDays} Days late. Your fine is Rs. ${overdueDays * PremiumMember.fine}`);
    }
    borrowBook(booksLimit) {
        if (booksLimit == 1) {
            console.log(`${this.memberID} : ${this.name} Borrowed ${this.getBooksBorrowedCount()} Book`);
        }
        else if (booksLimit <= 10) {
            console.log(`${this.memberID} : ${this.name} Borrowed ${this.getBooksBorrowedCount()} Books`);
        }
        else {
            console.log(`${this.name} You Can't Take much than 10 Books`);
            return;
        }
    }
    returnBooks() {
        if (this.getBooksBorrowedCount() == 0) {
            console.log(`this ${this.name} Returned the Book`);
        }
        else {
            console.log(`${this.name} Please Return All books`);
        }
    }
}
exports.PremiumMember = PremiumMember;
//# sourceMappingURL=PremiumMember.js.map