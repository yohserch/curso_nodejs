var arr = [6, -23, 12, 45, -9, 0, 1, 4, 99];

// forEach - iterador
arr.forEach((a, b) => console.log(a, b));

var resultado = arr.filter((valor) => valor > 0);

console.log(resultado);

var result = arr.map((valor) => {
    // manipulación de datos
    return valor*valor;
}).filter((x) => x > 2000);

console.log(result);

// reduce
var r = arr.reduce((a,b) => a+b, 0);
console.log(r);