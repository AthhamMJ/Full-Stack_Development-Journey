export class GeometricObjects{
    private color : string;
    private filled : boolean;
    private dateCreated : Date;

    constructor(color : string, filled : boolean){
        this.color = color;
        this.filled = filled;
        this.dateCreated = new Date;
    }

    public getColor():string{
        return this.color;
    }
    public setColor(color:string):void{
        this.color = color;
    }
    public isFilled():boolean{
        return this.filled;
    }
    public setFilled(filled:boolean){
        this.filled = filled;
    }
    public getDateCreated():Date{
        return this.dateCreated;
    }


    public toString():String{
        return `Color ${this.color}, Filled ${this.filled}, DateCreated ${this.dateCreated}`;
    }
}