import { MotorBike } from "./Inheritnace/motorbike";
// import { Student } from "./student";

// let stu1 = new Student("Athham", "dr7", 20)
// let stu2 = new Student("Charles", "dr16", 28)

// console.log("Name of the stu1 is : "+ stu1.getStudentName());
// console.log("Name of the stu2 is : "+ stu2.getStudentName());


function main(){
    VehicleActivity();
}

main();

function VehicleActivity(){
    const obj = new MotorBike(60, 80);
    obj.getspeedfThevehicle();
    obj.getSpeedOfTheMotorBike();
}