function oddArray(n){
    let odd = [];
    for(let i = 0; i < n; i++){
        if(i % 2 != 0){
            odd.push(i);
        }
        else{
            continue;
        }
    }
    console.log(odd);
}
oddArray(10);