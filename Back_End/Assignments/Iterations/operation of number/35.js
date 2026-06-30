function fibbenochi(){
    let first= 1;
    let second = 1;
    let next = 1;
    for(;next <= 10;){
        console.log(first)
        console.log(second)
        next = first + second
        console.log(next)
        second++;
        first = next - first
    }
}
fibbenochi();
//undder investigation