//Social Media Profile

//1. User informacion
const username='codingAdventurer'
const fullName='Jhimy Diestra'
const age=25
const isStident=true


//2. Address

const Address={
    street:'123 Main Street',
    city:'Techville',
    state:'Codingland',
    zipCode:54321
}

//3. Hobbies

const hobbies=['Coding','Reading','Gaming']

//4. Generating personalized bio

const personalizedBio=`Hola soy ${fullName}.
Yo tengo ${age} años.
yo vivo en ${Address.city}.
I love ${hobbies.join(', ')}.
Folloe e for codifn efejfe`

//5 Print the User profile and bio
console.log(personalizedBio);