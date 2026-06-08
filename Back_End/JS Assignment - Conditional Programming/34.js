function weather(temp){
    let t = temp;
    if (t > 0){
        console.log("The Temperature of outside is Positive" + t + " degrees");
    }
    else if (t == 0){
        console.log("The Temperature of outside is " + t + " degrees");
    }
    else{
        console.log("The Temperature of outside is Negative " + t + " degrees");
    }
}
weather(-8);