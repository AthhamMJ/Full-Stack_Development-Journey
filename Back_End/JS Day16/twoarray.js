function main(){
    let x = [0, 4, 0, 3.5];
    let y = [0, 0, 3, 3.5];
    let lengths = findlenght(x, y);
    console.log(lengths);
}

function findlenght(x, y){
    let len = new Array();
    for(let i = 0; i < x.length; i++){
        len[i] = pythogareom(x[i%3], x[(i+1)%3], y[i%3], y[(i+1)%3])
    }
    return len;
}

function pythogareom(x1, x2, y1, y2){
    return Math.sqrt(Math.pow((y2-y1), 2)+ Math.pow((x2-x1), 2));
}

main();