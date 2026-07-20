"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    sName;
    sRegNo;
    age;
    constructor(sName, sRegNo, age) {
        this.sName = sName;
        this.sRegNo = sRegNo;
        this.age = age;
    }
    setStudentName(name) {
        this.sName = name;
    }
    setStudentRegNo(regNo) {
        this.sRegNo = regNo;
    }
    SetStudentage(age) {
        this.age = age;
    }
    getStudentName() {
        return this.sName;
    }
    getStudentRegNo() {
        return this.sRegNo;
    }
    getStudentage() {
        return this.age;
    }
}
exports.Student = Student;
