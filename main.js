
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

// Funcionalidad de los tamaños de letra

const botonTamanoPequeno = document.querySelector('[data-tamano="pequeno"]');
const botonTamanoEstandar = document.querySelector('[data-tamano="estandar"]');
const botonTamanoGrande = document.querySelector('[data-tamano="grande"]');

botonTamanoPequeno.addEventListener("click", function() {
    contenidoPrincipal.classList.remove("tamano-estandar", "tamano-grande");
    contenidoPrincipal.classList.add("tamano-pequeno");

    botonTamanoPequeno.classList.add("activo");
    botonTamanoEstandar.classList.remove("activo");
    botonTamanoGrande.classList.remove("activo");
});

botonTamanoEstandar.addEventListener("click", function() {
    contenidoPrincipal.classList.remove("tamano-pequeno", "tamano-grande");
    contenidoPrincipal.classList.add("tamano-estandar");

    botonTamanoEstandar.classList.add("activo");
    botonTamanoPequeno.classList.remove("activo");
    botonTamanoGrande.classList.remove("activo");
});

botonTamanoGrande.addEventListener("click", function() {
    contenidoPrincipal.classList.remove("tamano-pequeno", "tamano-estandar");
    contenidoPrincipal.classList.add("tamano-grande");

    botonTamanoGrande.classList.add("activo");
    botonTamanoPequeno.classList.remove("activo");
    botonTamanoEstandar.classList.remove("activo");
});