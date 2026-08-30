"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
class Staff {
    staffID;
    name;
    baseSalary;
    constructor(staffID, name, baseSalary) {
        this.staffID = staffID;
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getStaffID() {
        return this.staffID;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.baseSalary;
    }
    updateSalary(newSalary) {
        if (newSalary <= 0) {
            console.log(`Invalid salary update for ${this.name}. Value must be positive`);
        }
        else {
            this.baseSalary = newSalary;
            console.log(`${this.name}'s Base salary updated ${this.baseSalary}`);
        }
    }
    calculateTotalSalary() {
        return this.baseSalary;
    }
}
exports.Staff = Staff;
//# sourceMappingURL=Staff.js.map