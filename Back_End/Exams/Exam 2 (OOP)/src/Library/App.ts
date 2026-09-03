import { LibraryMember } from "./LibraryMember";
import { PremiumMember } from "./PremiumMember";
import { RegularMember } from "./RegularMember";

export class LibraryApp{

    public generateOverdueReport(members : LibraryMember[]) : void{
        for(const m of members){
            console.log(`${m.getName()} Borrowed ${m.getBooksBorrowedCount()} Books}`);
        }
    }

    public main(){
        const regular = new RegularMember("R001", "Musk", 4);
        const premium = new PremiumMember("P001", "Athham", 10);

        regular.borrowBook(4);
        premium.borrowBook(7);

        regular.returnBooks();
        premium.returnBooks();
        

        const members : LibraryMember []= [regular, premium]
        this.generateOverdueReport(members)
    }
} 