
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

