function main(){
    square(100);
}
function square(number){
    for(let n = 1; n <= number; n++){
        console.log(n*n*n);
    }
}
main();