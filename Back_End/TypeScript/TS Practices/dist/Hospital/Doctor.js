"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const Staff_1 = require("./Staff");
class Doctor extends Staff_1.Staff {
    consultationCount;
    static consultationFee = 5000;
    constructor(staffID, name, baseSalary, consultationCount) {
        super(staffID, name, baseSalary);
        this.consultationCount = consultationCount;
    }
    diagnose(patientName) {
        console.log(`Dr. ${this.getName()} is diagnosing ${patientName}`);
        this.consultationCount++;
    }
    calculateTotalSalary() {
        return this.getSalary() + this.consultationCount * Doctor.consultationFee;
    }
}
exports.Doctor = Doctor;
