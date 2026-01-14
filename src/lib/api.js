import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())

let jugadores = []

class Jugador{
    constructor(id) {
        this.id = id
    }

    insertarmokepon(nombre){
        this.nombre = nombre
    }
}

class Mokepon{
    constructor(nombre){
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res)=>{ //El slash es utilizado para indicar que es la dir raiz
    let id = `${Math.random()}`
    let jugador = new Jugador(id)

    res.setHeader("Access-Control-Allow-Origin", "*")

    jugadores.push(jugador)

    res.send(id)
})

app.post("/mokepon/:idjugador", (req,res)=>{
    let jugadorid = req.params.idjugador
    let nombre = req.body.nombre
    let mokepon = new Mokepon(nombre)
    let jugadorindex = jugadores.findIndex((jugador) => jugadorid == jugador.id)
    if(jugadorindex>=0){
        jugadores[jugadorindex].insertarmokepon(mokepon)
    }
    console.log(jugadores)
    console.log(jugadorid)

    let enemigos = jugadores.findIndex((jugador)=> jugadorid != jugador.id)
    if(enemigos<0){
        enemigos = 'nada'
    }

    res.end({
        enemigos
    })
})

app.listen(8080, ()=>{
    console.log('funciona')
})