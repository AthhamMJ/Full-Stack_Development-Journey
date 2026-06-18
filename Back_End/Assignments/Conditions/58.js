function type(password){
    let p = password;
    if( p >= 'A' && P < 'Z' || p >= 'a' && P < 'z' ){
        console.log("It's a Alphabet Bro");
    }
    else if ( p >= 0 && p <= 9){
        console.log("This is Number");
    }
    else{
        console.log("It's special charecter");
    }
}
type(2);