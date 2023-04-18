import React, { useEffect, useState } from 'react';
import { fetchPokemon } from '../Api/fetchPokemons';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const AboutPage = () => {
     const [poki, setPoki] = useState({})
     const {id} = useParams()
     const navigate = useNavigate()

     const back = () => navigate(-1)

     useEffect(() => {
          fetchPokemon(id)
          .then(data => setPoki(data))
     }, [id])
     return (
          <div>
               <Button variant='contained' onClick={back}>back</Button>
               <h2>{poki?.name}</h2>
               <h2>Height: {poki?.height}</h2>
               <img src={poki?.sprites?.other?.dream_world?.front_default} alt="" />
               <img src={poki?.sprites?.other?.home?.front_default} alt="" />
               <img src={poki?.sprites?.back_default} alt="" />
               <img src={poki?.sprites?.front_default} alt="" />
          </div>
     );
};

export default AboutPage;