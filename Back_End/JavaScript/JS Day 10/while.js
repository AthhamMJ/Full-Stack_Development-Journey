function main(){
sumtennum()
}

function sumtennum(){
    let sum = 0;
    let count = 0;
    while(count < 100){
        sum += count;
        count++;
        console.log(`The Fraction value is `, sum, `Count is `, count );
    }
}

main();