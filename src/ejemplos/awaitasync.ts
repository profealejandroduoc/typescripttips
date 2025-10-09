import type { Drink, Drinks } from "../interfaces/drinks";

const obtenerCocktails = async():Promise<Drinks | undefined>  => {
    //https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
    //const response=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
    const response=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`)
    const data:Drinks= await response.json()
    //console.log(data);
    return data
 }

 //obtenerCocktails()

async function obtenerDrinkxId():Promise<Drink | undefined> {
    const response=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`)
    const data:Drinks= await response.json()
    const trago:Drink=data.drinks[0]
    //console.log(data.drinks[0].strDrinkThumb);
    return trago
}
//obtenerDrinkxId()

async function obtenerImagenxId():Promise<string | undefined> {
    const response=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15300`)
    const data:Drinks= await response.json()
    //console.log(data.drinks[0].strDrinkThumb);
    return data.drinks[0].strDrinkThumb
}


const ImgComponent = (url:string)=>{
    //<img>
    const etiquetaImg=document.createElement('img');
    etiquetaImg.src=url;
    etiquetaImg.width=250;
    document.body.appendChild(etiquetaImg)
}

obtenerImagenxId().then((datos)=>{
    if (datos!==undefined)ImgComponent(datos);
}).catch((reason)=>{
    console.error(reason);
})



 //obtenerCocktails()