function main(){
    fivefor();
    fivewhile();
}

// function fivewhile(){
//     let x = 1;
//     while(x <= 100){
//         if(x % 2 == 5){
//             console.log(x);
//             x++;
//         }
//         else{
//             x++;
//         }
//     }
// }

function fivefor(){
    for(let n = 1; n <= 100; n++){
        if (n % 5 == 0){
            console.log(n);
        }
    }
}
main();