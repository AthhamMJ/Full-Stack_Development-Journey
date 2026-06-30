function main(){
    onetotwenty(20);
    sumfifty(5);
    multable(10);
    factorial(5);
    reverse(23547);
    sumofdigit(12345);
    palindrome(100);
    prime(100);
    factor(28);
    fibenocci(28);
    large(1254536569);
}

function onetotwenty(n){
    for(let count = 1; count <= n; count++){
        console.log(count);
    }
    console.log("");
}

function sumfifty(n){
    let sum = 0;
    for(let count = 1; count <= n; count++){
        sum+=count;
    }
    console.log(sum);
    console.log("");
}

function multable(n){
    for(let count = 1; count <= n; count++){
        console.log(count+ " X " +n+ " = " + (count * n));
    }
    console.log("");
}

function factorial(n){
    let fact = 1
    for(; n > 0; n--){
        fact *= n
    }
    console.log(fact)
    console.log("");
}

function reverse(n){
    let reverse = 0;
    //reversing the number
    for(let digit; n > 0;){
        digit = n % 10;
        console.log(digit);
        n = Math.floor(n / 10);
        reverse = reverse * 10 + digit
    }
    console.log(reverse);
    console.log("");
}

function sumofdigit(n){
    let sum = 0;
    for(; n > 0; n = Math.floor(n / 10)){
        sum += (n % 10);
    }
    console.log(sum);
    console.log("");
}


function palindrome(n) {
    let reverse = 0;
    for(let i = 1; i < n; i++){
        let number = i;
        let reverse = 0
        for (; number > 0; number = Math.floor(number / 10)) {
            reverse = reverse * 10 + (i % 10); 
        }
        if(reverse === i){
            console.log(i);
        }
    }
    console.log("");
}

function prime(n){
    for(let count = 2; count <= 100; count++){
        let prime = true;
        for(let div = 2; div <= Math.sqrt(count); div++){
            if(count % div === 0){
                prime = false;
                break;
            }
        }
        if(prime){
            console.log(count);
        }
    }
    console.log("");
}

function factor(n){
    for(let div = 1; div <= (n/2); div++){
        if(n % div == 0){
            console.log(div+" X "+ (n / div)+ " = "+ n);
        }
    }
}

function fibenocci(n){
    for(let div = 1; div <= (n/2); div++){
        if(n % div == 0){
            console.log(div+" X "+ (n / div)+ " = "+ n);
        }
    }
    console.log("")
}

function large(n){
    numarray = [];
    for(; n > 0; n = Math.floor(n / 10)){
        numarray.push(n % 10)
    }
    let max = numarray[0]
    for(let i = 1; i < numarray.length; i++){
        if(max < numarray[i]){
            max = numarray[i]
        }
    }
    console.log(max);
}
main();