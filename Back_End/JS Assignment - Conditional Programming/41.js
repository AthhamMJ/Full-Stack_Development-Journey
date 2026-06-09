function grade(marks){
    let m = marks;
    if (m <= 100){
        if (m >= 80){
            console.log("The Grade is D = "+m);
        }
        else if (m >= 70){
            console.log("The Grade is B = "+m);
        }
        else if (m >= 60){
            console.log("The Grade is C = "+m);
        }
        else if (m >= 50){
            console.log("The Grade is S = "+m);
        }
        else{
            console.log("The Grade is F = "+m);
        }

    }
}
grade(54);0