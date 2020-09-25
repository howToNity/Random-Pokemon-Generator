const fetchPokemon = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/${
    Math.floor(Math.random() * 893) + 1
  }`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const pokemon = {
        name: data.name,
        id: data.id,
        image: data.sprites["front_default"],
        type: data.types.map((type) => type.type.name).join(", "),
        height: data.height,
        weight: data.weight,
      };
      pokemon_img.width = 100;
      pokemon_img.src = pokemon.image;
      pokemon_name.innerHTML = pokemon.name;
      pokemon_type.innerHTML = pokemon.type;
      pokemon_height.innerHTML = pokemon.height;
      pokemon_weight.innerHTML = pokemon.weight;
      if (pokemon.image === null) {
        pokemon_img.src = "./na.jpg";
        pokemon_img.width = 100;
      }
    });
};

fetchPokemon();
