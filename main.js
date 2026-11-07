
// Generación automática del índice de navegación

const contenidoPrincipal = document.querySelector("main");
const indiceAutomatico = document.querySelector("#indice-automatico");
const titulos = contenidoPrincipal.querySelectorAll("h2");

titulos.forEach(function(titulo) {
    const elementoLista = document.createElement("li");
    const enlace = document.createElement("a");

    enlace.textContent = titulo.textContent;
    enlace.href = "#" + titulo.id;

    elementoLista.append(enlace);
    indiceAutomatico.append(elementoLista);
});

// Funcionalidad del modo oscuro

const botonModo = document.querySelector("#boton-modo");

botonModo.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        botonModo.textContent = "Modo claro";
    } else {
        botonModo.textContent = "Modo oscuro";
    }
});