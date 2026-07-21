import { Motorsport } from "./motorsport"

export class FormulaOne extends Motorsport{
    private team : String;
    private driver : String;
    private age : number;

    constructor(genre: String, team : String, driver : String, age : number){
        super(genre);
        this.team = team;
        this.driver = driver;
        this.age = age;
    }

    public getTeam():String{
        return this.team;
    }
    public getdriver():String{
        return this.driver;
    }
    public getAge():number{
        return this.age;
    }
    public getDetails():void{
        console.log(`${this.driver} is ${this.age} years old. He Drives for Team ${this.team}`)
    }
}