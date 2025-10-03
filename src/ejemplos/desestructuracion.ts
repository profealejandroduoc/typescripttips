const persona={
    nombre:"wacoldo",
    edad:40,
    id:"waco",

}


console.log(persona);
//const clave=persona.id
//const nombre=persona.nombre

//desetructurar los atributos en variables independientes
const {id,nombre,edad}=persona;
console.log(id,nombre,edad);

//crear una interfaz para utilizar los datos
interface Alumno{
    id:string,
    nombre:string,
    edad:number;
    carrera?:string | undefined
}

const useContext=({id,nombre, edad, carrera="suspendido"}:Alumno)=>{
    return {
        key:id,
        datosPersona:{
            nombre:nombre,
            edad,
        },
        carrera
    }
}

const contexto=useContext(persona)

console.log(contexto);

const {key,carrera,datosPersona:{nombre:usuario}}=contexto;

console.log("Aqui estoy......");
console.log(key,carrera,usuario);









