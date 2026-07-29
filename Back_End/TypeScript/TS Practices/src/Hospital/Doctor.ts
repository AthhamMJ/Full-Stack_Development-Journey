import { Staff } from "./Staff";

export class Doctor extends Staff{
    private consultationCount : number;
    private static readonly consultationFee : number = 5000;

    constructor(staffID : string, name : string, baseSalary : number, consultationCount : number){
        super(staffID, name, baseSalary);
        this.consultationCount = consultationCount;
    }
    
    public diagnose(patientName: string){
        console.log(`Dr. ${this.getName()} is diagnosing ${patientName}`)
        this.consultationCount++;
    }
    public override calculateTotalSalary(): number {
         return this.getSalary() + this.consultationCount * Doctor.consultationFee;
    }
}