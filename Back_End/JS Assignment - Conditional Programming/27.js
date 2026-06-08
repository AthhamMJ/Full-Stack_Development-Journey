function small(a1, a2, a3){
    if (a1 > a2){
        if (a1> a3){
            console.log("Just Select First : " + a1 +" $");
        }
        else{console.log("Just Select Third : " + a3 +" $");}
    }
    else if(a2 > a3){
        console.log("Just Select second :" + a2 +" $");
    }
}
small(12, 120, 1);