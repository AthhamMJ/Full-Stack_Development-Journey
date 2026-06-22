function main(){
    even();
    evenfor();
}

function even(){
let x = 1;
while(x <= 100){
    if(x % 2 == 0){
        console.log(x);
        x++;
    }
    else{
        x++;
    }
}
}


function evenfor(){
    for(let n= 1; n >= 0; n--){
        if(n % 2 == 0){
            console.log(n)
        }
    }
}
main()