function main(){
    let mat1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let mat2 =  [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18]
    ];
    let mat3 = [];

    mattomat(mat1, mat2, mat3);
}

function mattomat(mat1, mat2, mat3){
    for(let i = 0; i < mat1.length; i++){
        mat3[i] = [];
        for(let j = 0; j < mat2.length; j++){
            let answer = 0
            for(let k = 0; k < mat2[j].length; k++){
                answer = (mat1[i][k] * mat2[k][j])
            }
            mat3[i].push(answer);
        }
    }
    console.table(mat3)
}

main();