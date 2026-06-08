function five(quantity){
    let q = quantity;

    if (q % 5 ==0){
        console.log("This Can be Packable "+q+ " pcs");
    }
    else{
        console.log("This Can not be Packable "+q+ " pcs")
    }
}
five(25)