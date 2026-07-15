function main(){
    printStrongnum(100000);
}

function printStrongnum(n){
    for(let i = 1; i < n; i++){
        let sum = 0;
        for(let j = i; j > 0; j = Math.floor(j / 10)){
            let fact = 1;
            for(let lastNum = j % 10; lastNum > 1; lastNum--){
                fact *= lastNum;
            }
            sum += fact;
        }
        if(sum == i){
            console.log(i);
        }
        else{
            continue;
        }
    }
}
main();