// Referencias a los elementos del DOM
const selectPrimerPlato = document.getElementById("primer-plato");
const selectSegundoPlato = document.getElementById("segundo-plato");
const selectPostre = document.getElementById("postre");
const imagenPrimerPlato = document.getElementById("imagen-primer-plato");
const imagenSegundoPlato = document.getElementById("imagen-segundo-plato");
const imagenPostre = document.getElementById("imagen-postre");
const checkboxDescuento = document.getElementById("descuento");
const totalDisplay = document.getElementById("total");

// Función para actualizar la imagen según la opción seleccionada
function actualizarImagen(selectElement, imagenElement, tipoPlato) {
    let imageUrl = "";

    if (tipoPlato === "primerPlato") {
        if (selectElement.value === "10") imageUrl = "image/ensalada.jpg";
        else if (selectElement.value === "12") imageUrl = "image/crema_verduras.jpg";
    } else if (tipoPlato === "segundoPlato") {
        if (selectElement.value === "15") imageUrl = "image/pollo.jpg";
        else if (selectElement.value === "18") imageUrl = "image/pescado.jpg";
    } else if (tipoPlato === "postre") {
        if (selectElement.value === "5") imageUrl = "image/fruta.png";
        else if (selectElement.value === "7") imageUrl = "image/helado.jpg";
    }

    if (imageUrl === "") {
        imagenElement.style.display = "none";
    } else {
        imagenElement.src = imageUrl;
        imagenElement.style.display = "block";
    }
}

// Event listeners para actualizar la imagen cuando cambia la selección
selectPrimerPlato.addEventListener("change", () => actualizarImagen(selectPrimerPlato, imagenPrimerPlato, "primerPlato"));
selectSegundoPlato.addEventListener("change", () => actualizarImagen(selectSegundoPlato, imagenSegundoPlato, "segundoPlato"));
selectPostre.addEventListener("change", () => actualizarImagen(selectPostre, imagenPostre, "postre"));

// Función para calcular el total con o sin descuento
function calcularTotal() {
    const precioPrimerPlato = parseFloat(selectPrimerPlato.value) || 0;
    const precioSegundoPlato = parseFloat(selectSegundoPlato.value) || 0;
    const precioPostre = parseFloat(selectPostre.value) || 0;
    
    let total = precioPrimerPlato + precioSegundoPlato + precioPostre;

    if (checkboxDescuento.checked) {
        total *= 0.9;
    }

    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}
