function five_not_ten(n){
    for(n > 3; n--;){
        if(n % 5 == 0 & n % 10 != 0){
            console.log(n)
        }
    }
}
five_not_ten(100)