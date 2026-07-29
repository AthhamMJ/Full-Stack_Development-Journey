import { Staff } from "./Staff";

export class Nurse extends Staff{
    private shiftsWorked : number = 0;
    private static readonly ShiftFee : number = 3000;

    constructor(staffID : string, name : string, baseSalary : number, shiftsWorked : number){
        super(staffID, name, baseSalary);
        this.shiftsWorked = shiftsWorked;
    }
    
    public assist(patientName : string){
       console.log(`Mr/Ms ${this.getName()} is Assisted ${patientName}`);
       this.shiftsWorked++;
    }
    public override calculateTotalSalary() : number {
        return this.getSalary() + this.shiftsWorked * Nurse.ShiftFee;
    }
}