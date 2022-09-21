const log = function (a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

//Выдаст нам -> basic rest [ 'operator', 'usage' ]

// ...rest всегда размещается в последнюю очередь после всех остальных параметров.
// Его результат это массив



function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3, 5);
// Выдаст нам -> 15

calcOrDouble(3);
// Выдаст нам -> 6