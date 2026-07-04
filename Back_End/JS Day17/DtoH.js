function DtoH(num){
    let binary = new Array(); 
    for(let div = 2; num > 0; num = Math.floor(num / div)){
        binary.push(num % div);
    }
    binary.reverse()
    console.log(binary.join(""));
    // let convert = new Array();
    // for(let count = 0; count < binary.length; count+=4){
    //     console.log(binary.slice(count, count + 4));
    // }
}
function binary(n) {
    let result = [];

    for (; n > 0; n = Math.floor(n / 2)) {
        result.push(n % 2);
    }

    result.reverse();

    console.log(result.join(""));
}

binary(10);
DtoH(1000);