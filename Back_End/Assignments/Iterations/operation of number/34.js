function factor(n){
    for(let div = 1; div <= n; div++){
        if(n % div ==0){
            console.log(div +" x "+ (n/div));
        }
        else{
            continue;
        }
    }
}
factor(28);