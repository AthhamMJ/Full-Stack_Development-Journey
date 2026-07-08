//Check the index of A GIVEN value. 
function Array(){
    let fruits = ['Tangerine', 'Lemon', 'Mango', 'Apple', 'Pine-Apple', 'Avacado', 'Jack', 'Mangustine', 'Dragon'];
    for(let i = 0; i < fruits.length; i++){
        if(fruits[i] == 'Avacado'){
            console.log(fruits[i] + " found in Index : "+ i);
            break;
        }
        else{
            continue;
        }
    }
}
Array();