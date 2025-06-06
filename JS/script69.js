// function factorial(numb) {
//     let fact = 1;
//     for (let index = 1; index <= numb; index++) {
//         fact *= index;
//     }
//     return fact;
// }
// console.log(factorial(9));

function factorial_recursion(numb) {
    if (numb == 1 || numb == 0) {
        return 1;
    }
    return numb * factorial_recursion(numb - 1);
}
console.log(factorial_recursion(5));