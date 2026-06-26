function threenotfive(numberofcount){
    threenotfive = true;
    for(let n = 1; n <= 100; n++){
        if(n % 4 == 0 & n % 6 == 0){
            console.log(n);
        }
    }
}
threenotfive(100)