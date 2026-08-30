export class vehicle{
    private speed : number = 50;

    constructor(speed:number){
        this.speed = speed;
    }

    public getspeedfThevehicle():void{
        console.log(`The speed of the vehicle is ${this.speed} km/hr`);
    }
}