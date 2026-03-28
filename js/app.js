import { mapear, obtener, $, url } from "./funciones.js";

const principal = $("main")
const boton = $("button")


boton.addEventListener("click", async function (evento) {
    const listado = await obtener(url, principal)
    /* fddsfdsfsdf */
    mapear(principal, listado)

    Swal.fire({
        title: "Lista cargada!",
        text: "Se ha traido y mostrado la lista en tu HTML",
        icon: "success",
       /*  timer: 2000,
        timerProgressBar: true, */

    }).then(
        function (respuesta) {
            confetti({
                particleCount: 100, // Number of particles
                spread: 70,         // How far off center the confetti can go in degrees
                origin: { y: 0.6 }, // Position from where confetti is launched
                colors: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"], // Array of colors
            });
        }
    )
})