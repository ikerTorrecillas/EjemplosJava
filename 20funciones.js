// Funciones declaradas (Function declarations)

function sayHello() {
    console.log("Hola");
}

sayHello();


// Funciones expresadas (Function expressions)

const sayGoobye = function() {
    console.log("Adios");
}

sayGoobye();

// Funciones con argumentos

function saySomething(msg) {
    console.log(msg);
}

saySomething("mostrar por parametro");
saySomething("mostrar segundo mensaje")


function sum(num1, num2) {
    console.log(num1 + num2);
}

sum(3, 4);

// Valores por defecto

function greet(name = "Invitado") {
    console.log (`hola, ${name}`);
}

 greet("David");
 greet();

// Return

function multiply(n1, n2) {
    return n1 * n2;
}

const resultado = multiply (3, 4);
console.log(resultado);
