export class Staff{
    private staffID : string;
    private name : string;
    private baseSalary : number;

    constructor(staffID : string, name : string, baseSalary : number){
        this.staffID = staffID;
        this.name = name;
        this.baseSalary = baseSalary;
    }

    public getStaffID() : string{
        return this.staffID;
    }
    public getName() : string{
        return this.name;
    }
    public getSalary() : number{
        return this.baseSalary;
    }

    public updateSalary(newSalary: number){
        if (newSalary <= 0){
            console.log(`Invalid salary update for ${this.name}. Value must be positive`)
        }
        else{
            this.baseSalary = newSalary;
            console.log(`${this.name}'s Base salary updated ${this.baseSalary}`);
        }
    }
    public calculateTotalSalary() : number{
        return this.baseSalary;
    }

}