import { LibraryApp } from "./Library/App";

function main(){
    LibraryManagementSystem();
}
function LibraryManagementSystem() : void{
    const Day1 = new LibraryApp();
    Day1.main();
}

main();