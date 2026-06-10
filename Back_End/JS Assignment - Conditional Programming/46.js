function team (com1, com2, com3, com4 ){
    if (com1 < com2 & com1 < com3 & com1 < com4){
        console.log("Company 1 is the Lowest quotation. The quotation is: "+ com1);
    }
    else if (com2 < com1 & com2 < com3 & com2 < com4){
        console.log("Company 2 is the Lowest quotation. The quotation is: "+ com2);
    }
    else if (com3 < com1 & com3 < com2 & com3 < com4){
        console.log("Company 3 is the Lowest quotation. The quotation is: "+ com3);
    }
    else{
        console.log("Company 4 is the Lowest quotation. The quotation is: "+ com4);
    }

}
team(12, 2, 43, 54);