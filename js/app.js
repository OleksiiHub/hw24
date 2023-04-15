

function result(a, b) {
    let first = a + b;
    let second = a - b;
    let third = a * b;
    let fourth = a / b;
    console.log(`Сумма ${first}, вычитание  ${second}, умножение ${third}, деление ${fourth}`);
}
result(5, 8);


function myArray(arr) {
    let min = arr[0];
    let max = min;
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (typeof arr[i] === "number") {
            if (arr[i] > max) max = arr[i];
            if (arr[i] < min) min = arr[i];
            sum = sum + arr[i];
        }
    }
    console.log(max);
    console.log(min);
    console.log(sum);
}

myArray([1, 2, 3, 4, 12, 'string', 7, undefined, 8, 9]);


function operations(a, b) {
    if (typeof a && typeof b === 'number') {
        return console.log(`Сумма ${a+b}, вычитание ${a-b}, умножение ${a*b}, деление ${a/b}`)
    }
}

operations(5, 8);
