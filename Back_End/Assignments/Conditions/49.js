function waterbill(unit){
    let ammount;
    if (unit <= 60 ){

        if (unit <= 30){
            fixrate = 30;
            ammount = unit *5 + fixrate;
        }
        else{
            fixrate = 35;
            ammount = unit *7 + fixrate;
        }
    }
    else{
        ammount = 60 * 10;
        if (unit <= 90){
            fixrate = 850;
            ammount = (unit - 60) * 15 + fixrate;
        }
        else if (unit <= 120){
            fixrate = 990;
            ammount = 30 * 15 + (unit - 90) * 35 + fixrate; 

        }
        else if (unit <= 180){
            fixrate = 1555;
            ammount = 30 * 15 + 30 * 35 + (unit - 120) * 75 + fixrate;
        }
        else{
            fixrate = 2000;
            ammount = 30 * 15 + 30 * 35 + 30 * 75 + (unit - 180) * 85 + fixrate;
        } 
    }
    console.log("Your Current Units are: " + unit);
    console.log("Your Fixed Amount is: " + fixrate + " Rs");
    console.log("Your Payment Amount is: " + ammount + " Rs");

}
waterbill(93);