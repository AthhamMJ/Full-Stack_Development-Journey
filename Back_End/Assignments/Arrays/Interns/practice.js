function main(){
    let matrix1 = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                ];
    let num = 3;
    console.table(matrixCalc(matrix1, num, '+'));

}
main();

function matrixCalc(matrix1, num, operator){
    let newmatrix = [];
    for(let i = 0; i < matrix1.length; i++){
        newmatrix[i] = [];
        for(let j = 0; j < matrix1.length; j++){
            newmatrix[i][j] = (operatorSelector(matrix1, num, operator, i, j));
        }
    }
    return newmatrix;
}


function operatorSelector(matrix1, num, operator, i, j){
    switch(operator){
        case '+':
            return matrix1[i][j] + num;
        case '-':
            return matrix1[i][j] - num;
        case '*':
            return matrix1[i][j] * num;
        case '/':
            return matrix1[i][j] / num;
    }
}