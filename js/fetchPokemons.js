export const fetchPokemons = () => {
    const id = Math.floor(Math.random() * 150) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url).then(response => response.json());
}