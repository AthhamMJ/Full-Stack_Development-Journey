function main() {
    calc(85);
}

let uprice;
let amount;
let fixrate;

function calc(unit) {

    if (unit <= 60) {

        if (unit <= 30) {
            fixrate = 80;
            uprice = unit * 5;
            amount = uprice + fixrate;
        }
        else {
            fixrate = 120;
            uprice = 30 * 5 + (unit - 30) * 9;
            amount = uprice + fixrate;
        }

    }
    else {
        uprice = 60 * 14;
        if (unit <= 90) {
            fixrate = 400;
            uprice += (unit - 60) * 20;
            amount = uprice + fixrate;
        }
        else if (unit <= 120){
            fixrate = 1000;
            uprice += 30 * 20 + (unit - 90) *28;
            amount = uprice +fixrate;
        }
        else if (unit <= 180){
            fixrate = 1500;
            uprice += 30 * 20 + 30 * 28 + (unit - 120) * 44;
            amount = uprice + fixrate;
        }
        else{
            fixrate = 2100;
            uprice += 30 * 20 + 30 * 28 + 30 * 44 + (unit - 180) * 85;
            amount = uprice + fixrate;
        }
    }

    console.log("Your Current Units are: " + unit);
    console.log("Your Fixed Amount is: " + fixrate + " Rs");
    console.log("Your Unit Amount is: " + uprice + " Rs");
    console.log("Your Payment Amount is: " + amount + " Rs");
}

main();
