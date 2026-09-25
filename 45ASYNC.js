console.log("Promesas");

const condition = true; 


function myFunction() {
    return new Promise((resolve, reject) => {
        serTimeout(() => {    
        if  (condition) resolve("funciona perfectamente xd")
        else reject("error")
        }, 1000)   
    })
}


function myFunction2() {
    return new Promise((resolve, reject) => {
        serTimeout(() => {    
        if  (condition) resolve("funciona perfectamente 2")
        else reject("error")
        }, 1000)   
    })
}

//myFunction()
//.then((response) => {
//    console.log(response);
//    return myFunction2
//})
//.then((res) => console.log (res))
//.catch((error) => console.log(error))

//nuevas sintaxis xd
// función que gestiona contenido asincrono
async function handlePromise() {
    try {
    const response = await myFunction();   
    console.log(response);
    const response2 = await myFunction2();
    console.log(response2);
    } catch (error){
        console.log(error);
    }
}

handlePromise();