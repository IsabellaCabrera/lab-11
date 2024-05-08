
export const obtenerPersonajes = async () => {
    const response = await fetch("https://valorant-api.com/v1/agents");
    const data = await response.json();
    return data.data;
};

export const obtenerDetallePersonaje = async (id) => {
    const response = await fetch(`https://valorant-api.com/v1/agents/${id}`);
    const data = await response.json();
    return data.data;
};

