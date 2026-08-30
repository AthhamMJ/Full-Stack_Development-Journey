import { GeometricObjects } from "./geometricObjects";

export class Rectangle extends GeometricObjects{
    private width : number;
    private height : number;

    constructor ( width : number, height : number, color : string, filled : boolean){
        super(color, filled)
        this.width = width;
        this.height = height;
    }
    public getWidth():number{
        return this.width;
    }
    public getHeight():number{
        return this.height;
    }
    public setWidth(width : number){
        this.width = width;
    }
    public setHeight(height : number){
        this.height = height;
    }
    public getArea():number{
        return (this.width * this.height);
    }
    public getPerimeter():number{
        return (2 * (this.width + this.height));
    }

}