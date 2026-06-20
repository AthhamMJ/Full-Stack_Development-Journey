function star_down(n){
    let star = "*".repeat(n);

    for(; n > 0; n--){
        console.log(star);
        star = star.slice(0, -1);
    }
}

star_down(5);