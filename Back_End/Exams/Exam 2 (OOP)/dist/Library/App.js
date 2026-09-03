"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryApp = void 0;
const PremiumMember_1 = require("./PremiumMember");
const RegularMember_1 = require("./RegularMember");
class LibraryApp {
    generateOverdueReport(members) {
        for (const m of members) {
            console.log(`${m.getName()} Borrowed ${m.getBooksBorrowedCount()} Books}`);
        }
    }
    main() {
        const regular = new RegularMember_1.RegularMember("R001", "Musk", 4);
        const premium = new PremiumMember_1.PremiumMember("P001", "Athham", 10);
        regular.borrowBook(4);
        premium.borrowBook(7);
        regular.returnBooks();
        premium.returnBooks();
        const members = [regular, premium];
        this.generateOverdueReport(members);
    }
}
exports.LibraryApp = LibraryApp;
//# sourceMappingURL=App.js.map