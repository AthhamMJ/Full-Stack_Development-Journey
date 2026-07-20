export class Student{
    private sName : String;
    private sRegNo : String;
    private age : number;

    constructor(sName: String, sRegNo: String, age: number){
        this.sName = sName;
        this.sRegNo = sRegNo;
        this.age = age;
    }

    public setStudentName(name:String){
        this.sName = name;
    }

    public setStudentRegNo(regNo: String){
        this.sRegNo = regNo;
    }

    public SetStudentage(age: number){
        this.age = age;
    }

    public getStudentName(){
        return this.sName
    }

    public getStudentRegNo(){
        return this.sRegNo
    }

    public getStudentage(){
        return this.age
    }
}