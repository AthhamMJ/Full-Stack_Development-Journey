import { Staff } from "./Staff";
export declare class Nurse extends Staff {
    private shiftsWorked;
    private static readonly ShiftFee;
    constructor(staffID: string, name: string, baseSalary: number, shiftsWorked: number);
    assist(patientName: string): void;
    calculateTotalSalary(): number;
}
//# sourceMappingURL=Nurse.d.ts.map