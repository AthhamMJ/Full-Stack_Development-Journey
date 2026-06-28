function cloneup(digit){
    for(let row = 1; row <= digit; row++){
        let clone = "";
        for (let col = 1; col <= row; col++){
            clone += row;
        }
        console.log(clone);
    }
}
cloneup(5)