"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainees = void 0;
class Trainees {
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
exports.Trainees = Trainees;
