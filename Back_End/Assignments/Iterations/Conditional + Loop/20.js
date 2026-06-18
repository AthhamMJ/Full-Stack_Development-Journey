function no_seven(n){
    for(n > 0; n--;){
        if(n % 7 !=0){
            console.log(n);
        }
    }
}
no_seven(100);