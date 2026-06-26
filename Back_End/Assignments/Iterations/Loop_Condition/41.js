function threenotfive(numberofcount){
    threenotfive = true;
    for(let n = 1; n <= 100; n++){
        if(n % 3 == 0 & n % 5 != 0){
            console.log(n);
        }
    }
}
threenotfive(100)