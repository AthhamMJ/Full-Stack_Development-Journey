function main(){
    perfect(10000);
}

function perfect(n){
    for(let i = 1; i < n; i++){
        // let i = temp;
        let sum = 0;
        for(let factor = 1; factor < i; factor++){
            if(i % factor == 0){
                sum += factor;
            }
            else{
                continue;
            }
        }
        if(sum == i){
            console.log(i)
        }
    }
}
main();