// src/components/PokemonDetails/PokemonDetails.jsx

import { useParams } from 'react-router'; // Add this import

const PokemonDetails = (props) => {
  console.log(props); 
  
  const { pokemonId } = useParams(); // Move this inside, right after props log
  console.log('pokemonId:', pokemonId);

   const singlePokemon = props.pokemon.find((poke) => (
    poke._id === Number(pokemonId)
  ));
  console.log('Pokemon Object:', singlePokemon)


  return (
    <>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  );

};

export default PokemonDetails;