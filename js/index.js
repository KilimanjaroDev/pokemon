
import { typeColor } from "./typeColor.js";
import { fetchPokemons } from "./fetchPokemons.js";

const card = document.querySelector('.card');
const btn = document.querySelector('.generate');

const getPokemonData = () => {
   fetchPokemons().then((data) => generateCard(data))
};

const generateCard = (data) => {
    const xpValue = data.base_experience;
    const hpValue = data.stats[0].base_stat;
    const pokemonImage = data.sprites.other.dream_world.front_default;
    const pokemonName = data.name[0].toUpperCase() + data.name.slice(1);
    const attackValue = data.stats[1].base_stat;
    const defenceValue = data.stats[2].base_stat;
    const speedValue = data.stats[5].base_stat;

    const themeColor = typeColor[data.types[0].type.name];
    card.innerHTML =

        ` 
        <div class = 'stats'><p class="hp"><span>HP</span> ${hpValue}</p>
          <p class="xp"><span>XP</span> ${xpValue}</p></div>
          
            <img src="${pokemonImage}" alt="${pokemonName} image">
            <h1 class="pokemon-name">${pokemonName}</h1>
            <div class="types">
            
            </div>
            <div class="stats">
                <div>
                    <h2>${attackValue}</h2>
                    <p>Attack</p>
                </div>
                <div>
                    <h2>${defenceValue}</h2>
                    <p>Defense</p>
                </div>
                <div>
                    <h2>${speedValue}</h2>
                    <p>Speed</p>
                </div> `;
    appendTypes(data.types);
    styleCard(themeColor);
  
}

const appendTypes = (types) => {
    types.forEach((item) => {
        const span = document.createElement('span')
        span.textContent = item.type.name;
        document.querySelector('.types').appendChild(span);
    })
}

const styleCard = (color) => {
    
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffff 36%)`;
    card.querySelectorAll('.types span').forEach(typeColor => typeColor.style.backgroundColor = color)

};
    
btn.addEventListener('click', getPokemonData);
window.addEventListener('load', getPokemonData);