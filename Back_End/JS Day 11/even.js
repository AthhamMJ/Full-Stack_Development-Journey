// let x = 1;
// do{
//     if (x % 2 == 0)
//         console.log(x)
//     x+=1;
// }
// while(x <= 100);

function even(number){
    let x = 0;
    let n = number;
    if (n > 0){
        do{
            if (x % 2 == 0){
                console.log(x)
                x+=1;
            }
            else{
                x+=1;
            }
        }
        while(x <= n);
    }
}
even(110021);