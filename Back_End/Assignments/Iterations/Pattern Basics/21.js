function star_up(n){
    let star = "*"
    for(; n > 0; n--){
        console.log(star);
        star+="*"
    }
}
star_up(5);