function PokemonCard() {
    const pokemon = pokemonList[2];

    return <figure className="card">
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} className="card-img"/> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
    </figure>;
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
  ];
  
  export default PokemonCard;
