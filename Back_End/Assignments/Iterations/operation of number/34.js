function factor(n){
    let a = 1;
    let number = n;
    for(; n > 0; n--){
        if(n * a == number){
            console.log(a+" x "+n);
        }
        else{
            continue;
        }
        a++;
        
    }
}
factor(20);