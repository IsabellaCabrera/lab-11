import { obtenerPersonajes } from "./utils.js";

async function mostrarPersonajes() {
    try {
       
        const personajes = await obtenerPersonajes();

      
        const contenedor = document.querySelector('.personajes-container');

       
        personajes.forEach(personaje => {
           
            const carta = document.createElement('div');
            carta.classList.add('personaje-card');

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

            window.location.href = `detail.html?id=${personaje.id}`;
            });

            carta.appendChild(imagen);
            carta.appendChild(nombre);
            carta.appendChild(descripcion);
            carta.appendChild(botonDetalle);

  
            contenedor.appendChild(carta);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', mostrarPersonajes);
