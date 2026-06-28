function alpha(digit){
    for(let row = 1; row <= digit; row++){
        let clone = "A";
        for (let col = 1; col <= row; col++){
            clone += row;
        }
        console.log(clone);
    }
}
alpha("ABCD");