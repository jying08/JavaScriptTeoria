//tipo de dato complejo
let frutas={
    uva:'🍇'
}
let vegetales=frutas //le pasa el puntero 
vegetales.uva='🔴'

console.log(frutas);


let ropa={
    blusa:'👄'
}

ropa.corazon='❤️'

console.log(ropa);


function Usuario(name,habitacion,precio,categoria)
{
    this.name=name
    this.habitacion=habitacion
    this.precio=precio
    this.categoria=categoria
}

let primeroU=new Usuario('joss','403',400,2)

console.log(primeroU);

let newName='Astrid'
primeroU.name=newName

console.log(primeroU);