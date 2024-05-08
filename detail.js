import { obtenerDetallePersonaje } from "./utils.js";

async function mostrarDetallePersonaje() {
    
  const params = new URLSearchParams(window.location.search);
     const id = params.get('id');

        const detallePersonaje = await obtenerDetallePersonaje(id);

        const contenedor = document.querySelector('.detalle-personaje-container');
        

        
        const nombre = document.createElement('h2');
        nombre.textContent = detallePersonaje.displayName;
        nombre.classList.add('nombre-personaje');
        

        const descripcion = document.createElement('p');
        descripcion.textContent = detallePersonaje.description;
        descripcion.classList.add('descripcion-personaje');


        const imagen = document.createElement('img');
        imagen.src = detallePersonaje.fullPortrait;
        imagen.alt = detallePersonaje.displayName;
        imagen.classList.add('imagen-personaje');

        const botonVolver = document.createElement('button');
        botonVolver.textContent = 'Volver';
        botonVolver.addEventListener('click', () => {
            window.location.href = 'index.html';
        });

        contenedor.appendChild(nombre);
        contenedor.appendChild(descripcion);
        contenedor.appendChild(imagen);
        contenedor.appendChild(botonVolver);
    
}

document.addEventListener('DOMContentLoaded', mostrarDetallePersonaje);
