"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
let stu1 = new student_1.Student("Athham", "dr7", 20);
let stu2 = new student_1.Student("Charles", "dr16", 28);
console.log("Name of the stu1 is : " + stu1.getStudentName());
console.log("Name of the stu2 is : " + stu2.getStudentName());
