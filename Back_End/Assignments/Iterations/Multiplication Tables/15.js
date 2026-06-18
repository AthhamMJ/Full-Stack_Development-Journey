let n = 10;

for(let row = n; row >=1; row--){
    let mul = ""
    for(let col = n; col >=1; col--){
        mul+=(row*col + "\t")
    }
    console.log(mul)
}