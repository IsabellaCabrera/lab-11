import { obtenerPersonajes, obtenerDetallePersonaje } from "./utils.js";

async function mostrarPersonajes() {
    try {
        const personajes = await obtenerPersonajes();
        const contenedor = document.querySelector('.personajes-container');

        personajes.forEach(personaje => {
            const carta = document.createElement('div');
            carta.classList.add('personaje-card');
            carta.setAttribute('data-id', personaje.uuid);

            const imagen = document.createElement('img');
            imagen.src = personaje.displayIcon;
            imagen.alt = personaje.displayName;

            const nombre = document.createElement('h2');
            nombre.textContent = personaje.displayName;

            const descripcion = document.createElement('p');
            descripcion.textContent = personaje.description;

            const botonDetalle = document.createElement('button');
            botonDetalle.textContent = 'Ver Detalle';
            botonDetalle.classList.add('ver-detalle-btn');
            botonDetalle.addEventListener('click', () => {
                window.location.href = `detail.html?id=${personaje.uuid}`;
            });

            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.classList.add('eliminar-btn');
            botonEliminar.addEventListener('click', () => {
                eliminarPersonaje(personaje.uuid);
            });

            carta.appendChild(imagen);
            carta.appendChild(nombre);
            carta.appendChild(descripcion);
            carta.appendChild(botonDetalle);
            carta.appendChild(botonEliminar);

            contenedor.appendChild(carta);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

async function eliminarPersonaje(id) {
    
        const personajeAEliminar = document.querySelector(`.personaje-card[data-id="${id}"]`);
        if (personajeAEliminar) {
            personajeAEliminar.remove();
        }
        console.error('Error al eliminar el personaje:', error);
}

document.addEventListener('DOMContentLoaded', mostrarPersonajes);

document.getElementById('busqueda').addEventListener('input', () => {
    const textoBusqueda = document.getElementById('busqueda').value.toLowerCase();
    const cartas = document.querySelectorAll('.personaje-card');
    cartas.forEach(carta => {
        const nombrePersonaje = carta.querySelector('h2').textContent.toLowerCase();
        if (nombrePersonaje.includes(textoBusqueda)) {
            carta.style.display = 'block';
        } else {
            carta.style.display = 'none';
        }
    });
});
