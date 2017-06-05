// Programación funcional

// 1. Inmutabilidad - valores
var a = [1, 2, 3, 4];
a[0] = 10 // No es funcional

var b = a.map((x) => x*2); // Es funcional
console.log(a, b);

// 2. Funciones como parametros, funciones que retornan funciones (Funciones de orden superior)
// Reutilización de código
var suma = (a, b) => {
    return a + b;
}

var suma2 = (a) => {
    return (b) => {
        return a + b;
    }
}

var sumar10 = suma2(10);

var f = (callback) => {
    if (typeof callback == 'function') {
        callback();
    }
}

// 3. En P.F siempre se debe regresar un resultado único
// raíz cuadrada de 4 = 2 ó -2 // No es funcional


console.log(suma(2, 2), sumar10(7));

