import './App.css';
import MyTitle from './components/MyTitle';
import PokemonCard from './components/PokemonCard';

function App() {

  const selectedpokemon = pokemonList[3];

  return (
      <div>
        <MyTitle />
        <PokemonCard pokemon={selectedpokemon} />
      </div>
  );
}

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
  {
    name: "Pykoduck",
    imgSrc:
      "https://w7.pngwing.com/pngs/227/903/png-transparent-pokemon-pysduck-pokemon-go-pikachu-misty-psyduck-pokemon-orange-pokemon-pokemon-png-thumbnail.png",
  },
  {
    name: "Hunter",
    imgSrc:
      "https://w7.pngwing.com/pngs/514/938/png-transparent-pokemon-hunter-character-pokemon-gengar-hoenn-illustration-pokemon-purple-mammal-violet-thumbnail.png",
  },
];

export default App
