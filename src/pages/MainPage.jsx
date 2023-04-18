import React, {useEffect, useState} from 'react';
import { fetchPokemons } from '../Api/fetchPokemons';
import Pagination from '../components/Pagination/Pagination';
import {Button} from "@mui/material";
import PokemonCard from "../components/PokemonCard/PokemonCard.jsx";

const MainPage = () => {
const [theme, setTheme] = useState('dark');
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] =useState(0)
  
  const toggleTheme = () =>{
  const newTheme = theme === 'dark' ? 'light' : 'dark'
  setTheme(newTheme)
}

    const limit = 9;

    useEffect(() => {
        fetchPokemons(limit,offset)
            .then((data) => {
        setPokemonList(data.results);
        const count = Math.ceil(data.count / limit);
        setPageCount(count);
    });
    },[offset])


    const changePageFunc = (type) =>{
    if(type === 'next') {
      setOffset(prev => prev += 10)
      setPage(prev => prev += 1 )
    }else{
      if (offset <= 9) return
      setOffset(prev => prev - 10)
      setPage(prev => prev -= 1 )
    }
    }

     return (
          <>
            <div className={`app ${theme}`}>
          <Button variant='outlined' onClick={toggleTheme}>Change Theme</Button>
          <div className='pokemonList'>
            {pokemonList.map(pokemon => <PokemonCard pokemon={pokemon} /> )}
          </div>
          <Pagination theme={theme} changePageFunc={changePageFunc} page={page} pageCount={pageCount}/>
      </div>
      </>
     );
     }
export default MainPage;