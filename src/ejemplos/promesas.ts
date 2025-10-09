const promesa=new Promise((resolve, reject)=>{
    setTimeout(() => {
        //resolve(7.0)
        reject("No se saco más de un 4")
    }, 4000);
})


console.log("Esperando respuesta....");

promesa.then((valor)=>{
    console.log(`Realmente se saco un ${valor}`);
}).catch((reason)=>{
    console.log(reason);
    console.log("Puras falaziaaaaa ceaza shansho eseee");
}).finally(()=>{
    console.log("Me da lo mismo.....");
})