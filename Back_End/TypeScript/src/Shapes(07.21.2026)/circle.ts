import { GeometricObjects } from "./geometricObjects"

export class Cricle extends GeometricObjects{
    private radius : number;
    
    constructor(radius : number, color : string, filled : boolean){
        super(color, filled);
        this.radius = radius;
    }


    public getRadius():number{
        return this.radius;
    }
    public setRadius(radius : number):void{
        this.radius = radius;
    }

    public getArea():number{
        return (Math.PI * Math.pow(this.radius, 2));
    }

    public getPerimeter():number{
        return (Math.PI * 2 * this.radius);
    }

    public getDiameter():number{
        return (this.radius * 2);
    }

    public getCircle(){
        console.log(`Radius : ${this.radius}, Area : ${this.getArea()}, Perimeter : ${this.getPerimeter()}, Color : ${this.getColor()}, Diameter : ${this.getDiameter()}`);
    }
}