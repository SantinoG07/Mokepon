//Creacion de las variables
let inputratigueya
let inputcapipepo
let inputhipodoge
let mascenemigo
let ataques
let ataquesB = []
let ataquesBE = []
let botones = []

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

let ratigueya = new Mokepon(5, 'Ratigueya', '/Ratigueya.png', 'Aca va la pequeña descripcion')
let hipodoge = new Mokepon(5, 'Hipodoge', '/Hipodoge.png', 'Aca va la pequeña descripcion')
let capipepo = new Mokepon(5, 'Capipepo', '/Capipepo.png', 'Aca va la pequeña descripcion')

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
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
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' }
)



//Array de mokepones
let Mokepones = []
Mokepones.push(ratigueya, hipodoge, capipepo)





function cargarjuego() {

    sectioncombate.style.display='none'

    Mokepones.forEach((Mokepon) => {
        let cardmokepon = `
        <label class='flex flex-1 flex-col bg-black rounded-2xl has-[input:checked]:bg-gray-500 transition-all duration-500' for=${Mokepon.nombre}>
        <input type="radio" class="hidden peer" name="mokepones" id=${Mokepon.nombre} value=${Mokepon.nombre}/>
            <img src="${Mokepon.foto}"/>
            <h1 class="text-white text-center mt-10">${Mokepon.nombre}</h1>
            <h3 class='text-white m-4'>${Mokepon.descripcion}</h3>
            <p class="text-right pr-4 pb-4 mt-auto">${Mokepon.ataques.map(a => a.nombre).join(' ')}</p> 

            </label>
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
        combate('Ratigueya')
    }else if(inputcapipepo.checked){
        combate('Capipepo')
    }else if(inputhipodoge.checked){
        combate('Hipodoge')
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

    cargarAtaques(nombre)


    ataquesB.forEach((ataque) =>{
        let boton = `<button class="bg-amber-700 p-2 m-3 rounded-2xl Bataque" id=${ataque.id}>${ataque.nombre}</button>`
        divbuttons.innerHTML += boton
    })

    agregareventobotones()


}


function enfrentamiento(ataqueJugador){
    let ataqueEnemigo = aleatorio(0,ataquesBE.length-1)
    console.log(ataquesBE[ataqueEnemigo].nombre)
    console.log(ataqueJugador)

    if(ataqueJugador == "agua" & ataquesBE[ataqueEnemigo].nombre == "🔥"){
        console.log('ganaste')
    }else if (ataqueJugador == "fuego" & ataquesBE[ataqueEnemigo].nombre == "🌱"){
        console.log('ganaste')
    }else if (ataqueJugador == "tierra" & ataquesBE[ataqueEnemigo].nombre == "💧"){
        console.log('ganaste')
    }else if(ataqueJugador == ataquesBE[ataqueEnemigo].nombre){
        console.log('empate')
    }
    else {
        console.log('perdiste')
    }
}


function agregareventobotones(){
    botones = document.querySelectorAll('.Bataque')
    console.log(botones)
    botones.forEach(boton =>{
        boton.addEventListener('click', (e)=>{
        if(e.target.textContent == "🔥"){
            boton.style.background = '#ffff'
            boton.disabled = true;
            enfrentamiento('fuego')
        }else if(e.target.textContent == "💧"){
            enfrentamiento('agua')
            boton.style.background = '#ffff'
            boton.disabled = true;
        }else if(e.target.textContent == "🌱"){
            enfrentamiento('tierra')
            boton.style.background = '#ffff'
            boton.disabled = true;
        }
        })
    })
}

function cargarAtaques(mascotaJugador){
    for(let i = 0; i<Mokepones.length; i++){
        if(mascotaJugador == Mokepones[i].nombre){
            ataquesB = Mokepones[i].ataques
        }
    }
    for(let i = 0; i<Mokepones.length; i++){
        if(mascenemigo == Mokepones[i].nombre){
            ataquesBE = Mokepones[i].ataques
        }
    }
}

function selecmascenemigo(){
    let numero = aleatorio(1,3)
    if(numero==1){
        mascenemigo = "Ratigueya";
    }else if(numero==2){
        mascenemigo = "Hipodoge"
    }else {
        mascenemigo = "Capipepo"
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', cargarjuego)