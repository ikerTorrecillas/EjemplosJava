console.log("Promesas");

const condition = true;
// Una promesa es un objeto pendiente a resolver un proceso
// Una promesa necesita realizar un callback, necesita 2 argumentos

const myPromise = new Promise((resolve, reject) => {
    serTimeout(() => {    
    if  (condition) resolve()
    else reject()
    }, 1000)

    // con el setimeout veriamos como tarda un segundo en resolver la promesa
})

myPromise.then(() => console.log("La promesa se ha resuelto"))