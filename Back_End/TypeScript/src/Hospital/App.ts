import { Doctor } from "./Doctor";
import { Nurse } from "./Nurse";
import { Staff } from "./Staff";

export class HospitalApp{

    public generatePayroll(staffList: Staff[]) :void{
        console.log("Generating the Payroll")
        for(const staff of staffList){
            console.log(`StaffID : ${staff.getStaffID()} Name : ${staff.getName()} Salary : ${staff.getSalary()}`);
            staff.calculateTotalSalary();
        }
    }


    public hospitalmain(){
        const doctor1 = new Doctor("DR001", "Charles", 1250000, 10);
        const doctor2 = new Doctor("DR002", "Thaksha", 1250000, 255);

        const nurse1 = new Nurse("NS001", "Leclerc", 1000000, 5);
        const nurse2 = new Nurse("NS001", "Mark", 1000000, 3);

        nurse1.assist("Injury Finding");
        nurse2.assist("Mental Treatement");

        doctor1.diagnose("Max");
        doctor2.diagnose("Verstappen");

        doctor1.updateSalary(-65000);
        doctor2.updateSalary(12000);

        nurse1.updateSalary(15000);
        nurse2.updateSalary(750000);



        const staffList : Staff[] = [doctor1, doctor2, nurse1, nurse2];
        this.generatePayroll(staffList);
    }
}