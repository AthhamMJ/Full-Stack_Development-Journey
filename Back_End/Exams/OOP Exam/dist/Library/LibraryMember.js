"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryMember = void 0;
class LibraryMember {
    memberID;
    name;
    booksBorrowedCount;
    constructor(memberID, name, bookBorrowedCount) {
        this.memberID = memberID;
        this.name = name;
        this.booksBorrowedCount = bookBorrowedCount;
    }
    getMemberID() {
        return this.memberID;
    }
    getName() {
        return this.name;
    }
    getBooksBorrowedCount() {
        return this.booksBorrowedCount;
    }
    calculateFine(overdueDays) {
        console.log("No Fine");
    }
    borrowBook(booksLimit) {
        this.booksBorrowedCount++;
    }
    returnBooks() {
        this.booksBorrowedCount--;
    }
}
exports.LibraryMember = LibraryMember;
//# sourceMappingURL=LibraryMember.js.map