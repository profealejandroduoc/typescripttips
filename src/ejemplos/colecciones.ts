let arreglo:number[]=[10,20,30,40,50,60]
console.log(arreglo);

console.log(arreglo[3]);
console.log(arreglo.length);
arreglo.push(70)
console.log(arreglo);

console.log("CON FOR NORMAL");
for (let index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index]);
    
}
console.log("CON FOR EACH");
arreglo.forEach(element => {
        console.log(element);
});


const arreglo2:number[]=[100,200,300,400]
//console.log("Version PRO");
//arreglo.forEach(console.log)
//arreglo=arreglo.concat(arreglo2)



// arreglo2.forEach(it=>{
//     arreglo.push(it)
// })

arreglo.push(...arreglo2)
console.log(arreglo);

const arreglo3:number[]=[5,6,7,8,9]
arreglo.unshift(...arreglo3)

console.log(arreglo);