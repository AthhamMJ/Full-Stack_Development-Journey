function main() {
    const num = [];
    console.log(Random(num));

}

function Random(num) {
    let max = num[i];
    for (let n = 1; n <= 10; n++) {

        let random = Math.floor(Math.random()*100);

        num.push(random);
    }
    for(let i = 0; i < length.num; i++){
        if(num[i] > max){
            max = num[i];
        }
    }
    return max;
}
main();