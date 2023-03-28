let oneRes = document.getElementById('first');
let twoRes = document.getElementById('second');
let treeRes = document.getElementById('third');
let fourRes = document.getElementById('fourth');

function result(a, b) {
    let first = a + b;
    let second = a - b;
    let third = a * b;
    let fourth = a / b;
    if (first>0){
        oneRes.style.color = "green"
    }else{
        oneRes.style.color = "red"
    }
    if (second>0){
        twoRes.style.color = "green"
    }else{
        twoRes.style.color = "red"
    }
    if (third>0){
        treeRes.style.color = "green"
    }else{
        treeRes.style.color = "red"
    }
    if (fourth>0){
        fourRes.style.color = "green"
    }else{
        fourRes.style.color = "red"
    }
    oneRes.textContent = `Сумма ${first}`;
    twoRes.textContent = `Вычитание  ${second}`;
    treeRes.textContent = `Умножение ${third}`;
    fourRes.textContent = `Деление ${fourth}`;
}
result(5, 8);


// function myArray(arr) {
//     let min = arr[0];
//     let max = min;
//     let sum = 0;
//     for (let i = 0; i < arr.length; ++i) {
//         if (typeof arr[i] === "number") {
//             if (arr[i] > max) max = arr[i];
//             if (arr[i] < min) min = arr[i];
//             sum = sum + arr[i];
//         }
//     }
//     console.log(max);
//     console.log(min);
//     console.log(sum);
// }

// myArray([1, 2, 3, 4, 12, 'string', 7, undefined, 8, 9]);
