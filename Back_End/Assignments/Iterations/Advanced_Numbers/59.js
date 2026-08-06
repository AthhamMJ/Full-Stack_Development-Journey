function BtoD(num){
    let n = num;
    let count = 0;
        for(;n > 0; n = Math.floor(n/10)){
            count++;
        }
        console.log(count);
        let decimal = 0;
        for(let position = 0; position < count; position++){
            decimal += (num % 10) * Math.pow(2, position);
            num = Math.floor(num/10);
        }
        console.log(decimal);
}
BtoD(1111);