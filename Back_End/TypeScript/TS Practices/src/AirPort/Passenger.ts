export class Passenger{
    private passportNo : string;
    private Name : string;
    private Nationality : string;

    constructor(passportNo : string, Name : string, Nationality : string){
        this.passportNo = passportNo;
        this.Name = Name;
        this.Nationality = Nationality;
    }

    public getPassportNo() : string{
        return this.passportNo;
    }
    public getName() : string{
        return this.Name;
    }
    public getNationality() : string{
        return this.Nationality;
    }

    public updateNationality(newNationality : string){
        this.Nationality = newNationality;
    }
    public boardFlight() : void{
        console.log(`No special things`)
    }

}