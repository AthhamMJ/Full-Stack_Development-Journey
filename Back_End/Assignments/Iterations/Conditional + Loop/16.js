function five_not_ten(n){
    for(n > 3; n--;){
        if(n % 3 == 0){
            console.log(n)
        }
    }
}
five_not_ten(100)