"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nurse = void 0;
const Staff_1 = require("./Staff");
class Nurse extends Staff_1.Staff {
    shiftsWorked = 0;
    static ShiftFee = 3000;
    constructor(staffID, name, baseSalary, shiftsWorked) {
        super(staffID, name, baseSalary);
        this.shiftsWorked = shiftsWorked;
    }
    assist(patientName) {
        console.log(`Mr/Ms ${this.getName()} is Assisted ${patientName}`);
        this.shiftsWorked++;
    }
    calculateTotalSalary() {
        return this.getSalary() + this.shiftsWorked * Nurse.ShiftFee;
    }
}
exports.Nurse = Nurse;
