 //Create a sting icluded all the contents of array that seperated by comma
function Array(){
    let fruits = ['Tangerine', 'Lemon', 'Mango', 'Apple', 'Pine-Apple', 'Avacado', 'Jack', 'Mangustine', 'Dragon'];
    let fruit_string = ""
    for(let i = 0; i < fruits.length; i++){
        fruit_string += fruits[i] + ", "
    }
    console.log(fruit_string);
}
Array();