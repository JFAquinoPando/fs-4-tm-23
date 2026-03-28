export async function obtener(apiUrl = "", elementoPadre = "") {
   return fetch(apiUrl).then(
        function (respuesta) {
            console.log("Respuesta:", respuesta);

            return respuesta.json()
        }
    ).then(
        function (datos) {
            let usar = datos
            if (!Array.isArray(usar)) {
                usar = usar.items
            }

            console.log("datos", usar);
            return usar

        }
    )
}

export function mapear(elementoPadre, elArray) {
    if (!(typeof elementoPadre == "object")) {
        document.querySelector("body")
            .insertAdjacentText("afterbegin", "ELEMENTO PADRE NO VÁLIDO")
        return
    }

    if (!Array.isArray(elArray)) {
        document.querySelector("body")
            .insertAdjacentText("afterbegin", "LISTADO NO VÁLIDO")
        return
    }

    const nuevoArray = elArray.map(
        function (elemento) {
            return elemento.name ?? elemento.title.rendered
        }
    )

    elementoPadre.insertAdjacentHTML("afterbegin",
        `<ul>
            <li>${nuevoArray.join("</li><li>")}</li>
        </ul>`)
}

export const $ = function (elemento) {
    return document.querySelector(elemento)
}

export const url = "https://dragonball-api.com/api/characters"