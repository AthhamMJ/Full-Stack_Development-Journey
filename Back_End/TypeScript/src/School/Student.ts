export class Student{
    private time : number = 8;

    constructor(time : number){
        this.time = time;
    }

    public getSchoolData():void{
        console.log(`All Students Come to School morning at : ${this.time} AM`);
    }
}