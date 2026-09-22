console.log("Promesas");

const condition = true; 

const myPromise = new Promise((resolve, reject) => {
    serTimeout(() => {    
    if  (condition) resolve()
    else reject()
    }, 1000)

    
})

myPromise.then(() => console.log("La promesa se ha resuelto"))