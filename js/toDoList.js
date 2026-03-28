import { $, mapearListado } from "./funciones.js";

const nueva = $("#nuevaTarea")
const enviar = $("#enviar")
const tareasUL = $("ul.tareas")
let tareas = []

enviar.addEventListener("click", function(evento) {
    console.log("Que es la tarea?",nueva.value);
    tareas.unshift(nueva.value)
    nueva.value = ""
    console.log(tareas);
    mapearListado(tareasUL, tareas)
})

tareasUL.addEventListener("click", function (evento) {
    const e = evento.target

    tareas = tareas.filter(function(elemento){
        console.log(elemento, e.textContent);
        
        return elemento !== e.textContent
    })

    /* if (e.tagName === "LI"){
        e.remove()
    } */

    mapearListado(tareasUL, tareas)
    
})

