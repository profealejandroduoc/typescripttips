const persona={
    nombre:"Wacoldo",
    apellido:"Soto",
    edad:40,
    telefonos:{
        tel1:"987545545",
        tel2:"987455452"

    }
}

console.log("PERSONA ORIGINAL");
console.log(persona);
//console.log(persona.nombre);
//console.log(persona.telefonos.tel2);

//const p2=persona  //referencia la misma posicion de memoria
const p2=structuredClone(persona)

//console.log("PERSONA COPIA");
//console.log(p2);
p2.nombre="Diogenes"
p2.telefonos.tel1="0303456"
console.log(persona);
console.log(p2);

console.log("COMPARANDO PERSONAS");
console.log(persona,p2);