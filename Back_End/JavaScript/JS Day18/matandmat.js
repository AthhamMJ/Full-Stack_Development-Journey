function main(){
    let m1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
    let m2 = [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18],
    ]
    matrix(m1, m2);

}

function matrix(m1, m2){
    let m3 = [];
    for(let i = 0; i < m1.length; i++){
        m3[i] = [];
        for(let j = 0; j < m2[i].length; j++){
            let sum = 0;
            for(let k = 0; k < m1[i].length; k++){
                sum += m1[i][k] * m2[k][j];
            }
            m3[i].push(sum);
        }
    }
    console.table(m3);
}

main();