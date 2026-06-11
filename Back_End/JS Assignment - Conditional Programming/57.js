function season(month){
    let m = month;

    if(m == "jan" || "feb" || "now" || "dec"){
        console.log("The Winter is coming");
    }
    else if (m == "mar" || "apr" || "jun" || "jul" || "aug") {
        console.log("This is Summer Baby..");
    }
}

//Enter the Months in to function call like ("jan" or "feb" ... liek that)//
season("jan")