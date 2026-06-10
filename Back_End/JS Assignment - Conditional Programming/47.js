function cenleap(year){
    if (year % 100 == 0){
        if (year % 400 == 0){
            console.log(year + " This is a Centuary leap year")
        }
    }
    else if (year % 4 == 0){
            console.log(year +" This is Not Centuary leap But its a leap year")
    }
    else{
        console.log(year+ " This is not a leap year");
    }
    
}
cenleap(2000);