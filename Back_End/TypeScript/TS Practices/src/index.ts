import { MotorBike } from "./Inheritance/motorBike";
import { FormulaOne } from "./MortorSports/formulaone";
import { Primary } from "./School/Primary";
import { Secondary } from "./School/Secondary";
import { Ternary } from "./School/Ternary";
import { Cricle } from "./Shapes(07.21.2026)/circle";
import { GeometricObjects } from "./Shapes(07.21.2026)/geometricObjects";
import { Rectangle } from "./Shapes(07.21.2026)/rectangle";
// import { Trainees } from "./Trainees";

// let stu1 = new Students("Athham", "dr7", 20)
// let stu2 = new Students("Charles", "dr16", 28)

// console.log("Name of the stu1 is : "+ stu1.getStudentName());
// console.log("Name of the stu2 is : "+ stu2.getStudentName());


function main(){
    VehicleActivity();
    SchoolActivity();
    GeometricActivities();
    MotorSport();
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
    console.log(" ");
}

function GeometricActivities(){
    const circle1 = new Cricle(7, "Red", true);
    const rectangle1 = new Rectangle(12, 12, "Black", true)
    console.log(`Circle1 created on `, circle1.getDateCreated());
    console.log(`Area of The Circle is : `, circle1.getArea());
    circle1.getCircle();

    console.log(`Area of Rectangle is : `, rectangle1.getArea());
    console.log(`Perimeter of Rectangle is : `,rectangle1.getPerimeter());
    console.log(" ");

}

function MotorSport(){
    const driver1 = new FormulaOne("Formula FIA", "RedBull", "Max Verstappen", 29);
    driver1.getDetails();
}
