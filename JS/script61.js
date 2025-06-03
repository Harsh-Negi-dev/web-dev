function sum(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function mul(a, b){
    return a * b;
}
function div(a, b){
    return a / b;
}
function expo(a, b){
    return a ** b;
}
console.log("enter 1 for addition, 2 for subtraction, 3 for multiplication and 4 for division");
let random = Math.random();
let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let c = Number(prompt("Enter operation: "));
if (random > 0.1){
    if (c == 1){
        let res = sum(a, b);
        console.log(res);
    }
    else if (c == 2){
        let res = sub(a, b);
        console.log(res);
    }
    else if (c == 3){
        let res = mul(a, b);
        console.log(res);
    }
    else if (c == 4){
        let res = div(a, b);
        console.log(res);
    }
    else{
        console.log("Invalid Number");
    }
}
else{
    if (c == 1){
        let res = sub(a, b);
        console.log(res);
    }
    else if (c == 2){
        let res = div(a, b);
        console.log(res);
    }
    else if (c == 3){
        let res = sum(a, b);
        console.log(res);
    }
    else if (c == 4){
        let res = expo(a, b);
        console.log(res);
    }
    else{
        console.log("Invalid Number");
    }
}