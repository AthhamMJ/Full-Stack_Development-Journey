let n = 5
for(let row = 1; row <= n; row++){
    let table = "";
    for(let col = 1; col <= n; col++){
        table +=(row * col + "\t")
    }
    console.log(table);
}