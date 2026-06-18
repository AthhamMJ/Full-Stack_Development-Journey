function tenth(count){
    let c = count;

    if (c % 10 == 0){
        console.log("Sent To Ware House " +c+ " items")
    }
    else{
        let b = c % 10; 
        console.log("Wait.. Add " + b + " items")
    }
}
tenth(150);