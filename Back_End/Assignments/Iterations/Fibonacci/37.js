function main(){
    fibonacci(5000)
}
main();

function fibonacci(n){
    let previous = 0;
    let current = 1;
    let next = 0;
    for(let i = 1; i <= n; i++){
        console.log(previous);
        next = previous + current;
        previous = current;
        current = next;
    }
}