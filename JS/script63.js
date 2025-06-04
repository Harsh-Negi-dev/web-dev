// let arr = [1, 2, 4, 5, 7];
// console.log(arr, typeof arr);
// console.log(arr.length);
// console.log(arr[2]);
// arr[2] = 45;
// console.log(arr[2]);
// console.log(arr.toString());
// console.log(arr.join(" and "));

// let brr = [1, 2, 3, 4, 5, 6];
// console.log(brr.pop());
// console.log(brr);

// console.log(brr.push(9));
// console.log(brr);

// console.log(brr.push("Harsh"));
// console.log(brr);

// console.log(brr.shift());
// console.log(brr);

// console.log(brr.unshift(0));
// console.log(brr);

// console.log(delete brr[3]);
// console.log(brr);

// console.log(brr.concat(arr)); //does not change original array
// console.log(brr);

// let crr = [5, 2, 7, 9, 4];
// console.log(crr.sort());

// crr.splice(1, 2, 222, 333); //remove 2 elements from index 1 and append remaining numbers
// console.log(crr);

let array = [1, 4, 2, 3, 9];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// array.forEach((value, index, array) => {
//     console.log(value, index, array);
// });

// let obj = {a: 1, b: 2, c: 3};
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element);
//     }
// }

// for (const element of array) {
//     console.log(element);
// }

// let newArray = [];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newArray.push(element**2);
// }
// console.log(newArray);

// let nayaArray = array.map((e, index, array)=>{
//     return e**2;
// });
// console.log(nayaArray);

// const greaterThanSeven = (e)=>{
//     if (e > 7){
//         return true;
//     }
//     return false;
// }
// console.log(nayaArray.filter(greaterThanSeven))


// let arr2 = [1, 2, 3, 4, 5, 6];
// const red = (a, b)=>{
//     return a*b;
// }
// console.log(arr2.reduce(red));


console.log(Array.from("harsh"));