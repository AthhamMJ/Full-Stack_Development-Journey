function main(){
    fibonacci()
}
main();

function fibonacci(){
    let previous = 0;
    let current = 1;
    let next = 0;
    for(let i = 1; i < 20; i++){
        console.log(previous);
        next = previous + current;
        previous = current;
        current = next;
    }
}