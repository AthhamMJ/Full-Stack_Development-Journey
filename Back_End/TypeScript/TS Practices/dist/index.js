"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const motorBike_1 = require("./Inheritance/motorBike");
const formulaone_1 = require("./MortorSports/formulaone");
const Primary_1 = require("./School/Primary");
const Secondary_1 = require("./School/Secondary");
const Ternary_1 = require("./School/Ternary");
const circle_1 = require("./Shapes(07.21.2026)/circle");
const rectangle_1 = require("./Shapes(07.21.2026)/rectangle");
// import { Trainees } from "./Trainees";
// let stu1 = new Students("Athham", "dr7", 20)
// let stu2 = new Students("Charles", "dr16", 28)
// console.log("Name of the stu1 is : "+ stu1.getStudentName());
// console.log("Name of the stu2 is : "+ stu2.getStudentName());
function main() {
    VehicleActivity();
    SchoolActivity();
    GeometricActivities();
    MotorSport();
}
main();
function VehicleActivity() {
    const obj = new motorBike_1.MotorBike(60, 80);
    obj.getspeedfThevehicle();
    obj.getSpeedOfTheMotorBike();
    console.log(" ");
}
function SchoolActivity() {
    const stuP1 = new Primary_1.Primary(8, 12);
    const stuS1 = new Secondary_1.Secondary(8, 13);
    const stuT1 = new Ternary_1.Ternary(8, 15);
    stuP1.getSchoolData();
    stuP1.getDetailPrimary();
    stuS1.getDetailSecondary();
    stuT1.getDetailTernary();
    console.log(" ");
}
function GeometricActivities() {
    const circle1 = new circle_1.Cricle(7, "Red", true);
    const rectangle1 = new rectangle_1.Rectangle(12, 12, "Black", true);
    console.log(`Circle1 created on `, circle1.getDateCreated());
    console.log(`Area of The Circle is : `, circle1.getArea());
    circle1.getCircle();
    console.log(`Area of Rectangle is : `, rectangle1.getArea());
    console.log(`Perimeter of Rectangle is : `, rectangle1.getPerimeter());
    console.log(" ");
}
function MotorSport() {
    const driver1 = new formulaone_1.FormulaOne("Formula FIA", "RedBull", "Max Verstappen", 29);
    driver1.getDetails();
}
