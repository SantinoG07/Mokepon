//Creacion de las variables
let inputratigueya
let inputcapipepo
let inputhipodoge
let mascenemigo
let ataques

//Obtencion de los elementos (Getters)
let confirmarmasc = document.getElementById('button-confirmar-masc')
let opcionesmasc = document.getElementById('div-opc-mascotas')
let sectioncombate = document.getElementById('section-combate')
let divimagescombate = document.getElementById('div-images')
let divvidas = document.getElementById('div-vidas')
let divbuttons = document.getElementById('div-buttons')


//Eventos de los getters
confirmarmasc.addEventListener('click', confirmarseleccion)




//Creacion de los mokepones
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



//Array de mokepones
let Mokepones = []
Mokepones.push(ratigueya, hipodoge, capipepo)





function cargarjuego() {

    sectioncombate.style.display='none'

    Mokepones.forEach((Mokepon) => {
        let cardmokepon = `
        <div class="bg-black w-70 h-100 rounded-2xl shadow-2xl flex flex-col">
        <label class='flex flex-1 flex-col' for=${Mokepon.nombre}>
        <input type="radio" class="hidden" name="mokepones" id=${Mokepon.nombre} value=${Mokepon.nombre}/>
            <img src="${Mokepon.foto}"/>
            <h1 class="text-white text-center mt-10">${Mokepon.nombre}</h1>
            <h3 class='text-white m-4'>${Mokepon.descripcion}</h3>
            <p class="text-right pr-4 pb-4 mt-auto">${Mokepon.ataques.map(a => a.nombre).join(' ')}</p> 

            </label>
        </div>
        `
        //El map lo que hace es un array temporal el cual filtra segun la condicion que le pongamos, el join separa con un espacio cada elemento
        
        
        opcionesmasc.innerHTML += cardmokepon

    })

        inputratigueya = document.getElementById('Ratigueya')
        inputcapipepo = document.getElementById('Capipepo')
        inputhipodoge = document.getElementById('Hipodoge')

}

function confirmarseleccion() {
    sectioncombate.style.display='block'
    let sectionselec = document.getElementById('section-selec-masc')
    sectionselec.style.display = 'none'
    selecmascenemigo()

    if(inputratigueya.checked){
        combate('ratigueya')
    }else if(inputcapipepo.checked){
        combate('capipepo')
    }else if(inputhipodoge.checked){
        combate('hipodoge')
    }
}

function combate(nombre){

    let imagenjugador = document.createElement('img')
    imagenjugador.src = `/${nombre}.png`
    imagenjugador.classList.add('w-32', 'h-auto')
    imagenjugador.innerHTML = nombre

    divimagescombate.appendChild(imagenjugador)

    let imagenenemigo = document.createElement('img')
    imagenenemigo.src = `/${mascenemigo}.png`
    imagenenemigo.classList.add('w-32', 'h-auto')

    imagenenemigo.innerHTML = nombre

    divimagescombate.appendChild(imagenenemigo)

    ataques.forEach(ataque =>{
    let buttonsataque = `<button>${ataque.nombre}</button>`

    divbuttons.innerHTML += buttonsataque
    }

    )



}

function selecmascenemigo(){
    let numero = aleatorio(1,3)
    if(numero==1){
        mascenemigo = "ratigueya";
    }else if(numero==2){
        mascenemigo = "hipodoge"
    }else {
        mascenemigo = "capipepo"
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', cargarjuego)