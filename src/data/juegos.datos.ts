export interface Juego{
    titulo:string,
    año:number;
    categoria:Categoria
}

export enum Categoria{
    Rol='rol',
    FPS='fps',
    Accion='accion',
    Rata='rata'
}


export const juegos:Juego[]=[
    {   
        titulo:'Roblox',
        año:2015,
        categoria:Categoria.Rata
    },
    {   
        titulo:`Baldur's Gate`,
        año:2021,
        categoria:Categoria.Rol
    },
    {   
        titulo:`Battlefield`,
        año:2025,
        categoria:Categoria.Accion
    }
]


//console.log(juegos);