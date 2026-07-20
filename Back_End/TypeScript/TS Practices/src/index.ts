import { MotorBike } from "./Inheritance/motorBike";
import { Primary } from "./School/Primary";
import { Secondary } from "./School/Secondary";
import { Ternary } from "./School/Ternary";
// import { Trainees } from "./Trainees";

// let stu1 = new Students("Athham", "dr7", 20)
// let stu2 = new Students("Charles", "dr16", 28)

// console.log("Name of the stu1 is : "+ stu1.getStudentName());
// console.log("Name of the stu2 is : "+ stu2.getStudentName());


function main(){
    VehicleActivity();
    SchoolActivity();
}

main();

function VehicleActivity(){
    const obj = new MotorBike(60, 80);
    obj.getspeedfThevehicle();
    obj.getSpeedOfTheMotorBike();
    console.log(" ");
}

function SchoolActivity(){
    const stuP1 = new Primary(8, 12);
    const stuS1 = new Secondary(8, 13);
    const stuT1 = new Ternary(8, 15);
    stuP1.getSchoolData();
    stuP1.getDetailPrimary();
    stuS1.getDetailSecondary();
    stuT1.getDetailTernary();
}
