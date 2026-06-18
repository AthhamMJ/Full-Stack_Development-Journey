let n = 10;

for(let row = 1; row <=n; row++){
    let mul = ""
    for(let col = 1; col <=n; col++){
        mul+=(row*col + "\t")
    }
    console.log(mul)
}