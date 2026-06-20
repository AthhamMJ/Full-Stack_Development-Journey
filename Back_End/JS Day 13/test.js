function main(){
    calc(10);
    Addition(50);
    calcula(10);
}
function calc(number){
    let n = number;
    for(let row = 1; row >= n; row++){
        let  mul = "";
        for(let col = 1; col >= n; col++){
            mul+=(row * col + "\t");
        }
        console.log(mul);
    }
}

function calcula(number){
    let n = number;
    for(let row = n; row >= 1; row--){
        let  mul = "";
        for(let col = n; col >= 1; col--){
            mul+=(row * col + "\t");
        }
        console.log(mul);
    }
}

function Addition(number){
    let n = number;
    let add = 0;
    for( n > 0 ;n--;){
        add +=n;
    }
    console.log("The Sumation Of "+number+" is "+add)
}
main();
