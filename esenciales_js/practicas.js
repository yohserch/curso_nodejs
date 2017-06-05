// Programación OO (POO)
// ES6 Class

var Objeto = function() {

}

Objeto.prototype.Saludar = function(msg, callback) {
    console.log("Saludo", msg);
    if (typeof callback == 'function') {
        callback();
    } else {
        console.log("Callback no es una función");
    }
    
}

// Instanciar
var o = new Objeto()
o.Saludar("Hola mundo", function() {
    console.log("Callback ejecutado");
});

o.Saludar("Hey...", 5);

Objeto.prototype.Despedirse = function() {
    console.log("Adios");
}

o.Despedirse();