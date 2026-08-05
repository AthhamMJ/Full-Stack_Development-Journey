"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegularMember = void 0;
const LibraryMember_1 = require("./LibraryMember");
class RegularMember extends LibraryMember_1.LibraryMember {
    static fine = 10;
    constructor(memberID, name, bookBorrowedCount) {
        super(memberID, name, bookBorrowedCount);
    }
    calculateFine(overdueDays) {
        const pay = overdueDays * RegularMember.fine;
        console.log(`You're ${overdueDays} Days late. Your fine is Rs. ${overdueDays * RegularMember.fine}`);
    }
    borrowBook(booksLimit) {
        if (booksLimit == 1) {
            console.log(`${this.memberID} : ${this.name} Borrowed ${this.getBooksBorrowedCount()} Book`);
        }
        else if (booksLimit <= 3) {
            console.log(`${this.memberID} : ${this.name} Borrowed ${this.getBooksBorrowedCount()} Books`);
        }
        else {
            console.log(`${this.name} You Can't Take much than 3 Books`);
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
exports.RegularMember = RegularMember;
//# sourceMappingURL=RegularMember.js.map