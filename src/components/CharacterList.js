import React, { useEffect, useState } from "react";
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

const [char, setChar] = useState([]);
const searchHandler = (event) =>{
  return char.filter(ch => ch.name === event.target.value);
}
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChar = () =>{
      axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
           .then(response => {
            setChar(response.data.results);
           })
           .catch(error => {
            console.error('Server Error', error);
          });
    }

    getChar();
  }, []);

  return (
    <section className="character-list">
      <form>
        <input type='text' placeholder="Search" onChange={searchHandler}/>
      </form>
      {
        char.map(ch =>(
          <CharacterCard key={ch.id} ch={ch}/>

        ))
      }
    </section>
  );
}
