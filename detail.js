async function cargarDetallePersonaje() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    try {
        const personaje = await obtenerPersonajePorId(id);

        const detallePersonajeContainer = document.getElementById('detalle-personaje');

        const imagenElement = document.createElement('img');
        imagenElement.src = personaje.fullPortrait;
        imagenElement.alt = personaje.displayName;

        const nombreElement = document.createElement('h2');
        nombreElement.textContent = personaje.displayName;

        const descripcionElement = document.createElement('p');
        descripcionElement.textContent = personaje.description;

        const rolElement = document.createElement('p');
        rolElement.textContent = personaje.role.description;

        detallePersonajeContainer.appendChild(imagenElement);
        detallePersonajeContainer.appendChild(nombreElement);
        detallePersonajeContainer.appendChild(descripcionElement);
        detallePersonajeContainer.appendChild(rolElement);
    } catch (error) {
        console.error('Error:', error);
    }
}
console.log
