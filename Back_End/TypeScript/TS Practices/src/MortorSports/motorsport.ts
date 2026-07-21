export class Motorsport{
    private genre : String = "MotorSport";

    constructor(genre : String){
        this.genre = genre;
    }

    public getGenre():String{
        return this.genre;
    }
}