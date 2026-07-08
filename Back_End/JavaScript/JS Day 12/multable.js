function main(){
multable(100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
}
function multable(length){
    for(let row = 1; row<=length; row++){
        let rowvalue = ""
        for(let col = 1; col <= length; col++){
            rowvalue+=(row * col + "\t")
            // process.stdout.write(row * col + " ");
        }
        console.log(rowvalue);
    }
}
main();