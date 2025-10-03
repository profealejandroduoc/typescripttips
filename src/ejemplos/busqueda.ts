import { juegos, type Juego } from "../data/juegos.datos"


const juegoxTitulo=(tituloBuscado:string):Juego | undefined =>{
    const game=juegos.find(j=>{
        return j.titulo==tituloBuscado
    })

    return game;
}


console.log(juegoxTitulo('sdsad'));


