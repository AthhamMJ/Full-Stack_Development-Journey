function evenArray(n){
    let even = [];
    for(let i = 1; i < n; i++){
        if(i % 2 == 0){
            even.push(i);
        }
        else{
            continue;
        }
    }
    console.log(even);
}
evenArray(10);