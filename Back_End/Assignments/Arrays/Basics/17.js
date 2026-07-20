 //reverse an array
function Array(){
    let fruits = ['Tangerine', 'Lemon', 'Mango', 'Apple', 'Pine-Apple', 'Avacado', 'Jack', 'Mangustine', 'Dragon'];
    let reverse = []
    for(let i = fruits.length - 1; i > 0; i--){
        reverse.push(fruits[i])
    }
    console.log(reverse);
}
Array();