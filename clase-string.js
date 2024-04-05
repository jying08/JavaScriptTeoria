//creacion de strign 3 formas

const primeraOpcion='comillas simples'
const segundaOpcion='comillas simple'
const terceraOpcion=`comillas cimple`

//concatenacion: Opcion +

const direccion='Calle falsa 123'
const ciudad='Pomabamba'
const direccionCompleta='Mi direccion completa es '+ direccion+ciudad
console.log(direccionCompleta);

//2 concatenacion: Template Literals

const nombre='Estefany'
const pais='o'
const presentacion=`Hola, soy ${nombre} de ${pais}`
console.log(presentacion);

//3 concatenacion: join()

const primeraParte='Me encanta'
const segundaParte='la gente de'
const terceraParte='mexico'
const pensamiento=[primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' * '));

//4 Concatenacion: concat()

const hobbie1='leer'
const hobbie2='jugar'
const hobbie3='estudiar'
const hobbies='Mis hobbies son: '.concat(hobbie1,', ',hobbie2,', ',hobbie3)
console.log(hobbies);


// Caracteres de escape
//const whatDoIDo='I'm software engineer'

// 1. Escape alternativo
const escapeAlternativo="I'm Software engineer"

//2. Barra invertida
const barraInvertida='I\'m Software engineer'

//3. Template literals
const escapeComillaInvertida=`I'm Software Engineer`

//Escritura de String Largos
/*
Las rosas son rojas,
Las violestas son azules,
Caracter inesperado,
En la linea 86.
 */

const poema='Las rosas son rojas,\n'+
            'Las violestas son azules,\n'+
            'Caracter inesperado,\n'+
            'En la linea 86.'

console.log(poema);

const poema2='Las rosas son rojas,\n\
Las violestas son azules,\n\
Caracter inesperado,\n\
En la linea 86.'

console.log(poema2);

const poema3=`Las rosas son rojas,
Las violestas son azules,
Caracter inesperado,
En la linea 86.`

    console.log(poema3);