function amstrong(num){
    let n = num; 
    let power = 0;
    for(let count = 1; count < num; count++){
        if(num > 1 && num < 10){
            console.log(count);
        }
        else{
            const digitarray = [];
            for(let digit = 0; count > 0;){
                digit = count % 10;
                power++;
                digitarray.push(digit);
                conut = Math.floor(count / 10);
            }
            console.log(power)
            console.log(digitarray)
            let sum = 0;
            for(let i = 0; i < digitarray.length; i++){
                sum += Math.pow(digitarray[i], power);
                if(sum == n){
                    console.log(sum);
                }
                else{
                    break;
                }
            }
        }
    }
}
amstrong(9);