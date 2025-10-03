const juegos=["Lol","Arma","Valo","Pacman"]
const [j1,j2,j3,j4]=juegos
console.log(j1,j2,j3,j4);


const [,otrogame,,game]=juegos

console.log(game, otrogame);

const retornaArreglo=()=>{
    return ["Baldur's Gate",2021,"Larian"] as const  
}


const [titulo, año, estudio]=retornaArreglo();
console.log(titulo,año,estudio);