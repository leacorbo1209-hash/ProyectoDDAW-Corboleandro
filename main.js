
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

// Funcionalidad de las secciones plegables

const secciones = contenidoPrincipal.querySelectorAll("section");

secciones.forEach(function(seccion) {
    const tituloSeccion = seccion.querySelector("h2");
    const flecha = document.createElement("span");

    flecha.textContent = " ▾";
    tituloSeccion.append(flecha);

    tituloSeccion.addEventListener("click", function() {
        seccion.classList.toggle("colapsada");

        if (seccion.classList.contains("colapsada")) {
            flecha.textContent = " ▸";
        } else {
            flecha.textContent = " ▾";
        }
    });
});

// Elementos del formulario de comentarios

const formularioComentarios = document.querySelector("#formulario-comentarios");
const nombreComentario = document.querySelector("#nombre-comentario");
const textoComentario = document.querySelector("#texto-comentario");
const contadorCaracteres = document.querySelector("#contador-caracteres");
const avisosComentarios = document.querySelector("#avisos-comentarios");
const listaComentarios = document.querySelector("#lista-comentarios");
// Contador de caracteres del comentario

textoComentario.addEventListener("input", function() {
    contadorCaracteres.textContent = textoComentario.value.length + " / 200";
});

// Validación del formulario de comentarios

formularioComentarios.addEventListener("submit", function(evento) {
    evento.preventDefault();

    avisosComentarios.textContent = "";
    nombreComentario.classList.remove("error");
    textoComentario.classList.remove("error");

    const nombreLimpio = nombreComentario.value.trim();
    const comentarioLimpio = textoComentario.value.trim();

    let mensajeError = "";

    if (nombreLimpio === "") {
        mensajeError += "El nombre no puede estar vacío. ";
        nombreComentario.classList.add("error");
    }

    if (comentarioLimpio.length < 10 || comentarioLimpio.length > 200) {
        mensajeError += "El comentario debe tener entre 10 y 200 caracteres. ";
        textoComentario.classList.add("error");
    }

    if (mensajeError !== "") {
        avisosComentarios.textContent = mensajeError;
        return;
    }
    // Crear y mostrar el comentario

const nuevoComentario = document.createElement("li");
const nombreMostrado = document.createElement("strong");
const textoMostrado = document.createElement("p");

nombreMostrado.textContent = nombreLimpio;
textoMostrado.textContent = comentarioLimpio;

nuevoComentario.append(nombreMostrado);
nuevoComentario.append(textoMostrado);
const botonBorrar = document.createElement("button");

botonBorrar.textContent = "Borrar";
botonBorrar.type = "button";

botonBorrar.addEventListener("click", function() {
    nuevoComentario.remove();
});

nuevoComentario.append(botonBorrar);
listaComentarios.append(nuevoComentario);

// Limpiar el formulario

nombreComentario.value = "";
textoComentario.value = "";
contadorCaracteres.textContent = "0 / 200";
});
