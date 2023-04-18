import axios from "axios";
import React from "react"

const URL ='https://pokeapi.co/api/v2/'

export const fetchPokemons = async(limit, offset) => {
     try{
          const { data } = await axios.get( URL + `pokemon?limit=${limit}&offset=${offset}`);
          return data;
     }catch(e) {
          console.log("eror");
     }
};

export const fetchPokemon = async(id) => {
     try{
          const { data } = await axios.get( URL + `pokemon/${id}`);
          return data;
     }catch(e) {
          console.log("eror");
     }
};

// export const fetchPokemon = (url) =>{};