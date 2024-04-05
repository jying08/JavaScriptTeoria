// String primitivos

const stringPrimitivos='Soy un string primitivo'
console.log(typeof stringPrimitivos);

const strignPrimitivoTambien=String('Soy un estring primitivo')
console.log(typeof strignPrimitivoTambien);

// String Objeto
const stringObjeto= new String('Soy un string objeto')
console.log(typeof stringObjeto);

// Acceder a caracteres
 const saludo='Hola. ¿Como estas?'

 console.log(saludo[2])
 console.log(saludo.charAt(2))
 console.log(saludo.indexOf('o'))
 console.log(saludo.indexOf('Como'))
 console.log(saludo.indexOf('como'))
 console.log(saludo.lastIndexOf('o'))
 console.log(saludo.slice(3,5))
 console.log(saludo.length)
 console.log(saludo.toLocaleUpperCase())
 console.log(saludo.toLocaleLowerCase())

 const saludoDividido=saludo.split(' ')
 console.log(saludoDividido)
 console.log(saludoDividido[1])

 const saludoConEspacios=' Hola mundo '
 const saludoSinEspacios=saludoConEspacios.trim()
 console.log(saludoSinEspacios);

 const salidoOriginal='Hola mundo'
 const nuevoSaludo=salidoOriginal.replace('mundo','todo el mundo')
 console.log(nuevoSaludo);
