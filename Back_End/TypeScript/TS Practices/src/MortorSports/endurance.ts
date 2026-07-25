import { Motorsport } from "./motorsport"

export class Endurance extends Motorsport{
    private team : String;
    private driver : String;
    private age : number;

    constructor(genre : String, team : String, driver : String, age : number){
        super(genre);
        this.team = team;
        this.driver = driver;
        this.age = age;
    }

    public getDetails():void{
        console.log(`${this.getGenre()} is a tough sport. ${this.driver} Drives for ${this.team}. He's ${this.age} years old`);
    }
}