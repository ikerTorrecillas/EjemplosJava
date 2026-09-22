//callback
function f(cb) {
    const p1 = "Param 1"
    const p2 = "Param 2"

    cb(p1, p2);
}

function g(param1, param2) {
    console.log(param1, param2);
}

f(g)

f((param1, param2) => {
    console.log(param1, param2);
})



// Repetir funciones

function repeat(times, cb) {
    for (let i = 0; i < times; i++) {
        cb(i);
    }
}

repeat(3, (i) => {
    console.log(`Iteracion ${i}`);
})

// versión array

const numbers = [10, 20, 30];

numbers.forEach((number) => {
    console.log(number);
})