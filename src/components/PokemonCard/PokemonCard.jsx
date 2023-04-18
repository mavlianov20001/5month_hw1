import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




const PokemonCard = ({pokemon}) => {
  const [image, setImage] =useState('')
  useEffect(()=>{
    axios.get(pokemon.url)
    .then((data) =>{
      // console.log(data);
      setImage(data.data.sprites.other.dream_world.front_default)
    })
  },[pokemon.url])
  
  
  return (
    <Link style={{textDecoration: 'none'}} to={`/about/${pokemon?.name}`}>
    <div key={pokemon?.name} className='pokemonCard'>
    {pokemon.name}
    <img className='pokemonImg' src={image} alt='pokemon images' />
    </div>
    </Link>
  )
}

export default PokemonCard