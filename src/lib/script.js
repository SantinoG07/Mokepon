
function prueba(){
let confirmarselec = document.getElementById('button-confirmar')
let cardmokepon
let Mokepones = []
class Mokepon {
    constructor(vida, nombre, foto, descripcion) {
        this.vida = vida
        this.foto = foto
        this.nombre = nombre
        this.ataques = []
        this.descripcion = descripcion
    }
}

let ratigueya = new Mokepon(5, 'Ratigueya', '/ratigueya.png', 'Aca va la pequeña descripcion')
let hipodoge = new Mokepon(5, 'Hipodoge', '/hipodoge.png', 'Aca va la pequeña descripcion')
let capipepo = new Mokepon(5, 'Capipepo', '/capipepo.png', 'Aca va la pequeña descripcion')

ratigueya.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
)
hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
)
capipepo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
)

Mokepones.push(ratigueya, hipodoge, capipepo)

let opcionesmasc = document.getElementById('opc-mascotas')


function inicializarjuego(){
    Mokepones.forEach((Mokepon)=>{
        cardmokepon = `
        <div class="bg-black w-70 h-100 rounded-2xl shadow-2xl flex flex-col">
        <label class='flex flex-1 flex-col'>
        <input type="radio" class="hidden"/>
            <img src="${Mokepon.foto}"/>
            <h1 class="text-white text-center mt-10">${Mokepon.nombre}</h1>
            <h3 class='text-white m-4'>${Mokepon.descripcion}</h3>
            <p class="text-right pr-4 pb-4 mt-auto">${Mokepon.ataques.map(a => a.nombre).join(' ')}</p> 

            </label>
        </div>
        `
    //El map lo que hace es un array temporal el cual filtra segun la condicion que le pongamos, el join separa con un espacio cada elemento

        opcionesmasc.innerHTML+=cardmokepon

    })
    
    
}
inicializarjuego()
confirmarselec.addEventListener('click',ocultar)

}

function ocultar(){
    let sectionselec = document.getElementById('section-selec-masc')
    sectionselec.style.display='none'
}

window.addEventListener('load', prueba)