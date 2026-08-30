import { vehicle } from "./vehicle";

export class MotorBike extends vehicle{
    private speedofTheMotorBike : number = 100;


    constructor(speed : number, speedofTheMotorBike : number){
        super(speed);
        this.speedofTheMotorBike = speedofTheMotorBike;
    }

    public getSpeedOfTheMotorBike():void{
        console.log(`The speed of the MotorBike is ${this.speedofTheMotorBike} km/hr`);
    }
}