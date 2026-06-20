function star_up(n){
    star = "*"
    for(n > 0; n--;){
        console.log(star);
        star+="*"
    }
}
star_up(5);