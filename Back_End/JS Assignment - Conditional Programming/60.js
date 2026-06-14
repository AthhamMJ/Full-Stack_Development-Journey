function price(order){
    if (order >= 100000){
        console.log("Free Delivery to this Customer")
    }
    else{
        console.log("Not eligible to get free Delivery")
    }
}
price(120000);